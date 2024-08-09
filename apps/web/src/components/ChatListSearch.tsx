import React, { useEffect } from "react";
import { useChatStore } from "@/state/chatStore"; // Importa o estado global da store
import { FaSearch } from "react-icons/fa"; // Ícone de busca React Icons

// Componente funcional para o campo de busca da lista de chats por nome e ultima mensagem
const ChatListSearch: React.FC = () => {
  const { search, setSearch } = useChatStore(); // Pega o valor de busca e a função para atualizar a busca do estado global

  // useEffect para inicializar o campo de busca com o valor da URL, se existir
  useEffect(() => {
    const query = new URL(window.location.href).searchParams.get('search') || '';
    setSearch(query); // Atualiza o estado global com o valor extraído
  }, [setSearch]);

   // Função que lida com a mudança no campo de busca
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value; // Pega o valor atual do campo de texto
    setSearch(value); // Atualiza o estado global com o novo valor
    const searchParams = new URLSearchParams(window.location.search); // Cria um objeto para manipular os parâmetros da URL
    searchParams.set('search', value); // Atualiza o parâmetro 'search' na URL com o novo valor
    window.history.replaceState(null, '', '?' + searchParams.toString()); // Atualiza a URL sem recarregar a página
  };

  return (
    // Monta um componente de barra de busca com o icone do react icons
    <div className="w-full max-w-4xl mx-auto px-4 pb-4 relative">
      {/* Icon */}
      <div className="absolute inset-y-0 left-3.5 flex items-center pl-3 pb-3.5 pointer-events-none">
        <FaSearch className="text-gray-500" /> 
      </div>

      {/* Input que chama a função pra mudar lidar com o estado de pesquisa*/}
      <input
        type="text"
        value={search}
        onChange={handleChange}
        placeholder="Search"
        className="w-full pl-10 pr-4 py-2 rounded-md bg-customLightGreen focus:"
        style={{outline:'none'}}
      />
    </div>
  );
};

export default ChatListSearch;
