import { useState, useEffect, useCallback } from 'react';
import { ethers } from 'ethers';
import { CHAT_CONTRACT_ABI, CHAT_CONTRACT_ADDRESS } from '../contracts/ChatContract';
import toast from 'react-hot-toast';

export interface Message {
  sender: string;
  message: string;
  timestamp: number;
}

export function useChat(provider: ethers.providers.Web3Provider | null, account: string) {
  const [messages, setMessages] = useState<Message[]>([]);
  const [loading, setLoading] = useState(true);

  const getContract = useCallback(() => {
    if (!provider) return null;
    return new ethers.Contract(
      CHAT_CONTRACT_ADDRESS,
      CHAT_CONTRACT_ABI,
      provider.getSigner()
    );
  }, [provider]);

  const loadMessages = useCallback(async () => {
    const contract = getContract();
    if (!contract) return;

    try {
      const msgs = await contract.getMessages();
      setMessages(msgs);
    } catch (error) {
      console.error('Error loading messages:', error);
      toast.error('Failed to load messages');
    } finally {
      setLoading(false);
    }
  }, [getContract]);

  const sendMessage = async (message: string) => {
    const contract = getContract();
    if (!contract || !account) return;

    try {
      const tx = await contract.sendMessage(message, {
        value: ethers.utils.parseEther('0.001')
      });
      toast.loading('Sending message...');
      await tx.wait();
      toast.success('Message sent!');
      await loadMessages();
    } catch (error) {
      console.error('Error sending message:', error);
      toast.error('Failed to send message');
    }
  };

  useEffect(() => {
    if (provider && account) {
      loadMessages();
    }
  }, [provider, account, loadMessages]);

  return { messages, loading, sendMessage };
}