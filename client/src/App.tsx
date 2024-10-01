import React, { useState, useEffect } from "react";
import "./App.css";

const App: React.FC = () => {
  const [socket, setSocket] = useState<WebSocket | null>(null);
  const [messages, setMessages] = useState<string[]>([]);
  const [input, setInput] = useState("");

  useEffect(() => {
    const ws = new WebSocket("ws://localhost:4000");
    ws.onopen = () => {
      console.log("Connected to WebSocket server");
    };

    ws.onmessage = (event) => {
      const parsedData = JSON.parse(event.data);
      setMessages((prev) => [...prev, parsedData.message]);
    };

    ws.onclose = () => {
      console.log("Disconnected from WebSocket server");
    };

    setSocket(ws);

    return () => {
      ws.close();
    };
  }, []);

  const sendMessage = () => {
    if (socket && input) {
      socket.send(input);
      setInput("");
    }
  };

  return (
    <div className="chat">
      <h1 className="title">WebSocket Chat</h1>
      <div className="content">
        {messages.map((msg, index) => (
          <p key={index}>{msg}</p>
        ))}
      </div>
      <div className="message">
        <input
          type="text"
          value={input}
          placeholder="Type a message"
          onChange={(e) => setInput(e.target.value)}
        />
        <button onClick={sendMessage}>
          Send
        </button>
      </div>
    </div>
  );
};

export default App;
