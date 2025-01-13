import React, { useState, useRef } from "react";
import { MessageCircle, Plus, Smile, Mic, File, X } from "lucide-react";

const emojiList = [
  "😀", "😁", "😂", "🤣", "😃", "😄", "😅", "😆", "😉", "😊", "😋", "😎", "😍", "😘", "😗", "😙", "😚", "😜", "😝", "😛",
  "🤑", "🤗", "🤩", "😏", "😒", "😞", "😔", "😟", "😢", "😭", "😤", "😠", "😡", "🤬", "🤯", "😳", "🥺", "😱", "😨", "😰", "😥",
  "😓", "🤤", "😪", "🤧", "😷", "🤒", "🤕", "🤑", "😶", "🤐", "😶‍🌫️", "🙄", "😬", "🤭", "🤫", "🤔", "😌", "🤤"
];

type Message = {
  from: string;
  text: string;
  time: string;
  audioUrl?: string;
};

const ChatSection: React.FC = () => {
  const [messageInput, setMessageInput] = useState("");
  const [messages, setMessages] = useState<Message[]>([
    { from: "Sarah", text: "Hey, how's the project going?", time: "12 : 09 AM" },
    { from: "You", text: "It's going well! Working on the final stages.", time: "12 : 47 AM" },
  ]);
  const [showOptions, setShowOptions] = useState(false);
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);
  const [isRecording, setIsRecording] = useState(false);
  const [audioMessage, setAudioMessage] = useState<Blob | null>(null);
  const [audioUrl, setAudioUrl] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const mediaRecorderRef = useRef<MediaRecorder | null>(null);
  const audioChunksRef = useRef<Blob[]>([]);

  const handleSendMessage = () => {
    if (messageInput.trim()) {
      const now = new Date();
      const hours = now.getHours();
      const minutes = now.getMinutes();
      const time = `${hours % 12 || 12}:${minutes < 10 ? '0' + minutes : minutes} ${hours >= 12 ? 'PM' : 'AM'}`;

      const newMessage = { from: "You", text: messageInput, time };
      const botResponse = { from: "Bot", text: "Under development", time };

      setMessages([...messages, newMessage, botResponse]);
      setMessageInput("");
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && messageInput.trim()) {
      handleSendMessage();
    }
  };

  const handleToggleOptions = () => {
    setShowOptions((prev) => !prev);
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const newMessage = { from: "You", text: `File: ${file.name}`, time: new Date().toLocaleTimeString() };
      setMessages([...messages, newMessage]);
    }
  };

  const handleEmojiClick = (emoji: string) => {
    setMessageInput((prevInput) => prevInput + emoji);
    setShowEmojiPicker(false);
  };

  const handleEmojiToggle = () => {
    setShowEmojiPicker((prev) => !prev);
  };

  const closeEmojiPicker = () => {
    setShowEmojiPicker(false);
  };

  const startRecording = async () => {
    if (navigator.mediaDevices) {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      mediaRecorderRef.current = new MediaRecorder(stream);
      mediaRecorderRef.current.ondataavailable = (e) => {
        audioChunksRef.current.push(e.data);
      };
      mediaRecorderRef.current.onstop = () => {
        const audioBlob = new Blob(audioChunksRef.current, { type: "audio/wav" });
        setAudioMessage(audioBlob);
        const audioUrl = URL.createObjectURL(audioBlob);
        setAudioUrl(audioUrl);
        const newMessage = { from: "You", text: "Audio Message", audioUrl, time: new Date().toLocaleTimeString() };
        setMessages([...messages, newMessage]);

        audioChunksRef.current = [];
      };
      mediaRecorderRef.current.start();
      setIsRecording(true);
    }
  };

  const stopRecording = () => {
    if (mediaRecorderRef.current) {
      mediaRecorderRef.current.stop();
      setIsRecording(false);
    }
  };

  return (
    <div className="relative flex flex-col w-full bg-[#242424] p-6 mt-10 border border-[#495360] rounded-xl mb-10 shadow-xl">
      <div className="text-2xl font-semibold text-white mb-4">Chat</div>
      <div className="flex flex-col space-y-4 max-h-[400px] overflow-auto custom-scrollbar pb-8">
        {messages.map((message, index) => (
          <div key={index} className={`flex ${message.from === "You" ? "justify-end" : "justify-start"}`}>
            <div
              className={`max-w-xs px-4 py-3 rounded-lg shadow-md ${message.from === "You" ? "bg-[#76b900] text-white" : "bg-gray-700 text-white"}`}
            >
              {message.text && <p className="text-lg">{message.text}</p>}
              {message.audioUrl && (
                <div>
                  <audio controls className="w-64 mt-2">
                    <source src={message.audioUrl} type="audio/wav"/>
                    Your browser does not support the audio element.
                  </audio>
                </div>
              )}
              <span className="text-xs text-[#717171]">{message.time}</span>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-4 flex items-center">
        {showOptions && (
          <div className="absolute bottom-20 left-20 bg-[#4b5563] text-white p-2 rounded-lg shadow-md space-y-2">
            <div className="cursor-pointer flex gap-2 items-center" onClick={() => fileInputRef.current?.click()}>
              <File size={20} /> Upload File
            </div>
            <div className="cursor-pointer flex gap-2 items-center" onClick={handleEmojiToggle}>
              <Smile size={20} /> Emojis
            </div>
            <div
              onClick={isRecording ? stopRecording : startRecording}
              className="cursor-pointer flex gap-2 items-center"
            >
              <Mic size={20} /> {isRecording ? "Stop Recording" : "Record Audio"}
            </div>
          </div>
        )}
        {showEmojiPicker && (
          <div className="absolute bottom-16 left-20 bg-gray-800 text-white p-2 rounded-lg shadow-md">
            <div className="flex justify-between items-center mb-2">
              <div className="text-lg">Emojis</div>
              <button onClick={closeEmojiPicker} className="text-white">
                <X size={20} />
              </button>
            </div>
            <div className="grid grid-cols-8 space-x-2">
              {emojiList.map((emoji, index) => (
                <span
                  key={index}
                  className="cursor-pointer text-2xl"
                  onClick={() => handleEmojiClick(emoji)}
                >
                  {emoji}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>
      <div className="mt-3 flex items-center">
        <button
          onClick={handleToggleOptions}
          className="text-white bg-[#4b5563] p-3 rounded-lg focus:outline-none hover:bg-[#3c4e5b] mr-3"
        >
          {showOptions ? <X size={20} /> : <Plus size={20} />}
        </button>
        <input
          type="text"
          value={messageInput}
          onChange={(e) => setMessageInput(e.target.value)}
          onKeyDown={handleKeyPress}
          className="w-full py-2 px-4 rounded-lg text-black placeholder:text-[#a3a3a3]"
          placeholder="Type your message..."
        />
        <button
          onClick={handleSendMessage}
          disabled={!messageInput.trim()}
          className={`ml-2 p-3 rounded-lg ${!messageInput.trim() ? 'bg-gray-500 cursor-not-allowed' : 'bg-[#4b5563] hover:bg-[#3c4e5b]'} focus:outline-none`}
        >
          <MessageCircle size={20} />
        </button>
      </div>
      <input
        ref={fileInputRef}
        type="file"
        className="hidden"
        accept="image/*, .pdf, .doc, .docx, .ppt, .pptx, .xls, .xlsx"
        onChange={handleFileUpload}
      />
    </div>
  );
};

export default ChatSection;
