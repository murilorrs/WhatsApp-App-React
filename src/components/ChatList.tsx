import React, { useEffect } from "react";
import { useChatStore } from "../state/chatStore";
import ChatListItem from "./ChatListItem";

const ChatList: React.FC = () => {
  const { chats, setChats } = useChatStore();

  useEffect(() => {
    const fetchChats = async () => {
      try {
        console.log('Fetching chats...');
        const response = await fetch('http://localhost:3001/api');
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
    <div>
      <ul>
        {chats.map((chat) => (
          <ChatListItem
            name={chat.name}
            lastMessage={chat.lastMessage}
            lastMessageTime={chat.lastMessageTime}
            profilePicture={chat.profilePicture}
          />
        ))}
      </ul>
    </div>
  );
};

export default ChatList;
