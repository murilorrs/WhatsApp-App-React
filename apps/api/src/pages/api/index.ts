import { NextApiRequest, NextApiResponse } from 'next';

async function data(req: NextApiRequest, res: NextApiResponse) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,POST,OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  try {
    const response = await fetch('https://randomuser.me/api/?results=15');
    const { results } = await response.json();

    const chatData = [
      { id: 1, name: 'João Silva', lastMessage: 'Olá!', lastMessageTime: '2024-08-07T10:30:00Z', profilePicture: results[0].picture.large },
      { id: 2, name: 'Maria Oliveira', lastMessage: 'Como você está?', lastMessageTime: '2024-08-07T11:00:00Z', profilePicture: results[1].picture.large },
      { id: 3, name: 'Ana Souza', lastMessage: 'Ainda estamos confirmados para hoje à noite?', lastMessageTime: '2024-08-06T14:15:00Z', profilePicture: results[2].picture.large },
      { id: 4, name: 'Carlos Pereira', lastMessage: 'Recebi os arquivos, obrigado!', lastMessageTime: '2024-08-06T15:20:00Z', profilePicture: results[3].picture.large },
      { id: 5, name: 'Beatriz Santos', lastMessage: 'Pode me ligar mais tarde?', lastMessageTime: '2024-08-05T09:45:00Z', profilePicture: results[4].picture.large },
      { id: 6, name: 'Pedro Almeida', lastMessage: 'Estou atrasado, desculpe!', lastMessageTime: '2024-08-05T12:30:00Z', profilePicture: results[5].picture.large },
      { id: 7, name: 'Laura Costa', lastMessage: 'Reunião remarcada para às 15h', lastMessageTime: '2024-08-04T08:00:00Z', profilePicture: results[6].picture.large },
      { id: 8, name: 'Jorge Lima', lastMessage: 'Pode me enviar o relatório?', lastMessageTime: '2024-08-03T16:50:00Z', profilePicture: results[7].picture.large },
      { id: 9, name: 'Sofia Martins', lastMessage: 'Recebi sua mensagem.', lastMessageTime: '2024-08-03T18:25:00Z', profilePicture: results[8].picture.large },
      { id: 10, name: 'Daniela Rodrigues', lastMessage: 'Obrigado pela atualização.', lastMessageTime: '2024-08-02T11:10:00Z', profilePicture: results[9].picture.large },
      { id: 11, name: 'Olivia Silva', lastMessage: 'Vamos discutir isso amanhã.', lastMessageTime: '2024-08-02T14:00:00Z', profilePicture: results[10].picture.large },
      { id: 12, name: 'Ethan Oliveira', lastMessage: 'Te vejo no evento!', lastMessageTime: '2024-08-01T09:30:00Z', profilePicture: results[11].picture.large },
      { id: 13, name: 'Ava Almeida', lastMessage: 'Tenho uma pergunta sobre o projeto.', lastMessageTime: '2024-08-01T13:45:00Z', profilePicture: results[12].picture.large },
      { id: 14, name: 'Guilherme Silva', lastMessage: 'Confirmando nossa reunião.', lastMessageTime: '2024-07-31T10:20:00Z', profilePicture: results[13].picture.large },
      { id: 15, name: 'Isabela Santos', lastMessage: 'Pode enviar o link novamente?', lastMessageTime: '2024-07-30T17:55:00Z', profilePicture: results[14].picture.large },
    ];

    res.status(200).json(chatData);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to fetch data' });
  }
}

export default data;
