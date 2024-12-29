import { useState } from "react";

const Chat = () => {
    const [selectedChat, setSelectedChat] = useState("Chef");
    const [messages, setMessages] = useState([
        { sender: "Chef", text: "Hello! How can I assist you today?" },
        { sender: "User", text: "I'd like to know about my order." },
    ]);
    const [newMessage, setNewMessage] = useState("");

    const handleSendMessage = () => {
        if (newMessage.trim()) {
            setMessages([...messages, { sender: "User", text: newMessage }]);
            setNewMessage("");
        }
    };

    const chatParticipants = ["Chef", "Delivery Person"];

    return (
        <div className="flex h-screen">
            {/* Sidebar */}
            <div className="w-1/4 bg-gray-800 text-white p-4">
                <h2 className="text-xl font-bold mb-4">Chats</h2>
                <div className="space-y-4">
                    {chatParticipants.map((participant) => (
                        <div
                            key={participant}
                            className={`cursor-pointer p-2 rounded hover:bg-gray-700 ${selectedChat === participant ? "bg-gray-700" : ""
                                }`}
                            onClick={() => setSelectedChat(participant)}
                        >
                            {participant}
                        </div>
                    ))}
                </div>
            </div>

            {/* Chat Window */}
            <div className="flex-1 flex flex-col bg-gray-100">
                {/* Chat Header */}
                <div className="bg-white p-4 shadow-md">
                    <h2 className="text-lg font-bold">{selectedChat} Chat</h2>
                </div>

                {/* Messages */}
                <div className="flex-1 overflow-y-auto p-4 space-y-4">
                    {messages.map((message, index) => (
                        <div
                            key={index}
                            className={`flex ${message.sender === "User" ? "justify-end" : "justify-start"
                                }`}
                        >
                            <div
                                className={`${message.sender === "User"
                                        ? "bg-blue-500 text-white"
                                        : "bg-gray-300 text-black"
                                    } p-3 rounded-lg max-w-xs`}
                            >
                                {message.text}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Message Input */}
                <div className="bg-white p-4 border-t flex items-center">
                    <input
                        type="text"
                        value={newMessage}
                        onChange={(e) => setNewMessage(e.target.value)}
                        placeholder="Type a message..."
                        className="flex-1 border border-gray-300 rounded p-2 mr-2"
                    />
                    <button
                        onClick={handleSendMessage}
                        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                    >
                        Send
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Chat;
