// import { Toaster } from "react-hot-toast";
// import { MessageList } from "./components/MessageList";
// import { MessageInput } from "./components/MessageInput";
// import { useWallet } from "./hooks/useWallet";
// import { useChat } from "./hooks/useChat";
// import { Wallet } from "lucide-react";

// function App() {
//   const { account, provider, connect } = useWallet();
//   const { messages, loading, sendMessage } = useChat(provider, account);

//   return (
//     <div className="min-h-screen bg-gray-100">
//       <Toaster position="top-right" />

//       <div className="max-w-3xl mx-auto p-4 h-screen flex flex-col">
//         <div className="bg-white rounded-lg shadow-md flex-1 flex flex-col overflow-hidden">
//           {/* Header */}
//           <div className="p-4 border-b flex items-center justify-between">
//             <h1 className="text-xl font-bold text-gray-800">Blockchain Chat</h1>
//             {account ? (
//               <div className="flex items-center gap-2 text-sm text-gray-600">
//                 <Wallet className="w-4 h-4" />
//                 <span className="font-mono">
//                   {account.slice(0, 6)}...{account.slice(-4)}
//                 </span>
//               </div>
//             ) : (
//               <button
//                 onClick={connect}
//                 className="bg-blue-500 text-white rounded-lg px-4 py-2 text-sm hover:bg-blue-600"
//               >
//                 Connect Wallet
//               </button>
//             )}
//           </div>

//           {!account ? (
//             <div className="flex-1 flex items-center justify-center">
//               <div className="text-center">
//                 <h2 className="text-xl font-semibold text-gray-800 mb-2">
//                   Welcome to Blockchain Chat
//                 </h2>
//                 <p className="text-gray-600 mb-4">
//                   Connect your wallet to start chatting
//                 </p>
//                 <button
//                   onClick={connect}
//                   className="bg-blue-500 text-white rounded-lg px-6 py-3 hover:bg-blue-600"
//                 >
//                   Connect Wallet
//                 </button>
//               </div>
//             </div>
//           ) : (
//             <>
//               <MessageList messages={messages} loading={loading} />
//               <MessageInput onSend={sendMessage} disabled={!account} />
//             </>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default App;

import { Toaster } from "react-hot-toast";
import { MessageList } from "./components/MessageList";
import { MessageInput } from "./components/MessageInput";
import { useWallet } from "./hooks/useWallet";
import { useChat } from "./hooks/useChat";
import { Wallet, Zap } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

function App() {
  const { account, provider, connect } = useWallet();
  const { messages, loading, sendMessage } = useChat(provider, account);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-gradient-to-br from-gray-900 to-blue-900 text-white"
    >
      <Toaster position="top-right" />

      <div className="max-w-3xl mx-auto p-4 h-screen flex flex-col">
        <motion.div
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, type: "spring", stiffness: 120 }}
          className="bg-gray-800 bg-opacity-50 backdrop-filter backdrop-blur-lg rounded-2xl shadow-lg flex-1 flex flex-col overflow-hidden border border-gray-700"
        >
          {/* Header */}
          <div className="p-6 border-b border-gray-700 flex items-center justify-between">
            <motion.h1
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-2xl font-bold text-blue-400 flex items-center"
            >
              <Zap className="w-6 h-6 mr-2 text-yellow-400" />
              Blockchain Chat
            </motion.h1>
            <AnimatePresence>
              {account ? (
                <motion.div
                  initial={{ x: 20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  exit={{ x: 20, opacity: 0 }}
                  transition={{ delay: 0.4 }}
                  className="flex items-center gap-2 text-sm text-gray-300 bg-gray-700 rounded-full px-4 py-2"
                >
                  <Wallet className="w-4 h-4 text-blue-400" />
                  <span className="font-mono">
                    {account.slice(0, 6)}...{account.slice(-4)}
                  </span>
                </motion.div>
              ) : (
                <motion.button
                  initial={{ x: 20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  exit={{ x: 20, opacity: 0 }}
                  transition={{ delay: 0.4 }}
                  onClick={connect}
                  className="bg-blue-600 text-white rounded-full px-6 py-2 text-sm hover:bg-blue-700 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Connect Wallet
                </motion.button>
              )}
            </AnimatePresence>
          </div>

          <AnimatePresence>
            {!account ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="flex-1 flex items-center justify-center"
              >
                <div className="text-center">
                  <motion.h2
                    initial={{ y: -20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    className="text-2xl font-semibold text-blue-400 mb-4"
                  >
                    Welcome to Blockchain Chat
                  </motion.h2>
                  <motion.p
                    initial={{ y: -20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.3 }}
                    className="text-gray-300 mb-6"
                  >
                    Connect your wallet to start chatting
                  </motion.p>
                  <motion.button
                    initial={{ y: -20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.4 }}
                    onClick={connect}
                    className="bg-blue-600 text-white rounded-full px-8 py-3 hover:bg-blue-700 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Connect Wallet
                  </motion.button>
                </div>
              </motion.div>
            ) : (
              <>
                <MessageList messages={messages} loading={loading} />
                <MessageInput onSend={sendMessage} disabled={!account} />
              </>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </motion.div>
  );
}

export default App;
