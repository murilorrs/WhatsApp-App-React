import { create } from 'zustand';

interface Chat {
  id: number;
  name: string;
  lastMessage: string;
  timestamp?: string;
}

interface ChatState {
  chats: Chat[];
  filter: string;
  setChats: (chats: Chat[]) => void;
  setFilter: (filter: string) => void;
}

export const useChatStore = create<ChatState>((set) => ({
  chats: [],
  filter: '',
  setChats: (chats) => {
    console.log('Setting chats in store:', chats);
    set({ chats });
  },
  setFilter: (filter) => set({ filter }),
}));
