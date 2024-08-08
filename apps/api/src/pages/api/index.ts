import { NextApiRequest, NextApiResponse } from 'next';

async function data(req: NextApiRequest, res: NextApiResponse) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,POST,OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  try {
    const response = await fetch('https://randomuser.me/api/?results=15');
    const { results } = await response.json();

    const chatData = [
      { id: 1, name: 'João Silva', lastMessage: 'Olá!', lastMessageTime: '10:30', profilePicture: results[0].picture.large },
      { id: 2, name: 'Maria Oliveira', lastMessage: 'Como você está?', lastMessageTime: '11:00', profilePicture: results[1].picture.large },
      { id: 3, name: 'Ana Souza', lastMessage: 'Ainda estamos confirmados para hoje à noite?', lastMessageTime: '14:15', profilePicture: results[2].picture.large },
      { id: 4, name: 'Carlos Pereira', lastMessage: 'Recebi os arquivos, obrigado!', lastMessageTime: '15:20', profilePicture: results[3].picture.large },
      { id: 5, name: 'Beatriz Santos', lastMessage: 'Pode me ligar mais tarde?', lastMessageTime: '09:45', profilePicture: results[4].picture.large },
      { id: 6, name: 'Pedro Almeida', lastMessage: 'Estou atrasado, desculpe!', lastMessageTime: '12:30', profilePicture: results[5].picture.large },
      { id: 7, name: 'Laura Costa', lastMessage: 'Reunião remarcada para às 15h', lastMessageTime: '08:00', profilePicture: results[6].picture.large },
      { id: 8, name: 'Jorge Lima', lastMessage: 'Pode me enviar o relatório?', lastMessageTime: '16:50', profilePicture: results[7].picture.large },
      { id: 9, name: 'Sofia Martins', lastMessage: 'Recebi sua mensagem.', lastMessageTime: '18:25', profilePicture: results[8].picture.large },
      { id: 10, name: 'Daniela Rodrigues', lastMessage: 'Obrigado pela atualização.', lastMessageTime: '11:10', profilePicture: results[9].picture.large },
      { id: 11, name: 'Olivia Silva', lastMessage: 'Vamos discutir isso amanhã.', lastMessageTime: '14:00', profilePicture: results[10].picture.large },
      { id: 12, name: 'Ethan Oliveira', lastMessage: 'Te vejo no evento!', lastMessageTime: '09:30', profilePicture: results[11].picture.large },
      { id: 13, name: 'Ava Almeida', lastMessage: 'Tenho uma pergunta sobre o projeto.', lastMessageTime: '13:45', profilePicture: results[12].picture.large },
      { id: 14, name: 'Guilherme Silva', lastMessage: 'Confirmando nossa reunião.', lastMessageTime: '10:20', profilePicture: results[13].picture.large },
      { id: 15, name: 'Isabela Santos', lastMessage: 'Pode enviar o link novamente?', lastMessageTime: '17:55', profilePicture: results[14].picture.large },
    ];

    res.status(200).json(chatData);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to fetch data' });
  }
}

export default data;
