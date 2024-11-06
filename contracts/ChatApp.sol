// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract ChatApp {
    struct Message {
        address sender;
        string message;
        uint256 timestamp;
    }
    
    Message[] private messages;
    
    event NewMessage(address indexed sender, string message, uint256 timestamp);
    
    function sendMessage(string memory _message) public payable {
        require(msg.value >= 0.001 ether, "Send at least 0.001 ETH to chat");
        messages.push(Message(msg.sender, _message, block.timestamp));
        emit NewMessage(msg.sender, _message, block.timestamp);
    }
    
    function getMessages() public view returns (Message[] memory) {
        return messages;
    }
}