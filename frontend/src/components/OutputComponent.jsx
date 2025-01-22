import React, { useEffect } from 'react'
import { useChatContext } from "../context/ChatContext.jsx";
import { Triangle } from 'react-loader-spinner'

const OutputComponent = () => {
  const { currentChat, loading } = useChatContext();
  if (loading) {
    return (
      <div className="flex items-center justify-center mt-4">
        <Triangle
          visible={true}
          height="80"
          width="80"
          color="#1665d6"
          ariaLabel="triangle-loading"
          wrapperStyle={{}}
          wrapperClass=""
        />
      </div>
    )
  }

  return (
    <div className="bg-gray-100 bg-opacity-15 p-4 rounded-lg shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)] max-w-md mx-auto mt-8">

      {currentChat.original_text ?

        <>
          <h1 className="text-2xl font-bold text-gray-100">Output</h1>
          <p className="text-gray-100 my-4">Your Input: <span className="font-bold">{currentChat.original_text}</span></p>
          <p className="text-gray-100 my-4">Corrected Text: <span className="font-bold">{currentChat.processed_text}</span></p>
        </>

        : <h1 className="text-2xl font-bold text-gray-100">Start Correcting your text</h1>}
    </div>
  )
}

export default OutputComponent