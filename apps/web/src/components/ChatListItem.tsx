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
    <div className="flex p-2 border-b border-none hover:bg-customLightGreen items-center pb-4">
      <img
        src={profilePicture}
        className="w-14 h-w-14 rounded-full object-cover mr-3 "
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
