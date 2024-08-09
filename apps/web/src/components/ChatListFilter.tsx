import React, { useEffect } from 'react';
import { useChatStore } from '@/state/chatStore'; // Importa o estado global do chat usando o Zustand
import Filters from './Filters'; // Importa o componente que cria os filtros

// Componente para gerenciar os filtros da lista de chats
const ChatListFilter: React.FC = () => {
  const { filterGroup, filterUnread, setFilterGroup, setFilterUnread } = useChatStore(); // Obtém os valores e setters dos filtros do estado global

  // useEffect para carregar os filtros iniciais a partir da URL
  useEffect(() => {
    const { searchParams } = new URL(window.location.href);// Pega os parâmetros de busca da URL atual
    setFilterGroup(searchParams.get('group') === 'true'); // Define o filtro de grupos se o parâmetro 'group' for 'true'
    setFilterUnread(searchParams.get('unread') === 'true');// Define o filtro de mensagens não lidas se o parâmetro 'unread' for 'true'
  }, [setFilterGroup, setFilterUnread]); // Efeito depende dos setters de filtros

  // Função para alternar o filtro de grupos
  const toggleFilterGroup = () => {
    const newValue = !filterGroup; // Inverte o valor do filtro de grupos
    const searchParams = new URLSearchParams(window.location.search); // Cria um objeto para manipular os parâmetros da URL
    searchParams.set('group', newValue.toString()); // Define o novo valor do parâmetro 'group'
    window.history.replaceState(null, '', '?' + searchParams.toString());// Atualiza a URL sem recarregar a página
    setFilterGroup(newValue);// Atualiza o estado global com o novo valor do filtro de grupos
  };

  // Função para alternar o filtro de mensagens não lidas
  const toggleFilterUnread = () => {
    const newValue = !filterUnread; // Inverte o valor atual do filtro
    const searchParams = new URLSearchParams(window.location.search); // Cria um objeto para manipular os parâmetros da URL
    searchParams.set('unread', newValue.toString()); // Define o novo valor do parâmetro 'unread'
    window.history.replaceState(null, '', '?' + searchParams.toString()); // Atualiza a URL sem recarregar a página
    setFilterUnread(newValue); // Atualiza o estado global com o novo valor do filtro de mensagens não lidas
  };
  
  // Renderiza o componente Filters com os filtros e funções de toggle passadas como props
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
