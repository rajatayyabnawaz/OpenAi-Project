import React, { useContext, useState, useEffect } from "react";
import { assets } from "./assets/assets";
import { Context } from "./Context";
import { FaTrashAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

const Sidebar = ({ onToggle }) => {
  const [isOpen, setIsOpen] = useState(true);
  const { allTopics, loadChat, deleteChat, startNewChat } = useContext(Context);

  // Notify parent (App.jsx) when sidebar opens or closes
  useEffect(() => {
    if (onToggle) {
      onToggle(isOpen);
    }
  }, [isOpen, onToggle]);

  return (
    <div
      className={`h-[93vh] ${
        isOpen ? "w-44" : "w-20"
      } bg-white text-black shadow-md transition-all duration-300 flex flex-col justify-between`}
    >
      {/* Top menu toggle */}
      <div className="flex justify-end p-2">
        <img
          src={assets.menu_icon}
          alt="menu"
          className="w-6 h-6 cursor-pointer"
          onClick={() => setIsOpen(!isOpen)}
        />
      </div>

      {/* New Chat */}
      <div className="mt-2 px-2">
        <Link to="/">
          <button
            onClick={startNewChat}
            className="flex items-center gap-2 hover:bg-gray-100 dark:hover:bg-gray-700 p-2 rounded w-full"
          >
            <img src={assets.plus_icon} alt="new" className="w-5 h-5" />
            {isOpen && <span className="text-sm">New Chat</span>}
          </button>
        </Link>
      </div>

      {/* Chat Topics */}
      <div className="mt-4 px-2 flex-1 overflow-y-auto">
        {isOpen && allTopics.length > 0 && (
          <p className="text-gray-500 text-sm mb-2">Topics</p>
        )}
        {allTopics.map((topic) => (
          <div
            key={topic}
            className="group flex justify-between items-center hover:bg-gray-100 dark:hover:bg-gray-700 p-2 rounded cursor-pointer"
          >
            <div
              onClick={() => loadChat(topic)}
              className="text-sm text-gray-800 dark:text-white truncate w-full pr-2"
            >
              {topic}
            </div>
            <FaTrashAlt
              onClick={() => deleteChat(topic)}
              className="text-gray-400 hover:text-red-500 cursor-pointer text-xs opacity-0 group-hover:opacity-100"
              title="Delete"
            />
          </div>
        ))}
      </div>

      {/* Bottom Links */}
      <div className="px-2 py-4 space-y-2">
        <Link
          to="/help"
          className="flex items-center gap-2 hover:bg-gray-100 dark:hover:bg-gray-700 p-2 rounded"
        >
          <img src={assets.message_icon} alt="help" className="w-5 h-5" />
          {isOpen && <span className="text-sm">Help</span>}
        </Link>
        <Link
          to="/history"
          className="flex items-center gap-2 hover:bg-gray-100 dark:hover:bg-gray-700 p-2 rounded"
        >
          <img src={assets.history_icon} alt="history" className="w-5 h-5" />
          {isOpen && <span className="text-sm">History</span>}
        </Link>
        <Link
          to="/settings"
          className="flex items-center gap-2 hover:bg-gray-100 dark:hover:bg-gray-700 p-2 rounded"
        >
          <img src={assets.setting_icon} alt="settings" className="w-5 h-5" />
          {isOpen && <span className="text-sm">Settings</span>}
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;

