import React, { useState } from "react";
import { useChatContext } from "../context/ChatContext.jsx";
import axios from "axios";

const InputComponent = () => {
    const [text, setText] = useState("");
    const [loading, setLoading] = useState(false);

    const { setChatOutput } = useChatContext();

    const handleSubmit = async(event) => {
        event.preventDefault();
        setLoading(true);
        try {
          const output = await axios.post("http://127.0.0.1:8000/api/process-text/", { text });
          setChatOutput(output.data);
          console.log("data sent successfully");
          
          setLoading(false);
          
        } catch (error) {
          console.log(error);
          
        }
        setText(""); // Clear the textarea after submission
    };
    return (
          <form
            onSubmit={handleSubmit}
            className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md"
          >
            <label htmlFor="message" className="block text-lg font-medium mb-2">
              Your Text
            </label>
            <textarea
              id="message"
              value={text}
              onChange={(e) => setText(e.target.value)}
              placeholder="Write your text here..."
              className="w-full h-32 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            ></textarea>
            <button
              type="submit"
              className="w-full mt-4 bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 focus:ring-2 focus:ring-blue-400 focus:outline-none"
            >
              Submit
            </button>
            <p>{loading ? "Processing..." : ""}</p>
          </form>
      );
}

export default InputComponent