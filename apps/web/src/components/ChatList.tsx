import React, { useEffect, useState } from 'react';
import { useChatStore } from '@/state/chatStore';
import ChatListItem from './ChatListItem';

const ChatList: React.FC = () => {
  const { setChats, searchedChats } = useChatStore();  
  const [loading, setLoading] = useState<boolean>(true); 

  useEffect(() => {
    const fetchChats = async () => {
      try {
        console.log('Fetching chats...');
        const response = await fetch('https://react-whatsapp-app-api.vercel.app/api');
        const data = await response.json();
        setChats(data); 
      } catch (error) {
        console.error('Failed to fetch chats:', error); 
      } finally {
        setLoading(false); 
      }
    };

    fetchChats(); 
  }, [setChats]);

  return (
    <div className="w-full max-w-4xl mx-auto px-4 pb-4">
      <div className="mt-4 h-[calc(100vh-4rem)]">
        <ul>
          {loading
            ? Array.from({ length: 5 }).map((_, index) => (
                <ChatListItem
                  key={index}
                  name=""
                  lastMessage=""
                  lastMessageTime=""
                  profilePicture=""
                  isLoading={true} 
                  isUnread={false}
                />
              ))
            : searchedChats().map((chat) => (
                <ChatListItem
                  key={chat.id}
                  name={chat.name}
                  lastMessage={chat.lastMessage}
                  lastMessageTime={chat.lastMessageTime}
                  profilePicture={chat.profilePicture}
                  isLoading={false}
                  isUnread={chat.unread}
                />
              ))}
        </ul>
      </div>
    </div>
  );
};

export default ChatList;
