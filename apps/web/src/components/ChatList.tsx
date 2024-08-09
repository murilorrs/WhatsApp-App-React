import React, { useEffect, useState } from 'react';
import { useChatStore } from '@/state/chatStore';
import ChatListItem from './ChatListItem';

const ChatList: React.FC = () => {
  const { setChats, searchedChats } = useChatStore();  // Obtem as funções do store global pra atualizar o estado dos chats e dos chats filtrados
  const [loading, setLoading] = useState<boolean>(true); // Estado local pra controlar se os dados ja foram carregados pela api

  // Executa quando o componente é montado
  useEffect(() => {
    // Busca os dados da API, atualiza o chat global e define o estado de loading ao final
    const fetchChats = async () => {
      try {
        console.log('Fetching chats...');
        const response = await fetch('https://api-desafio-estagio.vercel.app/api');
        const data = await response.json();
        setChats(data); // Definição global dos chats
      } catch (error) {
        console.error('Failed to fetch chats:', error); // Loga um erro no console se a requisição falhar
      } finally {
        setLoading(false); // Muda o estado após o carregamento da api
      }
    };

    fetchChats(); // Chama a função pra buscar os chats
  }, [setChats]);// Efeito executado só quando a função setchats muda, geralmente só quando monta o componente pela api

  return (
    // Monta a lista de chats percorrendo o que veio da API
    <div className="w-full max-w-4xl mx-auto px-4 pb-4">
      <div className="mt-4 h-[calc(100vh-4rem)]">
        <ul>
          {/* Se o estado de loading ainda tiver true ele vai montar passar a lista sem informação e mandar true pro componente ChatListItem */}
          {loading
            ? Array.from({ length: 5 }).map((_, index) => (
                <ChatListItem
                  key={index}
                  name=""
                  lastMessage=""
                  lastMessageTime=""
                  profilePicture=""
                  // indicando que ainda não recebeu resposta da API
                  isLoading={true} 
                  isUnread={false}
                />
              ))
              // Caso seja falso o estado de loading, percorre o a resposta da API montando um componente <ChatListItem/> e passando as props
            : searchedChats().map((chat) => (
                <ChatListItem
                  key={chat.id}
                  name={chat.name}
                  lastMessage={chat.lastMessage}
                  lastMessageTime={chat.lastMessageTime}
                  profilePicture={chat.profilePicture}
                  isLoading={false}
                  isUnread={chat.unread}
                />
              ))}
        </ul>
      </div>
    </div>
  );
};

export default ChatList;
