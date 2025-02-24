import React, { useState } from 'react';
import { FiSearch, FiLock } from 'react-icons/fi';
import { MessageCircle } from 'lucide-react';

// Sample data for the chat interface
const initialChats = [
    {
      id: 1,
      name: "Aman Gupta",
      avatar: "https://imgs.search.brave.com/KJrIFQm3jNPZeS8QHM4OP_UJKUb5Qhu4Ivl-pkXYnLU/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzL2NmL2Fj/LzA3L2NmYWMwNzdj/ZjM2NmY5YTQxZjlh/NzU0MGNiZTYxNmYw/LmpwZw",
      online: true,
      time: "2h ago",
      lastMessage: "Hi, I'm interested in your AI business...",
      unread: true,
      messages: [
        { from: "Aman Gupta", text: "Hi, I'm interested in your AI business model and would like to discuss potential investment.", time: "2:05 PM" },
        { from: "You", text: "Thank you for reaching out! I'd be happy to discuss the details.", time: "2:10 PM" },
      ]
    },
    {
      id: 2,
      name: "Namita Thapad",
      avatar: "https://imgs.search.brave.com/XBHRv5igxggrFspXhaxngVQ4T2v2qjCuQvoe1NFyr2Y/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93aWtp/YmlvLmluL3dwLWNv/bnRlbnQvdXBsb2Fk/cy8yMDIyLzAxL05h/bWl0YS1UaGFwYXIt/cGljLmpwZw",
      online: false,
      time: "1d ago",
      lastMessage: "Great progress on the latest model...",
      unread: false,
      messages: [
        { from: "You", text: "We've made significant improvements to our model accuracy.", time: "Yesterday" },
        { from: "Namita Thapad", text: "Great progress on the latest model. Looking forward to our next meeting.", time: "Yesterday" },
      ]
    },
    {
      id: 3,
      name: "Sarah Jhonson",
      avatar: "https://imgs.search.brave.com/mPCNK10_5YxzPxls3orq080p0yRAn8SjWnuQif1C0mU/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/ZnJlZS1waG90by9z/dWNjZXNzZnVsLWJ1/c2luZXNzd29tYW4t/cmVhZHktY2hhbGxl/bmdlc18xMTYzLTQz/MzYuanBnP3NlbXQ9/YWlzX2h5YnJpZA",
      online: true,
      time: "3d ago",
      lastMessage: "Let's discuss the investment...",
      unread: true,
      messages: [
        { from: "Sarah Khan", text: "I've reviewed your proposal. Let's discuss the investment terms in more detail.", time: "3 days ago" },
        { from: "You", text: "Perfect, I'm available tomorrow afternoon.", time: "3 days ago" },
        { from: "Sarah Khan", text: "Sounds good. Does 2 PM work for you?", time: "3 days ago" },
      ]
    }
  ];
  
  const MessagesView = () => {
    const [selectedChat, setSelectedChat] = useState<number | null>(null);
    const [messageInput, setMessageInput] = useState('');
    const [chats, setChats] = useState(initialChats);
    
  const handleSendMessage = () => {
    if (!messageInput.trim() || !selectedChat) return;
    
    const currentTime = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    
    setChats(prevChats => 
      prevChats.map(chat => {
        if (chat.id === selectedChat) {
          return {
            ...chat,
            messages: [...chat.messages, { from: "You", text: messageInput, time: currentTime }],
            lastMessage: messageInput,
            time: "Just now",
            unread: false
          };
        }
        
        return chat;
      })
    );
    
    setMessageInput('');
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };

  return (
    <div className="min-h-screen bg-black text-white p-6">
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-white">Messages</h1>
        <p className="mt-2 text-gray-400">End-to-end encrypted communication with your team and investors</p>
      </div>
      <div className="flex h-[calc(100vh-180px)] flex-col rounded-xl border border-gray-600 bg-[#242424]">
        <div className="flex h-full overflow-hidden">
          <div className="w-80 flex-shrink-0 border-r border-gray-700">
            <div className="border-b border-gray-700 p-4">
              <div className="relative">
                <FiSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search messages"
                  className="w-full rounded-lg bg-[#1e1e1e] py-2 pl-10 pr-4 text-sm focus:outline-none focus:ring-1 focus:ring-[#76b900]"
                />
              </div>
            </div>
            <div className="overflow-y-auto h-full">
              {chats.map((chat) => (
                <div
                  key={chat.id}
                  onClick={() => setSelectedChat(chat.id)}
                  className={`flex cursor-pointer items-center gap-3 p-4 transition-colors duration-150 hover:bg-[#1e1e1e] ${
                    selectedChat === chat.id ? "bg-[#1e1e1e]" : ""
                  }`}
                >
                  <div className="relative">
                    <img
                      src={chat.avatar}
                      alt={chat.name}
                      className="h-12 w-12 rounded-full object-cover"
                    />
                    {chat.online && (
                      <div className="absolute bottom-0 right-0 h-3 w-3 rounded-full border-2 border-[#242424] bg-green-500"></div>
                    )}
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="mb-1 flex items-center justify-between">
                      <h3 className="truncate font-semibold text-white">{chat.name}</h3>
                      <span className="text-xs text-gray-400">{chat.time}</span>
                    </div>
                    <p className="truncate text-sm text-gray-400">{chat.lastMessage}</p>
                  </div>
                  {chat.unread && <div className="h-2 w-2 rounded-full bg-[#76b900]"></div>}
                </div>
              ))}
            </div>
          </div>
          <div className="flex-1 flex flex-col">
            {selectedChat ? (
              <>
                <div className="border-b border-gray-700 p-4">
                  <div className="flex items-center gap-3">
                    <img
                      src={chats.find(c => c.id === selectedChat)?.avatar || ""}
                      alt={chats.find(c => c.id === selectedChat)?.name || ""}
                      className="h-10 w-10 rounded-full object-cover"
                    />
                    <div>
                      <h3 className="font-semibold text-white">{chats.find(c => c.id === selectedChat)?.name}</h3>
                      <p className="text-xs text-gray-400">
                        {chats.find(c => c.id === selectedChat)?.online ? "Online" : "Offline"}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="flex-1 flex flex-col h-full overflow-hidden">
                  <div className="flex-1 overflow-y-auto p-4">
                    {chats.find(c => c.id === selectedChat)?.messages.map((message, idx) => (
                      <div 
                        key={idx} 
                        className={`mb-4 flex ${message.from === "You" ? "justify-end" : "justify-start"}`}
                      >
                        <div 
                          className={`max-w-[80%] rounded-lg p-3 ${
                            message.from === "You" 
                              ? "bg-[#242424] text-[#76b900]" 
                              : "bg-[#1e1e1e] text-white"
                          }`}
                        >
                          <p>{message.text}</p>
                          <p className="mt-1 text-right text-xs opacity-70">{message.time}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="border-t border-gray-700 p-4">
                    <div className="flex items-center rounded-lg bg-[#1e1e1e] p-2">
                      <input
                        type="text"
                        value={messageInput}
                        onChange={(e) => setMessageInput(e.target.value)}
                        onKeyPress={handleKeyPress}
                        placeholder="Type a message..."
                        className="flex-1 bg-transparent px-2 py-1 text-white focus:outline-none"
                      />
                      <div className="flex items-center space-x-2">
                        <FiLock 
                          size={16} 
                          className="text-[#76b900]" 
                          title="End-to-end encrypted"
                        />
                        <button 
                          onClick={handleSendMessage}
                          disabled={!messageInput.trim()}
                          className={`rounded-lg px-4 py-1 transition-colors duration-150 ${
                            messageInput.trim() 
                              ? "bg-[#242424] text-[#76b900] hover:bg-[#1a1a1a]" 
                              : "bg-gray-700 text-gray-400"
                          }`}
                        >
                          Send
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            ) : (
              <div className="flex h-full flex-col items-center justify-center p-4 text-center">
                <MessageCircle size={48} className="mb-4 text-gray-500" />
                <h3 className="mb-2 text-xl font-medium text-white">Select a conversation</h3>
                <p className="text-gray-400">Choose a contact to start chatting</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MessagesView;