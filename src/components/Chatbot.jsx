import React, { useState } from "react";
import axios from "axios";

const Chatbot = () => {
    const [messages, setMessages] = useState([]);
    const [input, setInput] = useState("");

    const sendMessage = async () => {
        if (!input.trim()) return;

        const newMessages = [...messages, { role: "user", content: input }];
        setMessages(newMessages);
        setInput("");

        try {
            const res = await axios.post("http://localhost:5000/chat", { message: input });
            setMessages([...newMessages, { role: "bot", content: res.data.reply }]);
        } catch (error) {
            setMessages([...newMessages, { role: "bot", content: "Error: Unable to reach server" }]);
        }
    };

    return (
        <div className="p-4">
            <div className="border p-4 h-96 overflow-y-auto">
                {messages.map((msg, index) => (
                    <p key={index} className={msg.role === "user" ? "text-blue-500" : "text-green-500"}>
                        {msg.role}: {msg.content}
                    </p>
                ))}
            </div>
            <input
                className="border p-2 mt-2 w-full"
                value={input}
                onChange={(e) => setInput(e.target.value)}
            />
            <button className="bg-blue-500 text-white p-2 mt-2 w-full" onClick={sendMessage}>
                Send
            </button>
        </div>
    );
};

export default Chatbot;
