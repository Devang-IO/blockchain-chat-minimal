// import React, { useState } from 'react';
// import { Send } from 'lucide-react';

// interface MessageInputProps {
//   onSend: (message: string) => Promise<void>;
//   disabled: boolean;
// }

// export function MessageInput({ onSend, disabled }: MessageInputProps) {
//   const [message, setMessage] = useState('');

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     if (!message.trim() || disabled) return;

//     await onSend(message);
//     setMessage('');
//   };

//   return (
//     <form onSubmit={handleSubmit} className="p-4 border-t">
//       <div className="flex gap-2">
//         <input
//           type="text"
//           value={message}
//           onChange={(e) => setMessage(e.target.value)}
//           placeholder="Type a message (0.001 ETH per message)"
//           className="flex-1 rounded-lg border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
//           disabled={disabled}
//         />
//         <button
//           type="submit"
//           disabled={disabled || !message.trim()}
//           className="bg-blue-500 text-white rounded-lg px-4 py-2 hover:bg-blue-600 disabled:opacity-50 disabled:cursor-not-allowed"
//         >
//           <Send className="w-5 h-5" />
//         </button>
//       </div>
//     </form>
//   );
// }

import React, { useState } from "react";
import { Send } from "lucide-react";
import { motion } from "framer-motion";

interface MessageInputProps {
  onSend: (message: string) => Promise<void>;
  disabled: boolean;
}

export function MessageInput({ onSend, disabled }: MessageInputProps) {
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!message.trim() || disabled) return;

    await onSend(message);
    setMessage("");
  };

  return (
    <motion.form
      onSubmit={handleSubmit}
      className="p-4 border-t border-gray-100"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
    >
      <div className="flex gap-2">
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Type a message (0.001 ETH per message)"
          className="flex-1 bg-gray-800 bg-opacity-50 text-white placeholder-gray-400 rounded-full border border-gray-700 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300"
          disabled={disabled}
        />
        <motion.button
          type="submit"
          disabled={disabled || !message.trim()}
          className="bg-blue-600 text-white rounded-full p-2 hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Send className="w-6 h-6" />
        </motion.button>
      </div>
      <motion.p
        className="text-xs text-gray-400 mt-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
      >
        0.001 ETH will be deducted per message sent
      </motion.p>
    </motion.form>
  );
}
