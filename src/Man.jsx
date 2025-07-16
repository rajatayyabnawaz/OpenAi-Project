import React, { useContext } from "react";
import { Context } from "./Context";
import { assets } from "./assets/assets";

const Man = () => {
  const { input, setInput, chat, loading, onSent } = useContext(Context);

  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      {/* Top Bar */}
      <div className="w-full flex justify-between items-center px-6 py-4 border-b bg-white shadow-md">
        <p className="text-2xl font-bold text-gray-800">Maryam Zulfiqar</p>
        <img
          src={assets?.user_icon}
          alt="User"
          className="w-10 h-10 rounded-full object-cover border border-gray-300"
        />
      </div>

      {/* Chat Body */}
      <div className="flex-1 flex flex-col gap-4 px-4 sm:px-8 py-6 overflow-y-auto">
        {chat.length === 0 && (
          <div className="flex flex-col items-center justify-center text-center mt-20 text-gray-600 space-y-2 px-4">
            <h1 className="text-3xl font-bold text-gray-800">Hello Maryam 👋</h1>
            <h2 className="text-xl font-semibold text-gray-700">
              I am your personal OpenAI assistant.
            </h2>
            <p className="text-base text-gray-500">How can I help you today?</p>
            <p className="text-sm text-gray-400">Type your question below to get started.</p>
          </div>
        )}

        {chat.map((item, index) => (
          <div key={index} className="space-y-2">
            <div className="flex justify-end">
              <div className="bg-blue-500 text-white p-3 rounded-lg max-w-[80%]">
                {item.question}
              </div>
            </div>
            <div className="flex justify-start">
              <div className="bg-gray-200 text-gray-800 p-3 rounded-lg max-w-[80%] whitespace-pre-wrap">
                {item.answer}
              </div>
            </div>
          </div>
        ))}

        {loading && (
          <div className="flex justify-start">
            <div className="bg-gray-200 text-gray-800 px-3 py-2 rounded-lg max-w-[80%] animate-pulse">
              Gemini is thinking...
            </div>
          </div>
        )}
      </div>

      {/* Input */}
      <div className="w-full px-4 sm:px-8 py-4 border-t bg-white">
        <div className="w-full flex items-center border rounded-full px-4 py-2 shadow-md bg-white">
          <input
            type="text"
            placeholder="Type your message..."
            className="flex-1 outline-none text-sm bg-transparent text-gray-800 placeholder-gray-400"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && onSent(input)}
            disabled={loading}
          />
          <div className="flex items-center gap-3 ml-3">
            <img src={assets.gallery_icon} alt="gallery" className="w-5 h-5 cursor-pointer" />
            <img src={assets.mic_icon} alt="mic" className="w-5 h-5 cursor-pointer" />
            <img
              src={assets.send_icon}
              alt="send"
              className={`w-6 h-6 cursor-pointer hover:scale-110 transition ${loading && "opacity-50 pointer-events-none"}`}
              onClick={() => onSent(input)}
            />
          </div>
        </div>
        <p className="text-xs text-gray-400 text-center mt-2">
          Gemini may display inaccurate info. Always verify the results.
        </p>
      </div>
    </div>
  );
};

export default Man;
