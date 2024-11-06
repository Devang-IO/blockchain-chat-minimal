// import React from 'react';
// import { Message } from '../hooks/useChat';

// interface MessageListProps {
//   messages: Message[];
//   loading: boolean;
// }

// export function MessageList({ messages, loading }: MessageListProps) {
//   if (loading) {
//     return (
//       <div className="flex items-center justify-center h-full">
//         <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500" />
//       </div>
//     );
//   }

//   return (
//     <div className="flex-1 overflow-y-auto p-4 space-y-4">
//       {messages.map((msg, index) => (
//         <div
//           key={index}
//           className="bg-white rounded-lg p-4 shadow-sm"
//         >
//           <div className="flex items-center gap-2">
//             <span className="text-xs text-gray-500">
//               {new Date(msg.timestamp * 1000).toLocaleString()}
//             </span>
//             <span className="text-xs font-mono text-gray-400">
//               {msg.sender.slice(0, 6)}...{msg.sender.slice(-4)}
//             </span>
//           </div>
//           <p className="mt-2 text-gray-800">{msg.message}</p>
//         </div>
//       ))}
//     </div>
//   );
// }

import { Message } from "../hooks/useChat";
import { motion, AnimatePresence } from "framer-motion";

interface MessageListProps {
  messages: Message[];
  loading: boolean;
}

export function MessageList({ messages, loading }: MessageListProps) {
  return (
    <motion.div
      className="flex-1 overflow-y-auto p-4 space-y-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.2 }}
    >
      {loading ? (
        <motion.div
          className="flex items-center justify-center h-full"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500" />
        </motion.div>
      ) : (
        <AnimatePresence>
          {messages.map((msg, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              <div className="bg-gray-800 bg-opacity-50 backdrop-filter backdrop-blur-sm rounded-lg p-4 shadow-lg border border-gray-700">
                <div className="flex items-center justify-between gap-2 mb-2">
                  <span className="text-xs text-blue-400">
                    {new Date(msg.timestamp * 1000).toLocaleString()}
                  </span>
                  <span className="text-xs font-mono text-gray-400 bg-gray-700 rounded-full px-2 py-1">
                    {msg.sender.slice(0, 6)}...{msg.sender.slice(-4)}
                  </span>
                </div>
                <p className="text-white">{msg.message}</p>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      )}
    </motion.div>
  );
}
