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
      <div className="flex p-2 border-b border-none hover:bg-customLightGreen items-center pb-4">
        {/* Skeleton for profile picture */}
        <Skeleton className="w-14 h-14 rounded-full object-cover mr-3 bg-custom" />

        <div className="flex-1 pl-1.5">
          {/* Skeleton for name */}
          <Skeleton className="w-[120px] h-[20px] mb-2 rounded-full bg-custom" />

          {/* Skeleton for last message */}
          <Skeleton className="w-[180px] h-[15px] rounded-full bg-custom" />
        </div>

        {/* Skeleton for last message time */}
        <Skeleton className="w-[40px] h-[15px] ml-3 rounded-full bg-custom" />
      </div>
    );
  }

  return (
    <div className="flex p-2 border-b border-none hover:bg-customLightGreen items-center pb-4 relative">
      <img
        src={profilePicture}
        className="w-14 h-14 rounded-full object-cover mr-3"
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
        <div className="absolute right-4 pt-4 top-1/2 transform -translate-y-1/2">
          <UnreadMessage isUnread={isUnread} />
        </div>
      )}
    </div>
  );
};

export default ChatListItem;
