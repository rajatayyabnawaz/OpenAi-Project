import React, { useContext } from 'react';
import { Context } from './Context';

const History = () => {
  const { allChats } = useContext(Context);

  return (
    <div className="p-6 bg-white min-h-screen">
      <h2 className="text-2xl font-bold mb-4 text-gray-800">Chat History</h2>

      {allChats.length === 0 ? (
        <p className="text-gray-600">No chat history available.</p>
      ) : (
        <ul className="space-y-3">
          {allChats.map((chat) => (
            <li
              key={chat.id}
              className="p-3 bg-gray-100 hover:bg-gray-200 rounded shadow-sm transition"
            >
              <p className="text-sm font-medium text-gray-700 truncate">{chat.name}</p>
              <p className="text-xs text-gray-500">{new Date(chat.date).toLocaleString()}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default History;
