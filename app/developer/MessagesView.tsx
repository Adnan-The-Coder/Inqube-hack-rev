import React, { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import { FiSearch, FiLock, FiArrowLeft, FiPaperclip, FiSend } from 'react-icons/fi';
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
    name: "Sarah Johnson",
    avatar: "https://imgs.search.brave.com/mPCNK10_5YxzPxls3orq080p0yRAn8SjWnuQif1C0mU/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/ZnJlZS1waG90by9z/dWNjZXNzZnVsLWJ1/c2luZXNzd29tYW4t/cmVhZHktY2hhbGxl/bmdlc18xMTYzLTQz/MzYuanBnP3NlbXQ9/YWlzX2h5YnJpZA",
    online: true,
    time: "3d ago",
    lastMessage: "Let's discuss the investment...",
    unread: true,
    messages: [
      { from: "Sarah Johnson", text: "I've reviewed your proposal. Let's discuss the investment terms in more detail.", time: "3 days ago" },
      { from: "You", text: "Perfect, I'm available tomorrow afternoon.", time: "3 days ago" },
      { from: "Sarah Johnson", text: "Sounds good. Does 2 PM work for you?", time: "3 days ago" },
    ]
  }
];

// Define TypeScript interfaces
interface Message {
  from: string;
  text: string;
  time: string;
}

interface Chat {
  id: number;
  name: string;
  avatar: string;
  online: boolean;
  time: string;
  lastMessage: string;
  unread: boolean;
  messages: Message[];
}

const MessagesView: React.FC = () => {
  const [selectedChat, setSelectedChat] = useState<number | null>(null);
  const [messageInput, setMessageInput] = useState('');
  const [chats, setChats] = useState<Chat[]>(initialChats);
  const [isMobileView, setIsMobileView] = useState(false);
  const [showSidebar, setShowSidebar] = useState(true);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const chatContainerRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  
  // Check if mobile view based on screen width and adjust layout
  useEffect(() => {
    const handleResize = () => {
      const isMobile = window.innerWidth < 768;
      setIsMobileView(isMobile);
      
      // Only change sidebar visibility on resize if in mobile mode
      if (isMobile) {
        setShowSidebar(!selectedChat);
      } else {
        setShowSidebar(true);
      }
    };
    
    handleResize(); // Initial check
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, [selectedChat]);
  
  // Auto-scroll to bottom of messages
  useEffect(() => {
    // Wait for render to complete
    setTimeout(() => {
      messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  }, [selectedChat, chats]);
  
  // Focus input when chat is selected
  useEffect(() => {
    if (selectedChat && !isMobileView) {
      inputRef.current?.focus();
    }
  }, [selectedChat, isMobileView]);
  
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
    
    // Simulate reply after 1-3 seconds for demo purposes
    const selectedChatData = chats.find(c => c.id === selectedChat);
    if (selectedChatData) {
      const delay = Math.floor(Math.random() * 2000) + 1000;
      setTimeout(() => {
        const responses = [
          "That sounds great, let me think about it.",
          "Interesting point. Can we discuss this further?",
          "I'll get back to you with more details soon.",
          "Perfect! Thanks for letting me know.",
          "Let's schedule a call to discuss this in depth."
        ];
        const randomResponse = responses[Math.floor(Math.random() * responses.length)];
        
        setChats(prevChats => 
          prevChats.map(chat => {
            if (chat.id === selectedChat) {
              return {
                ...chat,
                messages: [
                  ...chat.messages, 
                  { from: chat.name, text: randomResponse, time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) }
                ],
                lastMessage: randomResponse,
                time: "Just now"
              };
            }
            
return chat;
          })
        );
      }, delay);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const handleChatSelect = (chatId: number) => {
    // Mark as read when selected
    setChats(prevChats => 
      prevChats.map(chat => {
        if (chat.id === chatId) {
          return { ...chat, unread: false };
        }
        
return chat;
      })
    );
    
    setSelectedChat(chatId);
    
    if (isMobileView) {
      setShowSidebar(false);
    }
  };

  const handleBackToList = () => {
    if (isMobileView) {
      setShowSidebar(true);
    }
  };

  // Get active chat data
  const activeChat = chats.find(chat => chat.id === selectedChat);

  return (
    <div className="flex min-h-screen flex-col bg-black p-2 text-white md:p-6">
      <div className="mb-4 md:mb-6">
        <h1 className="text-2xl font-bold text-white md:text-4xl">Messages</h1>
        <p className="mt-1 text-sm text-gray-400 md:mt-2 md:text-base">End-to-end encrypted communication with your team and investors</p>
      </div>
      <div className="flex flex-1 flex-col overflow-hidden rounded-xl border border-gray-600 bg-[#191919]">
        <div className="flex h-full overflow-hidden">
          {/* Sidebar */}
          {showSidebar && (
            <div className="w-full shrink-0 border-gray-700 md:w-96 md:border-r lg:w-1/3">
              <div className="sticky top-0 z-10 border-b border-gray-700 bg-[#191919] p-3 md:p-4">
                <div className="relative">
                  <FiSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search messages"
                    className="w-full rounded-lg bg-[#101010] py-2.5 pl-10 pr-4 text-sm focus:outline-none focus:ring-1 focus:ring-[#76b900] md:py-3"
                  />
                </div>
              </div>
              <div className="h-[calc(100vh-200px)] overflow-y-auto md:h-[calc(100vh-240px)]">
                {chats.map((chat) => (
                  <div
                    key={chat.id}
                    onClick={() => handleChatSelect(chat.id)}
                    className={`flex cursor-pointer items-center gap-3 border-b border-gray-800 p-3 transition-colors duration-150 hover:bg-[#1a1a1a] md:p-4 ${
                      selectedChat === chat.id ? "bg-[#1a1a1a]" : ""
                    }`}
                  >
                    <div className="relative">
                      <Image
                        src={chat.avatar}
                        alt={chat.name}
                        width={56}
                        height={56}
                        className="rounded-full object-cover md:size-14"
                      />
                      {chat.online && (
                        <div className="absolute bottom-0 right-0 size-3 rounded-full border-2 border-[#191919] bg-green-500 md:size-3.5"></div>
                      )}
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="mb-1 flex items-center justify-between">
                        <h3 className="truncate text-sm font-semibold text-white md:text-base">{chat.name}</h3>
                        <div className="flex items-center">
                          <span className="text-xs text-gray-400">{chat.time}</span>
                        </div>
                      </div>
                      <div className="flex items-center justify-between">
                        <p className="truncate text-xs text-gray-400 md:text-sm">{chat.lastMessage}</p>
                        {chat.unread && <div className="ml-2 size-2.5 shrink-0 rounded-full bg-[#76b900]"></div>}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
          {(!isMobileView || !showSidebar) && (
            <div className="flex flex-1 flex-col">
              {selectedChat ? (
                <>
                  {/* Chat header */}
                  <div className="sticky top-0 z-10 flex items-center border-b border-gray-700 bg-[#191919] p-3 md:p-4">
                    <div className="flex w-full items-center gap-3">
                      {isMobileView && (
                        <button 
                          onClick={handleBackToList}
                          className="rounded-full p-1.5 hover:bg-[#1a1a1a]"
                        >
                          <FiArrowLeft className="text-gray-300" size={20} />
                        </button>
                      )}
                      <div className="relative">
                        <Image
                          src={activeChat?.avatar || ""}
                          alt={activeChat?.name || ""}
                          width={40}
                          height={40}
                          className="rounded-full object-cover md:size-12"
                        />
                        {activeChat?.online && (
                          <div className="absolute bottom-0 right-0 size-2.5 rounded-full border-2 border-[#191919] bg-green-500 md:size-3"></div>
                        )}
                      </div>
                      <div className="min-w-0 flex-1">
                        <h3 className="truncate text-base font-semibold text-white md:text-lg">{activeChat?.name}</h3>
                        <p className="text-xs text-gray-400">
                          {activeChat?.online ? "Online" : "Last seen " + activeChat?.time}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div 
                    ref={chatContainerRef}
                    className="flex flex-1 flex-col overflow-hidden bg-[#141414]"
                  >
                    <div className="flex-1 overflow-y-auto p-3 md:p-6">
                      {activeChat?.messages.map((message, idx) => (
                        <div 
                          key={idx} 
                          className={`mb-4 flex ${
                            message.from === "You" 
                              ? "justify-end" 
                              : "items-start gap-3"
                          }`}
                        >
                          {message.from !== "You" && (
                          <div className="shrink-0">
                            <Image 
                              src={activeChat.avatar} 
                              alt={activeChat.name} 
                              width={32}
                              height={32}
                              className="rounded-full md:size-10" 
                            />
                          </div>
                        )}
                          <div 
                          className={`max-w-[80%] rounded-2xl p-3 md:max-w-[70%] md:p-4 ${
                            message.from === "You" 
                              ? "bg-[#76b900] text-black" 
                              : "bg-[#222222] text-white"
                          }`}
                        >
                            <p className="text-sm md:text-base">{message.text}</p>
                            <p className={`mt-1 text-right text-xs ${
                            message.from === "You" 
                              ? "opacity-80" 
                              : "opacity-70"
                          }`}>
                              {message.time}
                            </p>
                          </div>
                        </div>
))}
                      <div ref={messagesEndRef} />
                    </div>
                    <div className="sticky bottom-0 border-t border-gray-700 bg-[#191919] p-3 md:p-4">
                      <div className="flex items-center rounded-full bg-[#141414] p-2 pr-3">
                        <button 
                          className="mx-2 rounded-full p-1.5 hover:bg-[#1a1a1a]"
                          title="Attach file"
                        >
                          <FiPaperclip size={20} className="text-gray-400" />
                        </button>
                        <input
                          ref={inputRef}
                          type="text"
                          value={messageInput}
                          onChange={(e) => setMessageInput(e.target.value)}
                          onKeyDown={handleKeyPress}
                          placeholder="Type a message..."
                          className="flex-1 bg-transparent px-2 py-1.5 text-sm text-white focus:outline-none md:text-base"
                        />
                        <div className="flex items-center space-x-3">
                          <FiLock 
                            size={16} 
                            className="text-[#76b900]" 
                            title="End-to-end encrypted"
                          />
                          <button 
                            onClick={handleSendMessage}
                            disabled={!messageInput.trim()}
                            className={`flex items-center justify-center rounded-full p-2 transition-colors duration-150 ${
                              messageInput.trim() 
                                ? "bg-[#76b900] text-black hover:bg-[#5c9100]" 
                                : "bg-gray-700 text-gray-400"
                            }`}
                          >
                            <FiSend size={18} />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              ) : (
                // Empty state when no chat is selected
                <div className="flex h-full flex-col items-center justify-center bg-[#141414] p-4 text-center">
                  <MessageCircle size={48} className="mb-4 text-gray-500" />
                  <h3 className="mb-2 text-xl font-medium text-white">Select a conversation</h3>
                  <p className="max-w-md text-sm text-gray-400 md:text-base">
                    Choose a contact from the list to start messaging
                  </p>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MessagesView;