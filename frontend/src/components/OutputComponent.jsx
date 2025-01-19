import React from 'react'
import { useChatContext } from "../context/ChatContext.jsx";

const OutputComponent = () => {
  const { currentChat } = useChatContext();
  return (
    <div className="bg-white p-4 rounded-lg shadow-lg max-w-md mx-auto mt-8">
      <h1 className="text-2xl font-bold text-gray-800">Output</h1>
      <p className="text-gray-600 my-4">Your Input: <span className="font-bold">{currentChat.original_text}</span></p>
      <p className="text-gray-600 my-4">Corrected Text: <span className="font-bold">{currentChat.processed_text}</span></p>
    </div>
  )
}

export default OutputComponent