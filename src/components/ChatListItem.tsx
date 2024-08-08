import React from "react";

interface ItemProps {
  name: string;
  lastMessage: string;
  lastMessageTime: string;
  profilePicture: string;
}

const ChatListItem: React.FC<ItemProps> = ({
  name,
  lastMessage,
  lastMessageTime,
  profilePicture,
}) => {
  return (
    <div className="flex p-2 border-b border-gray-700 hover:bg-gray-600 rounded items-center">
      <img
        src={profilePicture}
        alt={`${name}'s profile`}
        className="w-12 h-12 rounded-full object-cover mr-3"
      />
      <div className="flex-1">
        <div className="text-lg font-semibold">{name}</div>
        <div className="text-gray-400">{lastMessage}</div>
      </div>
      <div className="text-gray-400 text-sm">{lastMessageTime}</div>
    </div>
  );
};

export default ChatListItem;
