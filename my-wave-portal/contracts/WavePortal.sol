// SPDX-License-Identifier: UNLICENSED

pragma solidity ^0.8.0; // Compile with versions 0.8.0 above

import "hardhat/console.sol";

contract WavePortal{
    uint totalWaves;

    constructor(){
        console.log("I just made my first contract!");
    }

    function wave() public{
        totalWaves += 1;
        console.log("%s just waved at you!", msg.sender);
    }

    function getTotalWaves() view public returns (uint){
        console.log("We have %d total waves", totalWaves);
        return totalWaves; 
    }
}