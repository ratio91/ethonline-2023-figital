//SPDX-License-Identifier: MIT
pragma solidity >=0.8.0 <0.9.0;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721Burnable.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract LooseERC721 is ERC721, ERC721URIStorage, ERC721Burnable, Ownable {
    constructor(
        string memory _name,
        string memory _symbol,
        address owner
    )
        ERC721(_name, _symbol)
        Ownable()
    {
        transferOwnership(owner);
    }

    // mint
    function safeMint(uint256 tokenId, string memory tokenUri, address to) public onlyOwner {
        _safeMint(to, tokenId);
        _setTokenURI(tokenId, tokenUri);
    }

    // burn [only owner of token]
    function burn(uint256 tokenId) public override {
        require(ownerOf(tokenId) == _msgSender(), "Caller not token owner");
        _burn(tokenId);
    }

    // approveAll

    // transfer

    function _burn(
        uint256 tokenId
    ) internal override(ERC721, ERC721URIStorage) {
        super._burn(tokenId);
    }

    function tokenURI(
        uint256 tokenId
    )
        public
        view
        override(ERC721, ERC721URIStorage)
        returns (string memory)
    {
        return super.tokenURI(tokenId);
    }

    function supportsInterface(bytes4 interfaceId)
        public
        view
        override(ERC721, ERC721URIStorage)
        returns (bool)
    {
        return super.supportsInterface(interfaceId);
    }
}