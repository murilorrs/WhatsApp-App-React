// ChatListItem.tsx
import React from "react";

export interface ItemProps {
  name: string;
  lastMessage: string;
  lastMessageTime: string;
  profilePicture: string;
  isLoading?: boolean;
}

const ChatListItem: React.FC<ItemProps> = ({
  name,
  lastMessage,
  lastMessageTime,
  profilePicture,
  isLoading = false,
}) => {
  if (isLoading) {
    return (
      <div className="flex p-2 border-b border-none items-center pb-4">
        <div className="w-14 h-14 rounded-full bg-customGrey mr-3 animate-pulse"></div>
        <div className="flex-1 pl-1.5">
          <div className="text-lg bg-customGrey w-24 h-5 animate-pulse"></div>
          <div className="text-gray-300 text-sm bg-customGrey w-48 h-4 mt-1 animate-pulse"></div>
        </div>
        <div className="text-gray-300 text-sm bg-customGrey w-16 h-4 mt-1 animate-pulse"></div>
      </div>
    );
  }

  return (
    <div className="flex p-2 border-b border-none hover:bg-customLightGreen items-center pb-4">
      <img
        src={profilePicture}
        className="w-14 h-14 rounded-full object-cover mr-3"
        alt={`${name}'s profile`}
      />
      <div className="flex-1 pl-1.5">
        <div className="text-lg">{name}</div>
        <div className="text-gray-400 text-sm">{lastMessage}</div>
      </div>
      <div className="text-gray-400 text-sm">{lastMessageTime}</div>
    </div>
  );
};

export default ChatListItem;
