import React, { useEffect } from "react";
import { useChatStore } from "@/state/chatStore";
import ChatListItem from "./ChatListItem";
import ChatListSearch from "./ChatListSearch";

const ChatList: React.FC = () => {
  const { setChats, filteredChats } = useChatStore();

  useEffect(() => {
    const fetchChats = async () => {
      try {
        console.log('Fetching chats...');
        const response = await fetch('http://localhost:3000/api');
        const data = await response.json();
        console.log('Fetched data:', data);
        setChats(data);
      } catch (error) {
        console.error('Failed to fetch chats:', error);
      }
    };

    fetchChats();
  }, [setChats]);

  return (
    <div className="w-full max-w-4xl mx-auto px-4 pb-4">
      <ChatListSearch />
      <div className="mt-4 h-[calc(100vh-4rem)] overflow-y-auto">
        <ul>
          {filteredChats().map((chat) => (
            <ChatListItem
              key={chat.id}
              name={chat.name}
              lastMessage={chat.lastMessage}
              lastMessageTime={chat.lastMessageTime}
              profilePicture={chat.profilePicture}
            />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ChatList;
