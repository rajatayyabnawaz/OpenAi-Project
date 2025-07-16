import React, { useContext, useState } from "react";
import { assets } from "./assets/assets";
import { Context } from "./Context";
import { FaTrashAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);
  const { allTopics, loadChat, deleteChat, startNewChat } = useContext(Context);

  return (
    <div className={`h-screen bg-white p-4 shadow-md transition-all duration-300 ${isOpen ? "w-64" : "w-20"} flex flex-col justify-between`}>
      {/* Menu */}
      <div className="flex justify-between items-center">
        <img
          src={assets.menu_icon}
          alt="menu"
          className="w-6 h-6 cursor-pointer"
          onClick={() => setIsOpen(!isOpen)}
        />
      </div>

      {/* New Chat */}
      <div className="mt-4">
        <Link to="/">
  <button
    onClick={startNewChat}
    className="flex items-center gap-2 hover:bg-gray-100 p-2 rounded w-full"
  >
    <img src={assets.plus_icon} alt="new" className="w-5 h-5" />
    {isOpen && <span>New Chat</span>}
  </button>
</Link>
      </div>

      {/* Chat Topics */}
      <div className="mt-4 flex-1 overflow-y-auto">
        {isOpen && allTopics.length > 0 && (
          <p className="text-gray-500 text-sm mb-2">Topics</p>
        )}
        {allTopics.map((topic) => (
          <div
            key={topic}
            className="group flex justify-between items-center hover:bg-gray-100 p-2 rounded cursor-pointer"
          >
            <div
              onClick={() => loadChat(topic)}
              className="text-sm text-gray-800 truncate w-full pr-2"
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
      <div className="space-y-4">
        <Link to="/help" className="flex items-center gap-2 hover:bg-gray-100 p-2 rounded">
          <img src={assets.message_icon} alt="help" className="w-5 h-5" />
          {isOpen && <span>Help</span>}
        </Link>
        <Link to="/history" className="flex items-center gap-2 hover:bg-gray-100 p-2 rounded">
          <img src={assets.history_icon} alt="history" className="w-5 h-5" />
          {isOpen && <span>History</span>}
        </Link>
        <Link to="/settings" className="flex items-center gap-2 hover:bg-gray-100 p-2 rounded">
          <img src={assets.setting_icon} alt="settings" className="w-5 h-5" />
          {isOpen && <span>Settings</span>}
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
