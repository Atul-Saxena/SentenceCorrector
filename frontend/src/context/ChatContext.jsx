import { createContext, useContext, useState, useEffect } from "react";

const chatContext = createContext(null);

export const useChatContext = () => useContext(chatContext);

const ChatContext = (props) => {
  const [currentChat, setChatOutput] = useState({});
  const [loading, setLoading] = useState(false);

  return <chatContext.Provider value={{ currentChat, setChatOutput,loading,setLoading }}>
        {props.children}
    </chatContext.Provider>
}

export default ChatContext