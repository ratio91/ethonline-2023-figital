const contracts = {

  137: [
    {
        chainId: "137",
        name: "Polygon",
        contracts: {
          LooseERC721: {
            address: '0xFfD2c3434b9FdF28051ff79869BbBACE646638d8',
            abi:[    
              {
                "inputs": [
                  {
                    "internalType": "string",
                    "name": "_name",
                    "type": "string"
                  },
                  {
                    "internalType": "string",
                    "name": "_symbol",
                    "type": "string"
                  },
                  {
                    "internalType": "address",
                    "name": "owner",
                    "type": "address"
                  }
                ],
                "stateMutability": "nonpayable",
                "type": "constructor"
              },
              {
                "anonymous": false,
                "inputs": [
                  {
                    "indexed": true,
                    "internalType": "address",
                    "name": "owner",
                    "type": "address"
                  },
                  {
                    "indexed": true,
                    "internalType": "address",
                    "name": "approved",
                    "type": "address"
                  },
                  {
                    "indexed": true,
                    "internalType": "uint256",
                    "name": "tokenId",
                    "type": "uint256"
                  }
                ],
                "name": "Approval",
                "type": "event"
              },
              {
                "anonymous": false,
                "inputs": [
                  {
                    "indexed": true,
                    "internalType": "address",
                    "name": "owner",
                    "type": "address"
                  },
                  {
                    "indexed": true,
                    "internalType": "address",
                    "name": "operator",
                    "type": "address"
                  },
                  {
                    "indexed": false,
                    "internalType": "bool",
                    "name": "approved",
                    "type": "bool"
                  }
                ],
                "name": "ApprovalForAll",
                "type": "event"
              },
              {
                "anonymous": false,
                "inputs": [
                  {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "_fromTokenId",
                    "type": "uint256"
                  },
                  {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "_toTokenId",
                    "type": "uint256"
                  }
                ],
                "name": "BatchMetadataUpdate",
                "type": "event"
              },
              {
                "anonymous": false,
                "inputs": [
                  {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "_tokenId",
                    "type": "uint256"
                  }
                ],
                "name": "MetadataUpdate",
                "type": "event"
              },
              {
                "anonymous": false,
                "inputs": [
                  {
                    "indexed": true,
                    "internalType": "address",
                    "name": "previousOwner",
                    "type": "address"
                  },
                  {
                    "indexed": true,
                    "internalType": "address",
                    "name": "newOwner",
                    "type": "address"
                  }
                ],
                "name": "OwnershipTransferred",
                "type": "event"
              },
              {
                "anonymous": false,
                "inputs": [
                  {
                    "indexed": true,
                    "internalType": "address",
                    "name": "from",
                    "type": "address"
                  },
                  {
                    "indexed": true,
                    "internalType": "address",
                    "name": "to",
                    "type": "address"
                  },
                  {
                    "indexed": true,
                    "internalType": "uint256",
                    "name": "tokenId",
                    "type": "uint256"
                  }
                ],
                "name": "Transfer",
                "type": "event"
              },
              {
                "inputs": [
                  {
                    "internalType": "address",
                    "name": "to",
                    "type": "address"
                  },
                  {
                    "internalType": "uint256",
                    "name": "tokenId",
                    "type": "uint256"
                  }
                ],
                "name": "approve",
                "outputs": [],
                "stateMutability": "nonpayable",
                "type": "function"
              },
              {
                "inputs": [
                  {
                    "internalType": "address",
                    "name": "owner",
                    "type": "address"
                  }
                ],
                "name": "balanceOf",
                "outputs": [
                  {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                  }
                ],
                "stateMutability": "view",
                "type": "function"
              },
              {
                "inputs": [
                  {
                    "internalType": "uint256",
                    "name": "tokenId",
                    "type": "uint256"
                  }
                ],
                "name": "burn",
                "outputs": [],
                "stateMutability": "nonpayable",
                "type": "function"
              },
              {
                "inputs": [
                  {
                    "internalType": "uint256",
                    "name": "tokenId",
                    "type": "uint256"
                  }
                ],
                "name": "getApproved",
                "outputs": [
                  {
                    "internalType": "address",
                    "name": "",
                    "type": "address"
                  }
                ],
                "stateMutability": "view",
                "type": "function"
              },
              {
                "inputs": [
                  {
                    "internalType": "address",
                    "name": "owner",
                    "type": "address"
                  },
                  {
                    "internalType": "address",
                    "name": "operator",
                    "type": "address"
                  }
                ],
                "name": "isApprovedForAll",
                "outputs": [
                  {
                    "internalType": "bool",
                    "name": "",
                    "type": "bool"
                  }
                ],
                "stateMutability": "view",
                "type": "function"
              },
              {
                "inputs": [],
                "name": "name",
                "outputs": [
                  {
                    "internalType": "string",
                    "name": "",
                    "type": "string"
                  }
                ],
                "stateMutability": "view",
                "type": "function"
              },
              {
                "inputs": [],
                "name": "owner",
                "outputs": [
                  {
                    "internalType": "address",
                    "name": "",
                    "type": "address"
                  }
                ],
                "stateMutability": "view",
                "type": "function"
              },
              {
                "inputs": [
                  {
                    "internalType": "uint256",
                    "name": "tokenId",
                    "type": "uint256"
                  }
                ],
                "name": "ownerOf",
                "outputs": [
                  {
                    "internalType": "address",
                    "name": "",
                    "type": "address"
                  }
                ],
                "stateMutability": "view",
                "type": "function"
              },
              {
                "inputs": [],
                "name": "renounceOwnership",
                "outputs": [],
                "stateMutability": "nonpayable",
                "type": "function"
              },
              {
                "inputs": [
                  {
                    "internalType": "uint256",
                    "name": "tokenId",
                    "type": "uint256"
                  },
                  {
                    "internalType": "string",
                    "name": "tokenUri",
                    "type": "string"
                  },
                  {
                    "internalType": "address",
                    "name": "to",
                    "type": "address"
                  }
                ],
                "name": "safeMint",
                "outputs": [],
                "stateMutability": "nonpayable",
                "type": "function"
              },
              {
                "inputs": [
                  {
                    "internalType": "address",
                    "name": "from",
                    "type": "address"
                  },
                  {
                    "internalType": "address",
                    "name": "to",
                    "type": "address"
                  },
                  {
                    "internalType": "uint256",
                    "name": "tokenId",
                    "type": "uint256"
                  }
                ],
                "name": "safeTransferFrom",
                "outputs": [],
                "stateMutability": "nonpayable",
                "type": "function"
              },
              {
                "inputs": [
                  {
                    "internalType": "address",
                    "name": "from",
                    "type": "address"
                  },
                  {
                    "internalType": "address",
                    "name": "to",
                    "type": "address"
                  },
                  {
                    "internalType": "uint256",
                    "name": "tokenId",
                    "type": "uint256"
                  },
                  {
                    "internalType": "bytes",
                    "name": "data",
                    "type": "bytes"
                  }
                ],
                "name": "safeTransferFrom",
                "outputs": [],
                "stateMutability": "nonpayable",
                "type": "function"
              },
              {
                "inputs": [
                  {
                    "internalType": "address",
                    "name": "operator",
                    "type": "address"
                  },
                  {
                    "internalType": "bool",
                    "name": "approved",
                    "type": "bool"
                  }
                ],
                "name": "setApprovalForAll",
                "outputs": [],
                "stateMutability": "nonpayable",
                "type": "function"
              },
              {
                "inputs": [
                  {
                    "internalType": "bytes4",
                    "name": "interfaceId",
                    "type": "bytes4"
                  }
                ],
                "name": "supportsInterface",
                "outputs": [
                  {
                    "internalType": "bool",
                    "name": "",
                    "type": "bool"
                  }
                ],
                "stateMutability": "view",
                "type": "function"
              },
              {
                "inputs": [],
                "name": "symbol",
                "outputs": [
                  {
                    "internalType": "string",
                    "name": "",
                    "type": "string"
                  }
                ],
                "stateMutability": "view",
                "type": "function"
              },
              {
                "inputs": [
                  {
                    "internalType": "uint256",
                    "name": "tokenId",
                    "type": "uint256"
                  }
                ],
                "name": "tokenURI",
                "outputs": [
                  {
                    "internalType": "string",
                    "name": "",
                    "type": "string"
                  }
                ],
                "stateMutability": "view",
                "type": "function"
              },
              {
                "inputs": [
                  {
                    "internalType": "address",
                    "name": "from",
                    "type": "address"
                  },
                  {
                    "internalType": "address",
                    "name": "to",
                    "type": "address"
                  },
                  {
                    "internalType": "uint256",
                    "name": "tokenId",
                    "type": "uint256"
                  }
                ],
                "name": "transferFrom",
                "outputs": [],
                "stateMutability": "nonpayable",
                "type": "function"
              },
              {
                "inputs": [
                  {
                    "internalType": "address",
                    "name": "newOwner",
                    "type": "address"
                  }
                ],
                "name": "transferOwnership",
                "outputs": [],
                "stateMutability": "nonpayable",
                "type": "function"
              }
            ]
        },
            TwinERC721: {
                address: '0x99a0EEBe6D5Abd437485B2c61522A0E5770fc681', //TODO: change to real addr
                abi:[
                  {
                    "inputs": [
                      {
                        "internalType": "address",
                        "name": "forwarder",
                        "type": "address"
                      }
                    ],
                    "stateMutability": "nonpayable",
                    "type": "constructor"
                  },
                  {
                    "anonymous": false,
                    "inputs": [
                      {
                        "indexed": false,
                        "internalType": "address",
                        "name": "previousAdmin",
                        "type": "address"
                      },
                      {
                        "indexed": false,
                        "internalType": "address",
                        "name": "newAdmin",
                        "type": "address"
                      }
                    ],
                    "name": "AdminChanged",
                    "type": "event"
                  },
                  {
                    "anonymous": false,
                    "inputs": [
                      {
                        "indexed": true,
                        "internalType": "address",
                        "name": "owner",
                        "type": "address"
                      },
                      {
                        "indexed": true,
                        "internalType": "address",
                        "name": "approved",
                        "type": "address"
                      },
                      {
                        "indexed": true,
                        "internalType": "uint256",
                        "name": "tokenId",
                        "type": "uint256"
                      }
                    ],
                    "name": "Approval",
                    "type": "event"
                  },
                  {
                    "anonymous": false,
                    "inputs": [
                      {
                        "indexed": true,
                        "internalType": "address",
                        "name": "owner",
                        "type": "address"
                      },
                      {
                        "indexed": true,
                        "internalType": "address",
                        "name": "operator",
                        "type": "address"
                      },
                      {
                        "indexed": false,
                        "internalType": "bool",
                        "name": "approved",
                        "type": "bool"
                      }
                    ],
                    "name": "ApprovalForAll",
                    "type": "event"
                  },
                  {
                    "anonymous": false,
                    "inputs": [
                      {
                        "indexed": true,
                        "internalType": "address",
                        "name": "beacon",
                        "type": "address"
                      }
                    ],
                    "name": "BeaconUpgraded",
                    "type": "event"
                  },
                  {
                    "anonymous": false,
                    "inputs": [
                      {
                        "indexed": false,
                        "internalType": "uint8",
                        "name": "version",
                        "type": "uint8"
                      }
                    ],
                    "name": "Initialized",
                    "type": "event"
                  },
                  {
                    "anonymous": false,
                    "inputs": [
                      {
                        "indexed": true,
                        "internalType": "address",
                        "name": "previousOwner",
                        "type": "address"
                      },
                      {
                        "indexed": true,
                        "internalType": "address",
                        "name": "newOwner",
                        "type": "address"
                      }
                    ],
                    "name": "OwnershipTransferred",
                    "type": "event"
                  },
                  {
                    "anonymous": false,
                    "inputs": [
                      {
                        "indexed": false,
                        "internalType": "address",
                        "name": "account",
                        "type": "address"
                      }
                    ],
                    "name": "Paused",
                    "type": "event"
                  },
                  {
                    "anonymous": false,
                    "inputs": [
                      {
                        "indexed": true,
                        "internalType": "bytes32",
                        "name": "role",
                        "type": "bytes32"
                      },
                      {
                        "indexed": true,
                        "internalType": "bytes32",
                        "name": "previousAdminRole",
                        "type": "bytes32"
                      },
                      {
                        "indexed": true,
                        "internalType": "bytes32",
                        "name": "newAdminRole",
                        "type": "bytes32"
                      }
                    ],
                    "name": "RoleAdminChanged",
                    "type": "event"
                  },
                  {
                    "anonymous": false,
                    "inputs": [
                      {
                        "indexed": true,
                        "internalType": "bytes32",
                        "name": "role",
                        "type": "bytes32"
                      },
                      {
                        "indexed": true,
                        "internalType": "address",
                        "name": "account",
                        "type": "address"
                      },
                      {
                        "indexed": true,
                        "internalType": "address",
                        "name": "sender",
                        "type": "address"
                      }
                    ],
                    "name": "RoleGranted",
                    "type": "event"
                  },
                  {
                    "anonymous": false,
                    "inputs": [
                      {
                        "indexed": true,
                        "internalType": "bytes32",
                        "name": "role",
                        "type": "bytes32"
                      },
                      {
                        "indexed": true,
                        "internalType": "address",
                        "name": "account",
                        "type": "address"
                      },
                      {
                        "indexed": true,
                        "internalType": "address",
                        "name": "sender",
                        "type": "address"
                      }
                    ],
                    "name": "RoleRevoked",
                    "type": "event"
                  },
                  {
                    "anonymous": false,
                    "inputs": [
                      {
                        "indexed": true,
                        "internalType": "uint256",
                        "name": "tokenId",
                        "type": "uint256"
                      },
                      {
                        "indexed": true,
                        "internalType": "address",
                        "name": "approvedContract",
                        "type": "address"
                      }
                    ],
                    "name": "TokenLocked",
                    "type": "event"
                  },
                  {
                    "anonymous": false,
                    "inputs": [
                      {
                        "indexed": true,
                        "internalType": "address",
                        "name": "from",
                        "type": "address"
                      },
                      {
                        "indexed": true,
                        "internalType": "address",
                        "name": "to",
                        "type": "address"
                      },
                      {
                        "indexed": true,
                        "internalType": "uint256",
                        "name": "tokenId",
                        "type": "uint256"
                      }
                    ],
                    "name": "Transfer",
                    "type": "event"
                  },
                  {
                    "anonymous": false,
                    "inputs": [
                      {
                        "indexed": false,
                        "internalType": "address",
                        "name": "account",
                        "type": "address"
                      }
                    ],
                    "name": "Unpaused",
                    "type": "event"
                  },
                  {
                    "anonymous": false,
                    "inputs": [
                      {
                        "indexed": true,
                        "internalType": "address",
                        "name": "implementation",
                        "type": "address"
                      }
                    ],
                    "name": "Upgraded",
                    "type": "event"
                  },
                  {
                    "inputs": [],
                    "name": "DEFAULT_ADMIN_ROLE",
                    "outputs": [
                      {
                        "internalType": "bytes32",
                        "name": "",
                        "type": "bytes32"
                      }
                    ],
                    "stateMutability": "view",
                    "type": "function"
                  },
                  {
                    "inputs": [],
                    "name": "MINTER_ROLE",
                    "outputs": [
                      {
                        "internalType": "bytes32",
                        "name": "",
                        "type": "bytes32"
                      }
                    ],
                    "stateMutability": "view",
                    "type": "function"
                  },
                  {
                    "inputs": [],
                    "name": "PAUSER_ROLE",
                    "outputs": [
                      {
                        "internalType": "bytes32",
                        "name": "",
                        "type": "bytes32"
                      }
                    ],
                    "stateMutability": "view",
                    "type": "function"
                  },
                  {
                    "inputs": [],
                    "name": "UPGRADER_ROLE",
                    "outputs": [
                      {
                        "internalType": "bytes32",
                        "name": "",
                        "type": "bytes32"
                      }
                    ],
                    "stateMutability": "view",
                    "type": "function"
                  },
                  {
                    "inputs": [
                      {
                        "internalType": "address",
                        "name": "to",
                        "type": "address"
                      },
                      {
                        "internalType": "uint256",
                        "name": "tokenId",
                        "type": "uint256"
                      }
                    ],
                    "name": "approve",
                    "outputs": [],
                    "stateMutability": "nonpayable",
                    "type": "function"
                  },
                  {
                    "inputs": [
                      {
                        "internalType": "address",
                        "name": "owner",
                        "type": "address"
                      }
                    ],
                    "name": "balanceOf",
                    "outputs": [
                      {
                        "internalType": "uint256",
                        "name": "",
                        "type": "uint256"
                      }
                    ],
                    "stateMutability": "view",
                    "type": "function"
                  },
                  {
                    "inputs": [
                      {
                        "internalType": "uint256",
                        "name": "",
                        "type": "uint256"
                      }
                    ],
                    "name": "burn",
                    "outputs": [],
                    "stateMutability": "pure",
                    "type": "function"
                  },
                  {
                    "inputs": [
                      {
                        "internalType": "bytes32",
                        "name": "randomValueHash",
                        "type": "bytes32"
                      },
                      {
                        "internalType": "bytes32",
                        "name": "r",
                        "type": "bytes32"
                      },
                      {
                        "internalType": "bytes32",
                        "name": "s",
                        "type": "bytes32"
                      },
                      {
                        "internalType": "uint8",
                        "name": "v",
                        "type": "uint8"
                      }
                    ],
                    "name": "burn",
                    "outputs": [],
                    "stateMutability": "nonpayable",
                    "type": "function"
                  },
                  {
                    "inputs": [
                      {
                        "internalType": "uint256",
                        "name": "tokenId",
                        "type": "uint256"
                      }
                    ],
                    "name": "getApproved",
                    "outputs": [
                      {
                        "internalType": "address",
                        "name": "",
                        "type": "address"
                      }
                    ],
                    "stateMutability": "view",
                    "type": "function"
                  },
                  {
                    "inputs": [],
                    "name": "getLooslyCoupledNFTCollectionAddress",
                    "outputs": [
                      {
                        "internalType": "address",
                        "name": "",
                        "type": "address"
                      }
                    ],
                    "stateMutability": "view",
                    "type": "function"
                  },
                  {
                    "inputs": [
                      {
                        "internalType": "bytes32",
                        "name": "role",
                        "type": "bytes32"
                      }
                    ],
                    "name": "getRoleAdmin",
                    "outputs": [
                      {
                        "internalType": "bytes32",
                        "name": "",
                        "type": "bytes32"
                      }
                    ],
                    "stateMutability": "view",
                    "type": "function"
                  },
                  {
                    "inputs": [
                      {
                        "internalType": "bytes32",
                        "name": "hashedMsg",
                        "type": "bytes32"
                      },
                      {
                        "internalType": "bytes32",
                        "name": "r",
                        "type": "bytes32"
                      },
                      {
                        "internalType": "bytes32",
                        "name": "s",
                        "type": "bytes32"
                      },
                      {
                        "internalType": "uint8",
                        "name": "v",
                        "type": "uint8"
                      }
                    ],
                    "name": "getSigner",
                    "outputs": [
                      {
                        "internalType": "address",
                        "name": "signer",
                        "type": "address"
                      }
                    ],
                    "stateMutability": "pure",
                    "type": "function"
                  },
                  {
                    "inputs": [
                      {
                        "internalType": "bytes32",
                        "name": "role",
                        "type": "bytes32"
                      },
                      {
                        "internalType": "address",
                        "name": "account",
                        "type": "address"
                      }
                    ],
                    "name": "grantRole",
                    "outputs": [],
                    "stateMutability": "nonpayable",
                    "type": "function"
                  },
                  {
                    "inputs": [
                      {
                        "internalType": "bytes32",
                        "name": "role",
                        "type": "bytes32"
                      },
                      {
                        "internalType": "address",
                        "name": "account",
                        "type": "address"
                      }
                    ],
                    "name": "hasRole",
                    "outputs": [
                      {
                        "internalType": "bool",
                        "name": "",
                        "type": "bool"
                      }
                    ],
                    "stateMutability": "view",
                    "type": "function"
                  },
                  {
                    "inputs": [],
                    "name": "initialize",
                    "outputs": [],
                    "stateMutability": "nonpayable",
                    "type": "function"
                  },
                  {
                    "inputs": [
                      {
                        "internalType": "address",
                        "name": "owner",
                        "type": "address"
                      },
                      {
                        "internalType": "address",
                        "name": "operator",
                        "type": "address"
                      }
                    ],
                    "name": "isApprovedForAll",
                    "outputs": [
                      {
                        "internalType": "bool",
                        "name": "",
                        "type": "bool"
                      }
                    ],
                    "stateMutability": "view",
                    "type": "function"
                  },
                  {
                    "inputs": [
                      {
                        "internalType": "address",
                        "name": "forwarder",
                        "type": "address"
                      }
                    ],
                    "name": "isTrustedForwarder",
                    "outputs": [
                      {
                        "internalType": "bool",
                        "name": "",
                        "type": "bool"
                      }
                    ],
                    "stateMutability": "view",
                    "type": "function"
                  },
                  {
                    "inputs": [
                      {
                        "internalType": "bytes32",
                        "name": "randomValueHash",
                        "type": "bytes32"
                      },
                      {
                        "internalType": "string",
                        "name": "tokenURI",
                        "type": "string"
                      },
                      {
                        "internalType": "bytes32",
                        "name": "r",
                        "type": "bytes32"
                      },
                      {
                        "internalType": "bytes32",
                        "name": "s",
                        "type": "bytes32"
                      },
                      {
                        "internalType": "uint8",
                        "name": "v",
                        "type": "uint8"
                      }
                    ],
                    "name": "mint",
                    "outputs": [],
                    "stateMutability": "nonpayable",
                    "type": "function"
                  },
                  {
                    "inputs": [],
                    "name": "name",
                    "outputs": [
                      {
                        "internalType": "string",
                        "name": "",
                        "type": "string"
                      }
                    ],
                    "stateMutability": "view",
                    "type": "function"
                  },
                  {
                    "inputs": [
                      {
                        "internalType": "uint256",
                        "name": "tokenId",
                        "type": "uint256"
                      }
                    ],
                    "name": "offerItem",
                    "outputs": [],
                    "stateMutability": "nonpayable",
                    "type": "function"
                  },
                  {
                    "inputs": [
                      {
                        "internalType": "address",
                        "name": "",
                        "type": "address"
                      },
                      {
                        "internalType": "address",
                        "name": "",
                        "type": "address"
                      },
                      {
                        "internalType": "uint256",
                        "name": "",
                        "type": "uint256"
                      },
                      {
                        "internalType": "bytes",
                        "name": "",
                        "type": "bytes"
                      }
                    ],
                    "name": "onERC721Received",
                    "outputs": [
                      {
                        "internalType": "bytes4",
                        "name": "",
                        "type": "bytes4"
                      }
                    ],
                    "stateMutability": "pure",
                    "type": "function"
                  },
                  {
                    "inputs": [],
                    "name": "owner",
                    "outputs": [
                      {
                        "internalType": "address",
                        "name": "",
                        "type": "address"
                      }
                    ],
                    "stateMutability": "view",
                    "type": "function"
                  },
                  {
                    "inputs": [
                      {
                        "internalType": "uint256",
                        "name": "tokenId",
                        "type": "uint256"
                      }
                    ],
                    "name": "ownerOf",
                    "outputs": [
                      {
                        "internalType": "address",
                        "name": "",
                        "type": "address"
                      }
                    ],
                    "stateMutability": "view",
                    "type": "function"
                  },
                  {
                    "inputs": [],
                    "name": "pause",
                    "outputs": [],
                    "stateMutability": "nonpayable",
                    "type": "function"
                  },
                  {
                    "inputs": [],
                    "name": "paused",
                    "outputs": [
                      {
                        "internalType": "bool",
                        "name": "",
                        "type": "bool"
                      }
                    ],
                    "stateMutability": "view",
                    "type": "function"
                  },
                  {
                    "inputs": [],
                    "name": "proxiableUUID",
                    "outputs": [
                      {
                        "internalType": "bytes32",
                        "name": "",
                        "type": "bytes32"
                      }
                    ],
                    "stateMutability": "view",
                    "type": "function"
                  },
                  {
                    "inputs": [],
                    "name": "renounceOwnership",
                    "outputs": [],
                    "stateMutability": "nonpayable",
                    "type": "function"
                  },
                  {
                    "inputs": [
                      {
                        "internalType": "bytes32",
                        "name": "role",
                        "type": "bytes32"
                      },
                      {
                        "internalType": "address",
                        "name": "account",
                        "type": "address"
                      }
                    ],
                    "name": "renounceRole",
                    "outputs": [],
                    "stateMutability": "nonpayable",
                    "type": "function"
                  },
                  {
                    "inputs": [
                      {
                        "internalType": "bytes32",
                        "name": "role",
                        "type": "bytes32"
                      },
                      {
                        "internalType": "address",
                        "name": "account",
                        "type": "address"
                      }
                    ],
                    "name": "revokeRole",
                    "outputs": [],
                    "stateMutability": "nonpayable",
                    "type": "function"
                  },
                  {
                    "inputs": [
                      {
                        "internalType": "address",
                        "name": "",
                        "type": "address"
                      },
                      {
                        "internalType": "address",
                        "name": "",
                        "type": "address"
                      },
                      {
                        "internalType": "uint256",
                        "name": "",
                        "type": "uint256"
                      }
                    ],
                    "name": "safeTransferFrom",
                    "outputs": [],
                    "stateMutability": "pure",
                    "type": "function"
                  },
                  {
                    "inputs": [
                      {
                        "internalType": "address",
                        "name": "from",
                        "type": "address"
                      },
                      {
                        "internalType": "address",
                        "name": "to",
                        "type": "address"
                      },
                      {
                        "internalType": "uint256",
                        "name": "tokenId",
                        "type": "uint256"
                      },
                      {
                        "internalType": "bytes",
                        "name": "data",
                        "type": "bytes"
                      }
                    ],
                    "name": "safeTransferFrom",
                    "outputs": [],
                    "stateMutability": "nonpayable",
                    "type": "function"
                  },
                  {
                    "inputs": [
                      {
                        "internalType": "address",
                        "name": "",
                        "type": "address"
                      },
                      {
                        "internalType": "bool",
                        "name": "",
                        "type": "bool"
                      }
                    ],
                    "name": "setApprovalForAll",
                    "outputs": [],
                    "stateMutability": "pure",
                    "type": "function"
                  },
                  {
                    "inputs": [
                      {
                        "internalType": "address",
                        "name": "_looslyCoupledNFTCollectionAddress",
                        "type": "address"
                      }
                    ],
                    "name": "setLooslyCoupledNFTCollectionAddress",
                    "outputs": [],
                    "stateMutability": "nonpayable",
                    "type": "function"
                  },
                  {
                    "inputs": [
                      {
                        "internalType": "address",
                        "name": "proxyAddress",
                        "type": "address"
                      }
                    ],
                    "name": "setRegistryAddress",
                    "outputs": [],
                    "stateMutability": "nonpayable",
                    "type": "function"
                  },
                  {
                    "inputs": [
                      {
                        "internalType": "bytes4",
                        "name": "interfaceId",
                        "type": "bytes4"
                      }
                    ],
                    "name": "supportsInterface",
                    "outputs": [
                      {
                        "internalType": "bool",
                        "name": "",
                        "type": "bool"
                      }
                    ],
                    "stateMutability": "view",
                    "type": "function"
                  },
                  {
                    "inputs": [
                      {
                        "internalType": "uint256",
                        "name": "tokenId",
                        "type": "uint256"
                      }
                    ],
                    "name": "swapSalesNftToTwinNft",
                    "outputs": [],
                    "stateMutability": "nonpayable",
                    "type": "function"
                  },
                  {
                    "inputs": [],
                    "name": "symbol",
                    "outputs": [
                      {
                        "internalType": "string",
                        "name": "",
                        "type": "string"
                      }
                    ],
                    "stateMutability": "view",
                    "type": "function"
                  },
                  {
                    "inputs": [
                      {
                        "internalType": "uint256",
                        "name": "tokenId",
                        "type": "uint256"
                      }
                    ],
                    "name": "tokenURI",
                    "outputs": [
                      {
                        "internalType": "string",
                        "name": "",
                        "type": "string"
                      }
                    ],
                    "stateMutability": "view",
                    "type": "function"
                  },
                  {
                    "inputs": [
                      {
                        "internalType": "address",
                        "name": "",
                        "type": "address"
                      },
                      {
                        "internalType": "address",
                        "name": "",
                        "type": "address"
                      },
                      {
                        "internalType": "uint256",
                        "name": "",
                        "type": "uint256"
                      }
                    ],
                    "name": "transferFrom",
                    "outputs": [],
                    "stateMutability": "pure",
                    "type": "function"
                  },
                  {
                    "inputs": [
                      {
                        "internalType": "bytes32",
                        "name": "randomValueHash",
                        "type": "bytes32"
                      },
                      {
                        "internalType": "bytes32",
                        "name": "r",
                        "type": "bytes32"
                      },
                      {
                        "internalType": "bytes32",
                        "name": "s",
                        "type": "bytes32"
                      },
                      {
                        "internalType": "uint8",
                        "name": "v",
                        "type": "uint8"
                      },
                      {
                        "internalType": "bool",
                        "name": "enableRecovery",
                        "type": "bool"
                      }
                    ],
                    "name": "transferFrom",
                    "outputs": [],
                    "stateMutability": "nonpayable",
                    "type": "function"
                  },
                  {
                    "inputs": [
                      {
                        "internalType": "address",
                        "name": "newOwner",
                        "type": "address"
                      }
                    ],
                    "name": "transferOwnership",
                    "outputs": [],
                    "stateMutability": "nonpayable",
                    "type": "function"
                  },
                  {
                    "inputs": [
                      {
                        "internalType": "address",
                        "name": "signer",
                        "type": "address"
                      }
                    ],
                    "name": "transformAddress",
                    "outputs": [
                      {
                        "internalType": "uint256",
                        "name": "tokenId",
                        "type": "uint256"
                      }
                    ],
                    "stateMutability": "pure",
                    "type": "function"
                  },
                  {
                    "inputs": [
                      {
                        "internalType": "uint256",
                        "name": "tokenId",
                        "type": "uint256"
                      }
                    ],
                    "name": "transformToken",
                    "outputs": [
                      {
                        "internalType": "address",
                        "name": "res",
                        "type": "address"
                      }
                    ],
                    "stateMutability": "pure",
                    "type": "function"
                  },
                  {
                    "inputs": [],
                    "name": "unpause",
                    "outputs": [],
                    "stateMutability": "nonpayable",
                    "type": "function"
                  },
                  {
                    "inputs": [
                      {
                        "internalType": "address",
                        "name": "newImplementation",
                        "type": "address"
                      }
                    ],
                    "name": "upgradeTo",
                    "outputs": [],
                    "stateMutability": "nonpayable",
                    "type": "function"
                  },
                  {
                    "inputs": [
                      {
                        "internalType": "address",
                        "name": "newImplementation",
                        "type": "address"
                      },
                      {
                        "internalType": "bytes",
                        "name": "data",
                        "type": "bytes"
                      }
                    ],
                    "name": "upgradeToAndCall",
                    "outputs": [],
                    "stateMutability": "payable",
                    "type": "function"
                  },
                  {
                    "inputs": [
                      {
                        "internalType": "address",
                        "name": "_to",
                        "type": "address"
                      }
                    ],
                    "name": "withdrawFees",
                    "outputs": [],
                    "stateMutability": "nonpayable",
                    "type": "function"
                  },
                  {
                    "stateMutability": "payable",
                    "type": "receive"
                  }
                ]
            },
        }
    },
  ],
  31337: [
    {
      chainId: "31337",
      name: "localhost",
      contracts: {
        YourContract: {
          address: "0x5FbDB2315678afecb367f032d93F642f64180aa3",
          abi: [
            {
              inputs: [
                {
                  internalType: "address",
                  name: "_owner",
                  type: "address",
                },
              ],
              stateMutability: "nonpayable",
              type: "constructor",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "greetingSetter",
                  type: "address",
                },
                {
                  indexed: false,
                  internalType: "string",
                  name: "newGreeting",
                  type: "string",
                },
                {
                  indexed: false,
                  internalType: "bool",
                  name: "premium",
                  type: "bool",
                },
                {
                  indexed: false,
                  internalType: "uint256",
                  name: "value",
                  type: "uint256",
                },
              ],
              name: "GreetingChange",
              type: "event",
            },
            {
              inputs: [],
              name: "greeting",
              outputs: [
                {
                  internalType: "string",
                  name: "",
                  type: "string",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "owner",
              outputs: [
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "premium",
              outputs: [
                {
                  internalType: "bool",
                  name: "",
                  type: "bool",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "string",
                  name: "_newGreeting",
                  type: "string",
                },
              ],
              name: "setGreeting",
              outputs: [],
              stateMutability: "payable",
              type: "function",
            },
            {
              inputs: [],
              name: "totalCounter",
              outputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
              ],
              name: "userGreetingCounter",
              outputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "withdraw",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              stateMutability: "payable",
              type: "receive",
            },
          ],
        },
      },
    },
  ],
} as const;

export default contracts;
