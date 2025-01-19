import { createContext, useContext, useState, useEffect } from "react";

const chatContext = createContext(null);

export const useChatContext = () => useContext(chatContext);

const ChatContext = (props) => {
  const [currentChat, setChatOutput] = useState({});

  return <chatContext.Provider value={{ currentChat, setChatOutput }}>
        {props.children}
    </chatContext.Provider>
}

export default ChatContext