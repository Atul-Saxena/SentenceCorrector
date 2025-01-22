import React, { useEffect } from 'react'
import { useChatContext } from "../context/ChatContext.jsx";
import { Triangle } from 'react-loader-spinner'

const OutputComponent = () => {
  const { currentChat, loading } = useChatContext();
  if (loading) {
    return (
      <>
        <Triangle
          visible={true}
          height="80"
          width="80"
          color="#1665d6"
          ariaLabel="triangle-loading"
          wrapperStyle={{}}
          wrapperClass=""
        />
      </>
    )
  }

  return (
    <div className="bg-white p-4 rounded-lg shadow-lg max-w-md mx-auto mt-8">

      {currentChat.original_text ?

        <>
          <h1 className="text-2xl font-bold text-gray-800">Output</h1>
          <p className="text-gray-600 my-4">Your Input: <span className="font-bold">{currentChat.original_text}</span></p>
          <p className="text-gray-600 my-4">Corrected Text: <span className="font-bold">{currentChat.processed_text}</span></p>
        </>

        : <h1 className="text-2xl font-bold text-gray-800">Start Correcting</h1>}
    </div>
  )
}

export default OutputComponent