import { create } from 'zustand';

interface Chat {
  id: number;
  name: string;
  lastMessage: string;
  lastMessageTime: string;
  profilePicture: string;
}

interface ChatState {
  chats: Chat[];
  search: string;
  setChats: (chats: Chat[]) => void;
  setSearch: (filter: string) => void;
  searchedChats: () => Chat[];
}

export const useChatStore = create<ChatState>((set, get) => ({
  chats: [],
  search: '',
  setChats: (chats) => set({ chats }),
  setSearch: (search) => set({ search }),
  searchedChats: () => {
    const { chats, search } = get();
    return chats.filter(
      (chat) =>
        chat.name.toLowerCase().includes(search.toLowerCase()) ||
        chat.lastMessage.toLowerCase().includes(search.toLowerCase())
    );
  },
}));
