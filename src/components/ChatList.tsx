import React, { useEffect } from "react";
import { useChatStore } from "../state/chatStore";

const ChatList: React.FC = () => {
  const { chats, setChats } = useChatStore();

  useEffect(() => {
    const fetchChats = async () => {
      try {
        console.log('Fetching chats...');
        const response = await fetch('http://localhost:3001/api');
        if (!response.ok) {
          throw new Error(`Network response was not ok: ${response.statusText}`);
        }
        const data = await response.json();
        console.log('Fetched data:', data);
        setChats(data);
      } catch (error) {
        console.error('Failed to fetch chats:', error);
      }
    };

    fetchChats();
  }, [setChats]);

  console.log('Chats from store:', chats);

  return (
    <ul>
      {chats.length > 0 ? (
        chats.map((chat) => (
          <li key={chat.id}>
            {chat.name} - {chat.lastMessage}
          </li>
        ))
      ) : (
        <li>No chats available</li>
      )}
    </ul>
  );
};

export default ChatList;
