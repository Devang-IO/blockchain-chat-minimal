import { useState, useEffect } from 'react';
import { ethers } from 'ethers';
import toast from 'react-hot-toast';

export function useWallet() {
  const [account, setAccount] = useState<string>('');
  const [provider, setProvider] = useState<ethers.providers.Web3Provider | null>(null);

  useEffect(() => {
    const init = async () => {
      if (window.ethereum) {
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        setProvider(provider);

        try {
          // Request to switch to Hardhat network
          await window.ethereum.request({
            method: 'wallet_addEthereumChain',
            params: [{
              chainId: '0x539',
              chainName: 'Hardhat Local',
              nativeCurrency: {
                name: 'Ethereum',
                symbol: 'ETH',
                decimals: 18
              },
              rpcUrls: ['http://127.0.0.1:8545']
            }]
          });

          const accounts = await provider.listAccounts();
          if (accounts.length > 0) {
            setAccount(accounts[0]);
          }
        } catch (error) {
          console.error('Failed to setup network:', error);
        }

        window.ethereum.on('accountsChanged', (accounts: string[]) => {
          setAccount(accounts[0] || '');
        });

        window.ethereum.on('chainChanged', () => {
          window.location.reload();
        });
      }
    };

    init();
  }, []);

  const connect = async () => {
    if (!window.ethereum) {
      toast.error('Please install MetaMask!');
      return;
    }

    try {
      // First ensure we're on the correct network
      await window.ethereum.request({
        method: 'wallet_switchEthereumChain',
        params: [{ chainId: '0x539' }], // ChainId 1337 in hex
      });

      const accounts = await window.ethereum.request({
        method: 'eth_requestAccounts',
      });
      
      setAccount(accounts[0]);
      toast.success('Wallet connected!');
    } catch (error: any) {
      console.error('Connection error:', error);
      toast.error(error.message || 'Failed to connect wallet');
    }
  };

  return { account, provider, connect };
}