//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.4;

import "@openzeppelin/contracts/token/ERC721/extensions/ERC721Enumerable.sol";
import "@openzeppelin/contracts/utils/Counters.sol";

contract RandNFT is ERC721Enumerable {
  using Counters for Counters.Counter;
  Counters.Counter private _tokenIdTracker;

  constructor() ERC721("RandNFT", "RAND") {}

  function mint(address to) external returns (bool) {
    _safeMint(to, _tokenIdTracker.current());
    _tokenIdTracker.increment();
    return true;
  }
}