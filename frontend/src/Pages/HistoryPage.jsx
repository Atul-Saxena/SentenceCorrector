import React, { useEffect, useState } from 'react'
import { useFirebaseContext } from "../context/FirebaseContext.jsx";
import axios from 'axios';

const NoHistory = () => {
  return (
    <div className="flex flex-col mt-4 items-center justify-center h-full text-center space-y-4">
      <p className="text-gray-500 text-lg font-medium">
        No history found
      </p>
      <p className="text-gray-400 text-sm">
        Start correcting your sentences to see your history here.
      </p>
    </div>
  );
};


const HistoryPage = () => {
  const [history, setHistory] = useState([]);
  const { user } = useFirebaseContext();

  const fetchHistory = async () => {
    try {
      if (!user) return;
      const history = await axios.get(`http://127.0.0.1:8000/api/chat/getchat/${user.uid}/`);
      console.log(history.data);
      
      setHistory(history.data.data);

    } catch (error) {
      console.log(error);
      setHistory([]);
    }
  };

  useEffect(() => {
    fetchHistory();
  }, [user])

  return (
    <div className="flex flex-col items-center pt-40 p-10 space-y-4 h-screen bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1642355008521-236f1d29d0a8?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')" }}>
      {history.length > 0 ? history.map((chat) => (
        <div
          key={chat.id}
          className="p-4 mx-10 w-full md:w-1/2 border rounded-lg bg-gray-100 bg-opacity-5 hover:shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)] transition-shadow duration-500 ease-in-out"
        >
          <p className="text-white font-semibold">Original Text: {chat.originaltext}</p>
          <p className="text-white font-extrabold mt-2"> Corrected Text: {chat.processedtext}</p>
        </div>
      )): <NoHistory/>}
    </div>

  )
}

export default HistoryPage