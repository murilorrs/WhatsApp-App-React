import React from 'react';
import { FaCircle } from "react-icons/fa"; 

interface UnreadMessageProps {
  isUnread: boolean;
}
const UnreadMessage: React.FC<UnreadMessageProps> = ({ isUnread }) => {
  if (!isUnread) return null;

  return (
    <div>
      <FaCircle className="text-green-500 text-2x1" />
    </div>
  );
};

export default UnreadMessage;
