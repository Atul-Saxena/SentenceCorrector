import React, { useState } from "react";
import { useChatContext } from "../context/ChatContext.jsx";
import { useFirebaseContext } from "../context/FirebaseContext.jsx";
import axios from "axios";

const InputComponent = () => {
    const [text, setText] = useState("");
    // const [loading, setLoading] = useState(false);

    const { setChatOutput,setLoading } = useChatContext();
    const { user } = useFirebaseContext();

    const handleSubmit = async(event) => {
        event.preventDefault();
        setLoading(true);
        if(text === ""){
          setLoading(false);
          return;
        };
        try {
          const output = await axios.post("http://127.0.0.1:8000/api/process-text/", { text });
          setChatOutput(output.data);
          console.log("data sent successfully");
          const chat_data = {
            user_id: user.uid,
            original_text: output.data.original_text,
            processed_text: output.data.processed_text,
          };
          // console.log(chat_data);

          const createText = await axios.post("http://127.0.0.1:8000/api/chat/createchat/", chat_data);
          console.log(createText.data);
          
          
          
          setLoading(false);
          
        } catch (error) {
          console.log(error);
          
        }
        setText(""); // Clear the textarea after submission
    };
    return (
          <form
            onSubmit={handleSubmit}
            className="bg-white bg-opacity-15 shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)] p-6 rounded-lg w-full"
          >
            <label htmlFor="message" className="block text-white text-lg font-medium mb-2">
              Your Text
            </label>
            <textarea
              id="message"
              value={text}
              onChange={(e) => setText(e.target.value)}
              placeholder="Write your text here..."
              className="w-full h-32 px-4 py-2 bg-transparent text-white focus:outline-none"
            ></textarea>
            <button
              type="submit"
              className="w-full mt-4 bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition-colors focus:outline-none"
            >
              Submit
            </button>
          </form>
      );
}

export default InputComponent