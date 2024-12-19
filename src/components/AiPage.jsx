import React, { useState, useEffect } from "react";

const AiPage = () => {
  const [prompt, setPrompt] = useState("");
  const [response, setResponse] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [chatHistory, setChatHistory] = useState([]);

  // Fetch chat history from the server
  const fetchChatHistory = async () => {
    try {
      const res = await fetch("http://localhost:5000/api/chats");
      if (!res.ok) throw new Error("Failed to fetch chat history.");
      const data = await res.json();
      setChatHistory(data);
    } catch (error) {
      console.error("Error fetching chat history:", error);
    }
  };

  // Fetch chat history on component mount
  useEffect(() => {
    fetchChatHistory();
  }, []);

  // Process a single chunk of AI response
  const processChunk = (chunk) => {
    try {
      const parsed = JSON.parse(chunk); // Parse JSON line
      return parsed.response || "";
    } catch (error) {
      console.error("Error parsing chunk:", chunk, error);
      return "";
    }
  };

  // Generate text response from AI
  const generateText = async () => {
    if (!prompt.trim()) {
      alert("Please enter a prompt.");
      return;
    }
  
    setResponse("");
    setIsLoading(true);
  
    try {
      const aiResponse = await fetch("http://localhost:5000/api/proxy/generate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          model: "llama3.2",
          prompt: prompt.trim(),
        }),
      });
  
      if (!aiResponse.ok) throw new Error("Error from backend proxy");
  
      const reader = aiResponse.body.getReader();
      const decoder = new TextDecoder("utf-8");
      let done = false;
      let accumulatedResponse = "";
  
      while (!done) {
        const { value, done: streamDone } = await reader.read();
        done = streamDone;
  
        if (value) {
          const chunk = decoder.decode(value, { stream: true });
          console.log("Received chunk:", chunk);
  
          try {
            // Parse the top-level JSON
            const parsedChunk = JSON.parse(chunk);
  
            if (parsedChunk.result) {
              // Split the `result` string by newlines
              const lines = parsedChunk.result.split("\n").filter((line) => line.trim() !== "");
  
              // Parse and process each line
              for (const line of lines) {
                try {
                  const parsedLine = JSON.parse(line.trim()); // Parse each individual JSON line
                  if (parsedLine.response) {
                    accumulatedResponse += parsedLine.response;
                    setResponse((prev) => prev + parsedLine.response);
                  }
                } catch (error) {
                  console.error("Error parsing line:", line, error);
                }
              }
            }
          } catch (error) {
            console.error("Error parsing chunk:", chunk, error);
          }
        }
      }
  
      if (!accumulatedResponse.trim()) {
        alert("No response generated from the AI model.");
        return;
      }
  
      const saveResponse = await fetch("http://localhost:5000/api/chats", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          prompt: prompt.trim(),
          response: accumulatedResponse.trim(),
        }),
      });
  
      if (!saveResponse.ok) {
        const errorDetails = await saveResponse.json();
        console.error("Error saving chat:", errorDetails);
        alert(`Failed to save chat: ${errorDetails.message || "Unknown error"}`);
        return;
      }
  
      fetchChatHistory();
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred.");
    } finally {
      setIsLoading(false);
    }
  };
  

  return (
    <div className="p-4 max-w-xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">AI Chatbot</h1>

      <textarea
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        placeholder="Enter your prompt here..."
        className="w-full p-2 border rounded mb-4"
        rows="4"
      ></textarea>

      <button
        onClick={generateText}
        disabled={isLoading}
        className={`px-4 py-2 rounded ${
          isLoading
            ? "bg-gray-400 cursor-not-allowed"
            : "bg-blue-500 hover:bg-blue-600 text-white"
        }`}
      >
        {isLoading ? "Generating..." : "Generate Text"}
      </button>

      <div className="mt-4 p-4 bg-gray-100 rounded shadow">
        <strong>AI Response:</strong>
        <p className="mt-2 whitespace-pre-wrap">
          {response || "No response yet."}
        </p>
      </div>

      <div className="mt-8">
        <h2 className="text-xl font-semibold">Chat History</h2>
        <ul className="mt-4 space-y-4">
          {chatHistory.length > 0 ? (
            chatHistory.map((chat) => (
              <li key={chat.chatId} className="p-4 border rounded bg-gray-50">
                <p>
                  <strong>Prompt:</strong> {chat.prompt}
                </p>
                <p>
                  <strong>Response:</strong> {chat.response}
                </p>
                <p className="text-gray-500 text-sm">
                  <strong>Date:</strong>{" "}
                  {new Date(chat.createdAt).toLocaleString()}
                </p>
              </li>
            ))
          ) : (
            <p className="text-gray-500">No chat history available.</p>
          )}
        </ul>
      </div>
    </div>
  );
};

export default AiPage;
