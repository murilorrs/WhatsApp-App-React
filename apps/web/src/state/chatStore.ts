import { create } from 'zustand';

interface Chat {
  id: number;
  name: string;
  lastMessage: string;
  lastMessageTime: string;
  profilePicture:string
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
    set({ chats });
  },
  setFilter: (filter) => set({ filter }),
}));
