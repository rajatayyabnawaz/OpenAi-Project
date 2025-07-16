import React, { createContext, useState, useEffect } from "react";
import runChat from "./gemini";
import { v4 as uuidv4 } from "uuid";

export const Context = createContext();

const ContextProvider = ({ children }) => {
  const [input, setInput] = useState("");
  const [chat, setChat] = useState([]);
  const [loading, setLoading] = useState(false);
  const [allTopics, setAllTopics] = useState([]);
  const [activeTopic, setActiveTopic] = useState(null);

  useEffect(() => {
    const savedTopics = JSON.parse(localStorage.getItem("topics")) || [];
    setAllTopics(savedTopics);
  }, []);

  const saveTopics = (topics) => {
    setAllTopics(topics);
    localStorage.setItem("topics", JSON.stringify(topics));
  };

  const saveChatToTopic = (topic, chatArray) => {
    localStorage.setItem(`chat-${topic}`, JSON.stringify(chatArray));
  };

  const onSent = async (prompt) => {
    setLoading(true);
    const answer = await runChat(prompt);
    const newMessage = { id: uuidv4(), question: prompt, answer };

    let currentTopic = activeTopic;

    // New topic
    if (!activeTopic) {
      currentTopic = prompt.split(" ")[0]; // Or use full prompt
      setActiveTopic(currentTopic);
      const updatedTopics = [currentTopic, ...allTopics];
      saveTopics(updatedTopics);
    }

    const existingChat = JSON.parse(localStorage.getItem(`chat-${currentTopic}`)) || [];
    const updatedChat = [...existingChat, newMessage];

    saveChatToTopic(currentTopic, updatedChat);
    setChat(updatedChat);
    setInput("");
    setLoading(false);
  };

  const loadChat = (topic) => {
    const selectedChat = JSON.parse(localStorage.getItem(`chat-${topic}`)) || [];
    setChat(selectedChat);
    setActiveTopic(topic);
  };

  const deleteChat = (topic) => {
    localStorage.removeItem(`chat-${topic}`);
    const updatedTopics = allTopics.filter((t) => t !== topic);
    saveTopics(updatedTopics);
    if (topic === activeTopic) {
      setChat([]);
      setActiveTopic(null);
    }
  };

  const startNewChat = () => {
    setChat([]);
    setActiveTopic(null);
  };

  return (
    <Context.Provider
      value={{
        input,
        setInput,
        chat,
        loading,
        onSent,
        allTopics,
        loadChat,
        deleteChat,
        startNewChat,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export default ContextProvider;
