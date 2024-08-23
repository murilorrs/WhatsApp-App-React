import React from "react";
import { Skeleton } from "@/components/ui/skeleton"; 
import UnreadMessage from "./UnreadMessage";

export interface ItemProps {
  name: string;
  lastMessage: string;
  lastMessageTime: string;
  profilePicture: string;
  isLoading?: boolean;
  isUnread?: boolean;
}

const ChatListItem: React.FC<ItemProps> = ({
  name,
  lastMessage,
  lastMessageTime,
  profilePicture,
  isLoading = false,
  isUnread = false,
}) => {
  if (isLoading) {
    return (
      <div className="flex p-2 border-b border-none hover:bg-customLighterGreen items-center pb-4">
        <Skeleton className="w-14 h-14 rounded-full object-cover mr-3 bg-customLighterGreen" />
        <div className="flex-1 pl-1.5">
          <Skeleton className="w-[120px] h-[20px] mb-2 rounded-full bg-customLighterGreen" />
          <Skeleton className="w-[180px] h-[15px] rounded-full bg-customLighterGreen" />
        </div>
        <Skeleton className="w-[40px] h-[15px] ml-3 rounded-full bg-customLighterGreen" />
      </div>
    );
  }

  return (
    <div className="flex p-2 border-b border-none hover:bg-customLightGreen items-center pb-4 relative flex-col md:flex-row">
      <img
        src={profilePicture}
        className="w-14 h-14 rounded-full object-cover mr-3 mb-2 md:mb-0"
        alt={`${name}'s profile`}
      />
      <div className="flex-1 pl-1.5">
        <div className="text-lg">{name}</div>
        <div className="text-gray-400 text-sm">{lastMessage}</div>
      </div>

      <div className={`text-gray-400 text-sm pb-5 ${isUnread ? 'text-green-500' : ''}`}>
        {lastMessageTime}
      </div>

      {isUnread && (
        <div className="absolute right-4 pt-4 top-1/2 transform -translate-y-1/2 hidden md:flex items-center">
          <UnreadMessage isUnread={isUnread} />
        </div>
      )}
    </div>
  );
};

export default ChatListItem;
