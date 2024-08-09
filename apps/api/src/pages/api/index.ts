import { NextApiRequest, NextApiResponse } from 'next';

async function data(req: NextApiRequest, res: NextApiResponse) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,POST,OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  try {
    const userResponse = await fetch('https://randomuser.me/api/?results=10');
    const { results } = await userResponse.json();

    const groupPictures = [
      'https://picsum.photos/200/200?random=1',
      'https://picsum.photos/200/200?random=2',
      'https://picsum.photos/200/200?random=3',
      'https://picsum.photos/200/200?random=4',
      'https://picsum.photos/200/200?random=5',
    ];

    const chatData = [
      { id: 1, name: 'João Silva', lastMessage: 'Olá!', lastMessageTime: '10:30', profilePicture: results[0].picture.large, group: false, unread: true },
      { id: 2, name: 'Grupo de Estudos', lastMessage: 'A reunião será às 18h.', lastMessageTime: '09:30', profilePicture: groupPictures[0], group: true, unread: false },
      { id: 3, name: 'Ana Souza', lastMessage: 'Ainda estamos confirmados para hoje à noite?', lastMessageTime: '14:15', profilePicture: results[1].picture.large, group: false, unread: false },
      { id: 4, name: 'Família Oliveira', lastMessage: 'O almoço está pronto!', lastMessageTime: '12:00', profilePicture: groupPictures[1], group: true, unread: true },
      { id: 5, name: 'Carlos Pereira', lastMessage: 'Recebi os arquivos, obrigado!', lastMessageTime: '15:20', profilePicture: results[2].picture.large, group: false, unread: true },
      { id: 6, name: 'Amigos do Futebol', lastMessage: 'Jogo marcado para domingo.', lastMessageTime: '13:45', profilePicture: groupPictures[2], group: true, unread: false },
      { id: 7, name: 'Beatriz Santos', lastMessage: 'Pode me ligar mais tarde?', lastMessageTime: '09:45', profilePicture: results[3].picture.large, group: false, unread: false },
      { id: 8, name: 'Trabalho - Projeto X', lastMessage: 'Apresentação finalizada.', lastMessageTime: '16:00', profilePicture: groupPictures[3], group: true, unread: true },
      { id: 9, name: 'Pedro Almeida', lastMessage: 'Estou atrasado, desculpe!', lastMessageTime: '12:30', profilePicture: results[4].picture.large, group: false, unread: false },
      { id: 10, name: 'Clube do Livro', lastMessage: 'Próximo encontro em breve.', lastMessageTime: '17:30', profilePicture: groupPictures[4], group: true, unread: true },
      { id: 11, name: 'Laura Costa', lastMessage: 'Reunião remarcada para às 15h', lastMessageTime: '08:00', profilePicture: results[5].picture.large, group: false, unread: false },
      { id: 12, name: 'Jorge Lima', lastMessage: 'Pode me enviar o relatório?', lastMessageTime: '16:50', profilePicture: results[6].picture.large, group: false, unread: true },
      { id: 13, name: 'Sofia Martins', lastMessage: 'Recebi sua mensagem.', lastMessageTime: '18:25', profilePicture: results[7].picture.large, group: false, unread: false },
      { id: 14, name: 'Daniela Rodrigues', lastMessage: 'Obrigado pela atualização.', lastMessageTime: '11:10', profilePicture: results[8].picture.large, group: false, unread: true },
      { id: 15, name: 'Olivia Silva', lastMessage: 'Vamos discutir isso amanhã.', lastMessageTime: '14:00', profilePicture: results[9].picture.large, group: false, unread: true },
    ];

    res.status(200).json(chatData);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to fetch data' });
  }
}

export default data;