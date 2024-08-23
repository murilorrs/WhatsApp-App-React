import React, { useEffect } from "react";
import { useChatStore } from "@/state/chatStore"; 
import { FaSearch } from "react-icons/fa"; 

const ChatListSearch: React.FC = () => {
  const { search, setSearch } = useChatStore(); 

  useEffect(() => {
    const query = new URL(window.location.href).searchParams.get('search') || '';
    setSearch(query); 
  }, [setSearch]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearch(value);
    const searchParams = new URLSearchParams(window.location.search);
    searchParams.set('search', value); 
    window.history.replaceState(null, '', '?' + searchParams.toString()); 
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
        className="w-full pl-10 pr-4 py-2 rounded-md bg-customLightGreen focus:"
        style={{outline:'none'}}
      />
    </div>
  );
};

export default ChatListSearch;
