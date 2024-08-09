import React from "react";
import { useChatStore } from "@/state/chatStore";
import { FaSearch } from "react-icons/fa";

const ChatListSearch: React.FC = () => {
  const { search, setSearch } = useChatStore();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  return (
    <div className="w-full max-w-4xl mx-auto px-4 pb-4 relative">
      <div className="absolute inset-y-0 left-3.5 flex items-center pl-3 pb-3.5 pointer-events-none">
        <FaSearch className="text-gray-500" />
      </div>
      <input
        type="text"
        value={search}
        onChange={handleChange}
        placeholder="Search"
        className="w-full pl-10 pr-4 py-2 rounded-md bg-customLightGreen"
      />
    </div>
  );
};

export default ChatListSearch;
