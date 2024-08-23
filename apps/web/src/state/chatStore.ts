import { create } from 'zustand';

interface Chat {
  id: number;
  name: string;
  lastMessage: string;
  lastMessageTime: string;
  profilePicture: string;
  group: boolean;
  unread: boolean
}

interface ChatState {
  chats: Chat[];
  search: string;
  filterGroup: boolean;
  filterUnread: boolean;
  setChats: (chats: Chat[]) => void;
  setSearch: (filter: string) => void;
  searchedChats: () => Chat[];
  setFilterGroup: (filter: boolean) => void;
  setFilterUnread: (filter: boolean) => void;
}

export const useChatStore = create<ChatState>((set, get) => ({
  chats: [],
  search: '',
  filterGroup: false,
  filterUnread: false,
  setChats: (chats) => set({ chats }),
  setSearch: (search) => set({ search }),
  setFilterGroup: (filter) => set({ filterGroup: filter }),
  setFilterUnread: (filter) => set({ filterUnread: filter }),
  searchedChats: () => {
    const { chats, search, filterGroup, filterUnread } = get();
    
    return chats.filter((chat) => {
      const matchesSearch = 
        chat.name.toLowerCase().includes(search.toLowerCase()) ||
        chat.lastMessage.toLowerCase().includes(search.toLowerCase());
      
      const matchesGroupFilter = !filterGroup || chat.group;
      const matchesUnreadFilter = !filterUnread || chat.unread;

      return matchesSearch && matchesGroupFilter && matchesUnreadFilter;
    });
  },
}));
