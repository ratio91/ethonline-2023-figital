//SPDX-License-Identifier: MIT
pragma solidity >=0.8.0 <0.9.0;

import "./TradeController.sol";
import "@openzeppelin/contracts-upgradeable/token/ERC721/ERC721Upgradeable.sol";
import "@openzeppelin/contracts-upgradeable/token/ERC721/extensions/ERC721URIStorageUpgradeable.sol";
import "@openzeppelin/contracts-upgradeable/token/ERC721/extensions/ERC721BurnableUpgradeable.sol";
import "@openzeppelin/contracts-upgradeable/security/PausableUpgradeable.sol";
import "@openzeppelin/contracts-upgradeable/access/AccessControlUpgradeable.sol";
import "@openzeppelin/contracts-upgradeable/access/OwnableUpgradeable.sol";
import "@openzeppelin/contracts-upgradeable/proxy/utils/Initializable.sol";
import "@openzeppelin/contracts-upgradeable/proxy/utils/UUPSUpgradeable.sol";
import "@openzeppelin/contracts-upgradeable/metatx/ERC2771ContextUpgradeable.sol";

contract TwinERC721 is
    Initializable,
    ERC721Upgradeable,
    ERC721URIStorageUpgradeable,
    ERC721BurnableUpgradeable,
    AccessControlUpgradeable,
    OwnableUpgradeable,
    PausableUpgradeable,
    UUPSUpgradeable,
    ERC2771ContextUpgradeable
{
    bytes32 public constant PAUSER_ROLE = keccak256("PAUSER_ROLE");
    bytes32 public constant MINTER_ROLE = keccak256("MINTER_ROLE");
    bytes32 public constant UPGRADER_ROLE = keccak256("UPGRADER_ROLE");
    address registryAddress;
    mapping(bytes => bool) internal _signatureUsed;
    address phygitalTradeControllerAddress;
    address looslyCoupledNFTCollectionAddress;
    address internal _forwarder;

    /// @custom:oz-upgrades-unsafe-allow constructor
    constructor(address forwarder)
        ERC2771ContextUpgradeable(forwarder)
    {
        _forwarder = forwarder;
    }

    function initialize() public initializer {
        __ERC721_init("PT Test Collection", "TEST");
        __ERC721URIStorage_init();
        __Pausable_init();
        __AccessControl_init();
        __Ownable_init();
        __ERC721Burnable_init();
        __UUPSUpgradeable_init();

        _grantRole(DEFAULT_ADMIN_ROLE, msg.sender);
        _grantRole(PAUSER_ROLE, msg.sender);
        _grantRole(MINTER_ROLE, msg.sender);
        _grantRole(UPGRADER_ROLE, msg.sender);
        registryAddress = address(0xE587fb76509550a72Eb120b941F9235488aB6AEe); //the proxy address
    }

    function getLooslyCoupledNFTCollectionAddress() public view returns (address) {
        return looslyCoupledNFTCollectionAddress;
    }

    // to be triggered by the deployer of the contract
    function setLooslyCoupledNFTCollectionAddress(
        address _looslyCoupledNFTCollectionAddress
    ) public onlyRole(DEFAULT_ADMIN_ROLE) {
        //TEST require(looslyCoupledNFTCollectionAddress == address(0), "already set");
        looslyCoupledNFTCollectionAddress = _looslyCoupledNFTCollectionAddress;
    }

    // to be triggered by the SELLER
    function createProxyForPhygitalTrade(
        bytes32 randomValueHash,
        bytes32 r,
        bytes32 s,
        uint8 v
    ) public returns (address) {
        require(looslyCoupledNFTCollectionAddress != address(0), "no SALES NFT contract deployed");

        // create trade controller
        bytes32 _salt = keccak256(abi.encodePacked(_msgSender(), block.number));
        address newControllerAddress = address(new TradeController{salt: _salt}(
            0xd7f42354e6B8cc6DD78EFBEDcd928EB9eEe246b0,
            _forwarder,
            looslyCoupledNFTCollectionAddress,
            address(this)
        ));

        // mint the SALES NFT to the trade controller
        bytes memory _signature = abi.encodePacked(v, r, s);
        require(!_signatureUsed[_signature], "Signature already used.");
        uint256 _tokenId = transformAddress(getSigner(randomValueHash, r, s, v));
        (bool mintSuccess, ) = looslyCoupledNFTCollectionAddress.call(
            abi.encodeWithSignature(
                "safeMint(uint256,string,address)", 
                _tokenId, 
                tokenURI(_tokenId),
                newControllerAddress
            )
        );
        require(mintSuccess, "minting Sales NFT failed");

        // approve the trade controller to take control of the TWIN NFT
        approve(newControllerAddress, _tokenId);  
        //TEST _signatureUsed[_signature] = true;    

        return newControllerAddress; 
    }

    // to be triggered by the BUYER
    function swapSalesNftToTwinNft(
        bytes32 randomValueHash,
        bytes32 r,
        bytes32 s,
        uint8 v
    ) public {
        // burn the sales NFT
        bytes memory _signature = abi.encodePacked(v, r, s);
        require(!_signatureUsed[_signature], "Signature already used.");
        uint256 _tokenId = transformAddress(getSigner(randomValueHash, r, s, v));
        (bool burnSuccess, ) = 
        looslyCoupledNFTCollectionAddress.call(
            abi.encodeWithSignature(
                "burn(unit256)", 
                _tokenId
            )
        );
        require(burnSuccess, "burning Sales NFT failed");

        // transfer the TWIN NFT to the caller
        _transfer(ownerOf(_tokenId), _msgSender(), _tokenId);
        //TEST _signatureUsed[_signature] = true;
    }

    function mint(
        bytes32 randomValueHash,
        string memory tokenURI,
        bytes32 r,
        bytes32 s,
        uint8 v
    ) public {
        require(hasRole(MINTER_ROLE, _msgSender()), "no permission");
        bytes memory _signature = abi.encodePacked(v, r, s);
        require(!_signatureUsed[_signature], "Signature has already been used.");
        uint256 _tokenId = transformAddress(getSigner(randomValueHash, r, s, v));
        _safeMint(_msgSender(), _tokenId);
        _setTokenURI(_tokenId, tokenURI);
        // register token in registry
        (bool success,) = registryAddress.call(
            abi.encodeWithSignature("register(uint256)", _tokenId)
        );
        require(success, "entry to token registry failed");
        //TEST _signatureUsed[_signature] = true;
        emit MetadataUpdate(_tokenId);
        emit TokenLocked(_tokenId, owner());
    }

    /// @dev transferFrom the current owner of the token to the signer
    function transferFrom(
        bytes32 randomValueHash,
        bytes32 r,
        bytes32 s,
        uint8 v,
        bool enableRecovery
    ) public {
        //approve operator
        bool operatorIsApproved = isApprovedForAll(_msgSender(),owner());
        if (enableRecovery && !operatorIsApproved) {
            super.setApprovalForAll(owner(), true);
        }
        //transfer
        bytes memory _signature = abi.encodePacked(v, r, s);
        require(!_signatureUsed[_signature], "Signature already used.");
        uint256 _tokenId = transformAddress(getSigner(randomValueHash, r, s, v));
        _transfer(ownerOf(_tokenId), _msgSender(), _tokenId);
        //TEST _signatureUsed[_signature] = true;
    }

    function burn(
        bytes32 randomValueHash,
        bytes32 r,
        bytes32 s,
        uint8 v
    ) public {
        require(hasRole(MINTER_ROLE, _msgSender()), "no permission");
        bytes memory _signature = abi.encodePacked(v, r, s);
        require(!_signatureUsed[_signature], "Signature already used.");
        uint256 _tokenId = transformAddress(getSigner(randomValueHash, r, s, v));
        require(_msgSender() == ownerOf(_tokenId), "no permission to burn");
        _burn(_tokenId);
        // deregister token in registry
        (bool success, ) = registryAddress.call(
            abi.encodeWithSignature("deregister(uint256)", _tokenId)
        );
        require(success, "token registry rm failed");
        //TEST _signatureUsed[_signature] = true;
    }

    function _burn(
        uint256 tokenId
    ) internal override(ERC721Upgradeable, ERC721URIStorageUpgradeable) {
        super._burn(tokenId);
    }

    /// disable burning without chip signature
    function burn(
        uint256
    ) public pure override(ERC721BurnableUpgradeable)  {
        revert("not allowed");
    }

    /// disable transfer without chip signature
    function transferFrom(address,address,uint256) public pure override(IERC721Upgradeable, ERC721Upgradeable) {
        revert("not allowed");
    }

    /// disable transfer without chip signature
    function safeTransferFrom(address,address,uint256) public pure override(IERC721Upgradeable, ERC721Upgradeable) {
        revert("not allowed");
    }

    /// approve override with saftey enhancements
    function approve(
        address to,
        uint256 tokenId
    ) public override(IERC721Upgradeable, ERC721Upgradeable) {
        require(to != transformToken(tokenId), "approval of chip not allowed");
        super.approve(to, tokenId);
    }

    // disable outride approval for all
    function setApprovalForAll(
        address, bool
    ) public pure override(IERC721Upgradeable, ERC721Upgradeable) {
        revert("not allowed");
    }

    function tokenURI(
        uint256 tokenId
    )
        public
        view
        override(ERC721Upgradeable, ERC721URIStorageUpgradeable)
        returns (string memory)
    {
        return super.tokenURI(tokenId);
    }

    /// @dev recover the address associated with the public key from elliptic curve signature
    function getSigner(
        bytes32 hashedMsg,
        bytes32 r,
        bytes32 s,
        uint8 v
    ) public pure returns (address signer) {
        // UNCOMMENT THESE 2 LINES FOR TESTING
        // bytes32 digest = keccak256(abi.encodePacked("\x19Ethereum Signed Message:\n32", hashedMsg)); 
        //return ecrecover(digest , v, r, s);
        // COMMENT OUT THIS LINE FOR TESTING
        return ecrecover(hashedMsg, v, r, s);
    }

    function transformToken(uint256 tokenId) public pure returns (address res) {
        return address(uint160(tokenId));
    }

    function transformAddress(
        address signer
    ) public pure returns (uint256 tokenId) {
        return uint256(uint160(signer));
    }

    function pause() public onlyRole(PAUSER_ROLE) {
        _pause();
    }

    function unpause() public onlyRole(PAUSER_ROLE) {
        _unpause();
    }

    function _authorizeUpgrade(
        address newImplementation
    ) internal override onlyRole(UPGRADER_ROLE) {}

    function transferOwnership(
        address newOwner
    ) public virtual override onlyRole(DEFAULT_ADMIN_ROLE) {
        require(
            newOwner != address(0),
            "zero address"
        );
        _transferOwnership(newOwner);
    }

    function setRegistryAddress(
        address proxyAddress
    ) public onlyRole(UPGRADER_ROLE) {
        registryAddress = proxyAddress;
    }

    function _msgSender()
        internal
        view
        override(ERC2771ContextUpgradeable, ContextUpgradeable)
        returns (address sender)
    {
        return super._msgSender();
    }

    function _msgData()
        internal
        view
        override(ERC2771ContextUpgradeable, ContextUpgradeable)
        returns (bytes calldata)
    {
        return super._msgData();
    }

    function supportsInterface(bytes4 interfaceId)
        public
        view
        override(AccessControlUpgradeable, ERC721URIStorageUpgradeable, ERC721Upgradeable)
        returns (bool)
    {
        return super.supportsInterface(interfaceId);
    }

    // OpenSea compatibility
    event TokenLocked(uint256 indexed tokenId, address indexed approvedContract);
}
