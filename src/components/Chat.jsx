import React, { useState, useEffect } from "react";
import axios from "axios";

const Chat = () => {
  const [prompt, setPrompt] = useState("");
  const [chatHistory, setChatHistory] = useState([]);

  useEffect(() => {
   
    const storedHistory = JSON.parse(localStorage.getItem("chatHistory")) || [];
    setChatHistory(storedHistory);
  }, []);

  const handleSendPrompt = async () => {
    if (!prompt) return;
  
    try {
      const res = await axios.get('/api/g/g-ZuetwQF0U-q-a-marketing-specialist', {
        params: { prompt },
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        }
      });
  
      console.log('Full API Response:', res);
  
     
      if (res.headers['content-type'] && res.headers['content-type'].includes('text/html')) {
        console.error('Unexpected HTML response:', res.data);
        throw new Error('Received HTML instead of expected JSON');
      }
  
      const gptResponse = res.data.response;
      if (!gptResponse) throw new Error('Invalid response structure');
  
      const newEntry = { prompt, response: gptResponse };
      setChatHistory((prevHistory) => [...prevHistory, newEntry]);
      localStorage.setItem('chatHistory', JSON.stringify([...chatHistory, newEntry]));
      setPrompt('');
    } catch (error) {
      console.error('Error fetching GPT response:', error);
    }
  };
  
  
  
  

  return (
    <div className="flex flex-col items-center w-full p-6 bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-bold mb-6">Custom GPT Chat Interface</h1>
      <div className="w-full max-w-lg p-4 bg-white rounded-lg shadow-lg">
        <div className="overflow-y-auto max-h-80 mb-4">
          {chatHistory.map((entry, index) => (
            <div key={index} className="mb-4">
              <p className="text-sm text-blue-600 font-semibold">You:</p>
              <p className="text-gray-700 mb-2">{entry.prompt}</p>
              <p className="text-sm text-green-600 font-semibold">GPT:</p>
              <p className="text-gray-700">{entry.response}</p>
            </div>
          ))}
        </div>
        <div className="flex items-center mt-4">
          <input
            type="text"
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            placeholder="Type your prompt..."
            className="w-full px-4 py-2 mr-2 text-gray-700 bg-gray-200 rounded focus:outline-none"
          />
          <button
            onClick={handleSendPrompt}
            className="px-4 py-2 bg-blue-600 text-white font-semibold rounded hover:bg-blue-700 focus:outline-none"
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
};

export default Chat;
