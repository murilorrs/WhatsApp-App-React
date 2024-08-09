// ChatListFilter.tsx
import React, { useEffect } from 'react';
import { useChatStore } from '@/state/chatStore';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Button } from '@/components/ui/button';
import { IoMdFunnel } from 'react-icons/io';

const ChatListFilter: React.FC = () => {
  const { filterGroup, filterUnread, setFilterGroup, setFilterUnread } = useChatStore();

  useEffect(() => {
    const { searchParams } = new URL(window.location.href);
    setFilterGroup(searchParams.get('group') === 'true');
    setFilterUnread(searchParams.get('unread') === 'true');
  }, [setFilterGroup, setFilterUnread]);

  const toggleFilter = (filter: 'group' | 'unread', currentValue: boolean) => {
    const searchParams = new URLSearchParams(window.location.search);
    searchParams.set(filter, (!currentValue).toString());
    window.history.replaceState(null, '', '?' + searchParams.toString());
    filter === 'group' ? setFilterGroup(!currentValue) : setFilterUnread(!currentValue);
  };

  return (
    <Popover>
      <PopoverTrigger>
        <button className="btn">
          <IoMdFunnel className="text-2xl text-white" />
        </button>
      </PopoverTrigger>
      <PopoverContent className="bg-customLighterGreen border-none p-4">
        <div className="space-y-2">
          <h2 className="text-white mb-2 font-bold">Filtros</h2>
          <Button
            className={`w-full bg-customLighterGreen text-white border-none hover:bg-customDarkGreen ${filterUnread ? 'font-bold' : ''}`}
            onClick={() => toggleFilter('unread', filterUnread)}
          >
            Conversas não lidas
          </Button>
          <Button
            className={`w-full bg-customLighterGreen text-white border-none hover:bg-customDarkGreen ${filterGroup ? 'font-bold' : ''}`}
            onClick={() => toggleFilter('group', filterGroup)}
          >
            Grupos
          </Button>
        </div>
      </PopoverContent>
    </Popover>
  );
};

export default ChatListFilter;
