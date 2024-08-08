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
  filter: string;
  setChats: (chats: Chat[]) => void;
  setFilter: (filter: string) => void;
  filteredChats: () => Chat[];
}

export const useChatStore = create<ChatState>((set, get) => ({
  chats: [],
  filter: '',
  setChats: (chats) => set({ chats }),
  setFilter: (filter) => set({ filter }),
  filteredChats: () => {
    const { chats, filter } = get();
    return chats.filter(
      (chat) =>
        chat.name.toLowerCase().includes(filter.toLowerCase()) ||
        chat.lastMessage.toLowerCase().includes(filter.toLowerCase())
    );
  },
}));
