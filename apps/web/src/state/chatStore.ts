import { create } from 'zustand';

// Define a estrutura pra um chat individual
interface Chat {
  id: number;
  name: string;
  lastMessage: string;
  lastMessageTime: string;
  profilePicture: string;
  group: boolean;
  unread: boolean
}

// Define o estado global e as funções pra manipula-lo
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

// Cria um estado global com Zustand
export const useChatStore = create<ChatState>((set, get) => ({
  // Inicia com valores vazios que virão da API
  chats: [],
  search: '',
  filterGroup: false,
  filterUnread: false,
  // Espeficica as funções de manipulação do estado atual
  setChats: (chats) => set({ chats }),
  setSearch: (search) => set({ search }),
  setFilterGroup: (filter) => set({ filterGroup: filter }),
  setFilterUnread: (filter) => set({ filterUnread: filter }),
  // Função que retorna os chats filtrados de acordo com o texto de busca e filtros aplicados
  searchedChats: () => {
    const { chats, search, filterGroup, filterUnread } = get();
    
     // Filtra os chats com base no texto de busca, se são grupos e se têm mensagens não lidas
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
