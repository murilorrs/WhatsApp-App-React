import type { NextApiRequest, NextApiResponse } from 'next';

async function data(req: NextApiRequest, res: NextApiResponse) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,POST,OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  try{
    const response = await fetch('https://randomuser.me/api/?results=15')
    const { results } = await response.json()

    const chatData = [
      { id: 1, name: 'John Doe', lastMessage: 'Hello!', lastMessageTime: '2024-08-07T10:30:00Z', profilePicture: results[0].picture.large},
      { id: 2, name: 'Jane Smith', lastMessage: 'How are you?', lastMessageTime: '2024-08-07T11:00:00Z', profilePicture: results[1].picture.large },
      { id: 3, name: 'Emily Johnson', lastMessage: 'Are we still on for tonight?', lastMessageTime: '2024-08-06T14:15:00Z', profilePicture: results[2].picture.large },
      { id: 4, name: 'Michael Brown', lastMessage: 'Got the files, thanks!', lastMessageTime: '2024-08-06T15:20:00Z', profilePicture: results[3].picture.large },
      { id: 5, name: 'Sarah Davis', lastMessage: 'Can you call me later?', lastMessageTime: '2024-08-05T09:45:00Z', profilePicture: results[4].picture.large },
      { id: 6, name: 'David Wilson', lastMessage: 'I’m running late, sorry!', lastMessageTime: '2024-08-05T12:30:00Z', profilePicture: results[5].picture.large },
      { id: 7, name: 'Laura Martinez', lastMessage: 'Meeting rescheduled to 3 PM', lastMessageTime: '2024-08-04T08:00:00Z', profilePicture: results[6].picture.large },
      { id: 8, name: 'James Garcia', lastMessage: 'Can you send me the report?', lastMessageTime: '2024-08-03T16:50:00Z', profilePicture: results[7].picture.large },
      { id: 9, name: 'Sophia Rodriguez', lastMessage: 'I received your message.', lastMessageTime: '2024-08-03T18:25:00Z', profilePicture: results[8].picture.large },
      { id: 10, name: 'Daniel Lee', lastMessage: 'Thank you for the update.', lastMessageTime: '2024-08-02T11:10:00Z', profilePicture: results[9].picture.large },
      { id: 11, name: 'Olivia Walker', lastMessage: 'Lets discuss this tomorrow.', lastMessageTime: '2024-08-02T14:00:00Z', profilePicture: results[10].picture.large },
      { id: 12, name: 'Ethan Hall', lastMessage: 'See you at the event!', lastMessageTime: '2024-08-01T09:30:00Z', profilePicture: results[11].picture.large },
      { id: 13, name: 'Ava Allen', lastMessage: 'I have a question about the project.', lastMessageTime: '2024-08-01T13:45:00Z', profilePicture: results[12].picture.large },
      { id: 14, name: 'William Young', lastMessage: 'Confirming our appointment.', lastMessageTime: '2024-07-31T10:20:00Z', profilePicture: results[13].picture.large },
      { id: 15, name: 'Isabella Hernandez', lastMessage: 'Can you send the link again?', lastMessageTime: '2024-07-30T17:55:00Z', profilePicture: results[14].picture.large },
    ];
    res.json(chatData);
  } catch(error) {
    console.log(error)
  }
}

export default data;
