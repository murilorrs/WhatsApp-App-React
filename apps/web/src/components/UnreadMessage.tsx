import React from 'react';
import { FaCircle } from "react-icons/fa"; // Icone de circulo da lib React Icons

// Definição das propriedades que o ChatListItem vai passar
interface UnreadMessageProps {
  isUnread: boolean;
}
// Componente que vai colocar o icone de mensagem não lida no chat
const UnreadMessage: React.FC<UnreadMessageProps> = ({ isUnread }) => {
  if (!isUnread) return null;

  return (
    <div>
      <FaCircle className="text-green-500 text-2x1" />
    </div>
  );
};

export default UnreadMessage;
