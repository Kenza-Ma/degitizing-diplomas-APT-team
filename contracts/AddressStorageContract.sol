pragma solidity ^0.5.0;

import "hardhat/console.sol";
import "./Diploma.sol";

contract AddressStorageContract {
    mapping(address => address) public globalAddress;
    mapping(address => string) public AddressName;
    uint public numAddress;
    mapping(uint => Diploma.Diplome) public non_validated;
    mapping(uint => Diploma.Diplome) public validated;

    constructor() public {}

    function AddAddress(address addrs_own, address addrs_contrct, string memory name) public {
        globalAddress[addrs_own] = addrs_contrct;
        AddressName[addrs_own] = name;
        numAddress += 1;
    }

    function getAddress(address addrs_own) public view returns(address addrs_contrct)
    {
        return globalAddress[addrs_own];
    }

   function getName(address addrs_own) public view returns(string memory)
    {
        return AddressName[addrs_own];
    }

    function getlength() public view returns(uint length)
    {
        return numAddress;
    }
}