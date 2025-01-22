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
    <div className="space-y-4">
      {history.length > 0 ? history.map((chat) => (
        <div
          key={chat.id}
          className="p-4 border rounded-lg shadow-sm bg-gray-100 hover:shadow-md transition-shadow"
        >
          <p className="text-gray-700 font-semibold">Original Text: {chat.originaltext}</p>
          <p className="text-gray-500 font-extrabold mt-2"> Corrected Text: {chat.processedtext}</p>
        </div>
      )): <NoHistory/>}
    </div>

  )
}

export default HistoryPage