import React, { useState } from "react";

const AiPage = () => {
    const [prompt, setPrompt] = useState(""); 
    const [response, setResponse] = useState(""); 
    const [isLoading, setIsLoading] = useState(false); 

    
    const generateText = async () => {
        if (!prompt.trim()) {
            alert("Please enter a prompt.");
            return;
        }

        setResponse(""); 
        setIsLoading(true);

        try {
            const response = await fetch("http://localhost:11434/api/generate", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    model: "llama3.2", 
                    prompt: prompt, 
                }),
            });

            if (!response.body) throw new Error("No response body from server");

            const reader = response.body.getReader();
            const decoder = new TextDecoder("utf-8");
            let done = false;
            let accumulatedResponse = ""; 

            while (!done) {
                const { value, done: streamDone } = await reader.read();
                done = streamDone;

                if (value) {
                    const chunk = decoder.decode(value, { stream: true });
                    const lines = chunk
                        .split("\n")
                        .filter(Boolean) 
                        .map((line) => JSON.parse(line)); 

                   
                    lines.forEach((line) => {
                        accumulatedResponse += line.response;
                    });

                    
                    setResponse(accumulatedResponse);
                }
            }
        } catch (error) {
            console.error("Error calling Ollama API:", error);
            alert("Failed to get a response from the AI server.");
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
                <p className="mt-2 whitespace-pre-wrap">{response || "No response yet."}</p>
            </div>
        </div>
    );
};

export default AiPage;
