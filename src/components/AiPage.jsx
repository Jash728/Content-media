import React, { useState } from 'react';

const AiPage = () => {
  const [userPrompts, setUserPrompts] = useState([]);

  const handleButtonClick = (prompt) => {
    
    setUserPrompts((prevPrompts) => [...prevPrompts, prompt]);

    
    const iframe = document.querySelector("iframe");
    if (iframe && iframe.contentWindow) {
      
      iframe.contentWindow.postMessage(prompt, "https://www.chatbase.co");
    }
  };

  return (
    <div className="h-screen flex">
      <div className="flex-1 p-8">
        <h1 className="text-4xl font-semibold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-pink-500 to-purple-500">
          How can I help you today?
        </h1>

        <div className="flex justify-center items-center h-[60vh] mb-8">
          <iframe
            src="https://www.chatbase.co/chatbot-iframe/GVYH1vSnhZh_VuQ1wOIKK"
            title="AI Content"
            className="w-full h-full"
            style={{ border: "none" }}
          ></iframe>
        </div>

        <div className="flex flex-wrap justify-center gap-4">
          <button onClick={() => handleButtonClick('Give me ideas in my niche')} className="px-6 py-3 rounded-lg bg-orange-200 text-gray-800 font-semibold hover:bg-orange-300">
            Give me ideas in my niche
          </button>
          <button onClick={() => handleButtonClick('Give me script for -')} className="px-6 py-3 rounded-lg bg-orange-200 text-gray-800 font-semibold hover:bg-orange-300">
            Give me script for -
          </button>
          <button onClick={() => handleButtonClick('Hook ideas for -')} className="px-6 py-3 rounded-lg bg-orange-200 text-gray-800 font-semibold hover:bg-orange-300">
            Hook ideas for -
          </button>
          <button onClick={() => handleButtonClick('Editing tips for reels')} className="px-6 py-3 rounded-lg bg-orange-200 text-gray-800 font-semibold hover:bg-orange-300">
            Editing tips for reels
          </button>
          <button onClick={() => handleButtonClick('Trend')} className="px-6 py-3 rounded-lg bg-orange-200 text-gray-800 font-semibold hover:bg-orange-300">
            Trend
          </button>
        </div>

       
        <div className="mt-8">
          <h2 className="text-2xl font-semibold">User Prompts:</h2>
          <ul>
            {userPrompts.map((prompt, index) => (
              <li key={index} className="mt-2 p-4 bg-gray-100 rounded">
                {prompt}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AiPage;
