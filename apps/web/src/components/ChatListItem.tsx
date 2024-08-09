import React from "react";
import { Skeleton } from "@/components/ui/skeleton"; // Componente do ShadCn pra simular itens carregando
import UnreadMessage from "./UnreadMessage"; // Componente que exibe um indicador de mensagem não lida

// Interface que define as props que serão passadas pro componente ChatListItem
export interface ItemProps {
  name: string;
  lastMessage: string;
  lastMessageTime: string;
  profilePicture: string;
  isLoading?: boolean;
  isUnread?: boolean;
}

// Componente funcional que representa um item da lista de chats
const ChatListItem: React.FC<ItemProps> = ({
  // Definição das props que são passadas pelo ChatList
  name,
  lastMessage,
  lastMessageTime,
  profilePicture,
  isLoading = false,
  isUnread = false,
}) => {
  // Checa se o chat está carregado e se sim, imprime um esboço de chat como carregamento usando Skeleton
  if (isLoading) {
    return (
      <div className="flex p-2 border-b border-none hover:bg-customLighterGreen items-center pb-4">
        <Skeleton className="w-14 h-14 rounded-full object-cover mr-3 bg-customLighterGreen" />
        <div className="flex-1 pl-1.5">
          <Skeleton className="w-[120px] h-[20px] mb-2 rounded-full bg-customLighterGreen" />
          <Skeleton className="w-[180px] h-[15px] rounded-full bg-customLighterGreen" />
        </div>
        <Skeleton className="w-[40px] h-[15px] ml-3 rounded-full bg-customLighterGreen" />
      </div>
    );
  }

  // Caso contrário, monta um chat com as informações da API
  return (
    <div className="flex p-2 border-b border-none hover:bg-customLightGreen items-center pb-4 relative">
      {/* Design da foto de perfil */}
      <img
        src={profilePicture}
        className="w-14 h-14 rounded-full object-cover mr-3"
        alt={`${name}'s profile`}
      />
      {/* Design do nome e mensagem */}
      <div className="flex-1 pl-1.5">
        <div className="text-lg">{name}</div>
        <div className="text-gray-400 text-sm">{lastMessage}</div>
      </div>

      {/* Design da hora da ultima mensagem, checando também se é mensagem não lida pra mudar a cor */}
      <div className={`text-gray-400 text-sm pb-5 ${isUnread ? 'text-green-500' : ''}`}>
        {lastMessageTime}
      </div>

      {/* Design do icone de Unread usando o componente <UnreadMessage/> */}
      {isUnread && (
        <div className="absolute right-4 pt-4 top-1/2 transform -translate-y-1/2">
          <UnreadMessage isUnread={isUnread} />
        </div>
      )}
    </div>
  );
};

export default ChatListItem;
