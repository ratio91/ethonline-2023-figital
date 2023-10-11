//SPDX-License-Identifier: MIT
pragma solidity >=0.8.0 <0.9.0;

import "@openzeppelin/contracts/metatx/ERC2771Context.sol";
import "@openzeppelin/contracts/token/ERC721/IERC721Receiver.sol";

contract TradeController is
    ERC2771Context,
    IERC721Receiver
{
    address payable feeCollector;
    address looslyCoupledNFTContract;
    address tightlyCoupledNFTContract;
    uint256 internal _withdrawableAmount;
    mapping(uint256 => address payable) internal lastTokenSeller;
    mapping(address => uint256) internal lastTokenSalesProceeds;

    constructor(
        address _feeCollector,
        address _forwarder,
        address _looslyCoupledNFTContract,
        address _tightlyCoupledNFTContract
    )
    ERC2771Context(_forwarder)
    {
        feeCollector = payable(_feeCollector);
        looslyCoupledNFTContract = _looslyCoupledNFTContract;
        tightlyCoupledNFTContract = _tightlyCoupledNFTContract;
    }

    /**
     * offer a phygital item for sale on a web3 marketplace (e.g. OpenSea)
     * @param marketplaceContract address of the marketplace smart contract
     * @param hashedMsg random message of challenge-responce by the NFT chip
     * @param r part of the signature of the challenge-responce by the NFT chip
     * @param s part of the signature of the challenge-responce by the NFT chip
     * @param v part of the signature of the challenge-responce by the NFT chip
     */
    function offerItem(
        address marketplaceContract,
        bytes32 hashedMsg,
        bytes32 r,
        bytes32 s,
        uint8 v
    ) external {
        // lock up the tightly-coupled NFT
        (
            bool transferSuccess, 
        ) = tightlyCoupledNFTContract.call(
            abi.encodeWithSignature(
                "transferFrom(bytes32,bytes32,bytes32,uint8,bool)",
                hashedMsg,
                r,
                s,
                v,
                false
            )
        );
        require(transferSuccess, "Transfer failed");

        // allow marketplace smart contract to take away the loosly-coupled NFT
        (
            bool approveSuccess, 
        ) = looslyCoupledNFTContract.call(
            abi.encodeWithSignature(
                "setApprovalForAll(address,bool)",
                marketplaceContract,
                true
            )
        );
        require(approveSuccess, "Approve failed");
    }

    /**
     * redeem a phygital item after buying it on a web3 marketplace (e.g. OpenSea)
     * @param hashedMsg random message of challenge-responce by the NFT chip
     * @param r part of the signature of the challenge-responce by the NFT chip
     * @param s part of the signature of the challenge-responce by the NFT chip
     * @param v part of the signature of the challenge-responce by the NFT chip
     */
    function redeemItem(
        bytes32 hashedMsg,
        bytes32 r,
        bytes32 s,
        uint8 v
    ) external {
        // swap the loosly-coupled NFT against the tightly-coupled NFT
        (
            bool swapSuccess, 
        ) = tightlyCoupledNFTContract.call(
            abi.encodeWithSignature(
                "swapSalesNftToTwinNft(bytes32,bytes32,bytes32,uint8)",
                hashedMsg,
                r,
                s,
                v
            )
        );
        require(swapSuccess, "Swap failed");

        uint256 _tokenId = transformAddress(getSigner(hashedMsg, r, s, v));
        uint256 _toSeller = lastTokenSalesProceeds[_msgSender()] / 100 * 95;

        // send money to the seller
        lastTokenSeller[_tokenId].transfer(_toSeller);

        // TODO: send money to the creator

        // keep the rest as fees
        _withdrawableAmount += lastTokenSalesProceeds[_msgSender()] - _toSeller;
    }

    receive() external payable {
        // store the buyer and the amount of money received by the web3 marketplace
        lastTokenSalesProceeds[msg.sender] += msg.value;
    }

    function withdrawFees(address _to) external {
        require(_msgSender() == feeCollector, "Only fee collector can withdraw fees");
        require(_withdrawableAmount > 0, "No more funds to withdraw");
        payable(_msgSender()).transfer(_withdrawableAmount);
        (bool success, ) = payable(_to).call{
            value: (_withdrawableAmount)
        }("");
        require(success, "Failed to withdraw funds!");
        _withdrawableAmount = 0;
    }

    /// @dev recover the address associated with the public key from elliptic curve signature
    function getSigner(
        bytes32 hashedMsg,
        bytes32 r,
        bytes32 s,
        uint8 v
    ) public pure returns (address signer) {
        return ecrecover(hashedMsg, v, r, s);
    }

    function transformAddress(
        address signer
    ) public pure returns (uint256 tokenId) {
        return uint256(uint160(signer));
    }

    function onERC721Received(address, address, uint256, bytes calldata) 
    external pure returns (bytes4) {
        return IERC721Receiver.onERC721Received.selector;
    }
}
