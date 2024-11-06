# Project Name

This project is a blockchain application that uses Ganache, Hardhat, and MetaMask for development and testing. Below are the setup and run instructions to help you get started.

<p align="center">
  <img src="[screenshots/ganache-setup.png](https://github.com/user-attachments/assets/4d0dbc29-8ae6-46f5-bb3e-3a6af7fa2d8c)" alt="Ganache Setup" width="45%" style="margin-right: 5px;">
  <img src="[screenshots/metamask-import.png](https://github.com/user-attachments/assets/4e8c766d-5878-46f2-a7ae-b4a5211be2af)" alt="MetaMask Configuration" width="45%">
</p>

![Screenshot 2024-11-06 120948](https://github.com/user-attachments/assets/4d0dbc29-8ae6-46f5-bb3e-3a6af7fa2d8c)  ![Screenshot 2024-11-06 120926](https://github.com/user-attachments/assets/4e8c766d-5878-46f2-a7ae-b4a5211be2af)

## Prerequisites

- [Node.js](https://nodejs.org/) installed
- [npm](https://www.npmjs.com/) (usually comes with Node.js)
- [Ganache](https://trufflesuite.com/ganache/) (GUI or CLI)
- [MetaMask](https://metamask.io/) extension installed in your browser

## Setup Instructions

### 1. Start Ganache

Open Ganache and Metamask configure it with the following settings:

- **Network Name**: Ganache
- **RPC URL**: `http://127.0.0.1:7545`
- **Chain ID**: `1337`
- **Currency Symbol**: `ETH`

> **Note**: When you start Ganache, it will generate a list of accounts with private keys. You'll use these to import accounts into MetaMask.

### 2. Import an Account into MetaMask

1. Open MetaMask and switch to **Ganache** (or any existing network).
2. Click on your account icon > **Import Account**.
3. Copy one of the private keys from Ganache and paste it in MetaMask.
4. Set up the **Custom RPC** for Ganache in MetaMask with the following details:
   - **Network Name**: Ganache
   - **New RPC URL**: `http://127.0.0.1:7545` or 8545 for hardat
   - **Chain ID**: `1337`
   - **Currency Symbol**: `ETH`

Now, you should see the imported Ganache account with the balance displayed in MetaMask.

### 3. Install Project Dependencies

In the project directory, run:

```bash
npm install
```

### 4. Start the Hardhat Node (optional)

```bash
npm run chain
```

### 5. Deploy the Smart Contracts

```bash
npm run deploy
```

### 6. Start the Frontend

```bash
npm run dev
```
