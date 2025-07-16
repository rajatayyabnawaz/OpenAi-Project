import React, { useContext } from "react";
import { Context } from "./Context";
import { FaTrashAlt } from "react-icons/fa";

const History = () => {
  const { allTopics, loadChat, deleteChat } = useContext(Context);

  return (
    <div className="min-h-screen bg-gray-100 p-4 sm:p-8">
      <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-lg p-6">
        <h1 className="text-2xl font-bold text-gray-800 mb-6 text-center">Chat History</h1>

        {allTopics.length === 0 ? (
          <p className="text-center text-gray-500">No chat history found.</p>
        ) : (
          <ul className="space-y-4">
            {allTopics.map((topic, index) => (
              <li
                key={index}
                className="flex justify-between items-center bg-gray-50 hover:bg-gray-100 rounded-lg px-4 py-3 transition cursor-pointer"
              >
                <span
                  onClick={() => loadChat(topic)}
                  className="text-gray-800 font-medium truncate flex-1"
                >
                  {topic}
                </span>
                <FaTrashAlt
                  onClick={() => deleteChat(topic)}
                  className="text-red-500 hover:text-red-700 ml-4 cursor-pointer"
                  title="Delete"
                />
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default History;
