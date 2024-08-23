import React, { useEffect } from 'react';
import { useChatStore } from '@/state/chatStore'; 
import Filters from './Filters';

const ChatListFilter: React.FC = () => {
  const { filterGroup, filterUnread, setFilterGroup, setFilterUnread } = useChatStore(); 

  useEffect(() => {
    const { searchParams } = new URL(window.location.href);
    setFilterGroup(searchParams.get('group') === 'true'); 
    setFilterUnread(searchParams.get('unread') === 'true');
  }, [setFilterGroup, setFilterUnread]); 

  const toggleFilterGroup = () => {
    const newValue = !filterGroup; 
    const searchParams = new URLSearchParams(window.location.search); 
    searchParams.set('group', newValue.toString());
    window.history.replaceState(null, '', '?' + searchParams.toString());
    setFilterGroup(newValue)
  };

  const toggleFilterUnread = () => {
    const newValue = !filterUnread;
    const searchParams = new URLSearchParams(window.location.search);
    searchParams.set('unread', newValue.toString()); 
    window.history.replaceState(null, '', '?' + searchParams.toString()); 
    setFilterUnread(newValue); 
  };
  
  return (
    <Filters
      filterGroup={filterGroup}
      filterUnread={filterUnread}
      onToggleGroup={toggleFilterGroup}
      onToggleUnread={toggleFilterUnread}
      type={1}
    />
  );
};

export default ChatListFilter;
