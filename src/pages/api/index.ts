import type { NextApiRequest, NextApiResponse } from 'next';

function data(req: NextApiRequest, res: NextApiResponse) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,POST,OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  const chatData = [
    { id: 1, name: 'John Doe', lastMessage: 'Hello!' },
    { id: 2, name: 'Jane Smith', lastMessage: 'How are you?' },
  ];

  res.json(chatData);
}

export default data;
