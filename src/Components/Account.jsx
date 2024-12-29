/* eslint-disable no-unused-vars */
import { Link, Route, Routes, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { FaUser, FaShoppingBag, FaComments, FaStore, FaBell } from "react-icons/fa";
import Profile from './Profile';
import Orders from './Orders';
import Marketplace from './MarketPlace';
import Notifications from './Notifications';

function Account() {
    const [userData, setUserData] = useState(null);
    const location = useLocation();
    const [userId, setUserId] = useState(null);

    useEffect(() => {
        const fetchUserData = async () => {
            try {
                const response = await fetch('/api/user'); // Replace with your backend endpoint
                const data = await response.json();
                setUserData(data);
                setUserId(data?.id); // Assuming the unique ID is stored as `id` in the user data
            } catch (error) {
                console.error('Error fetching user data:', error);
            }
        };
        fetchUserData();
    }, []);

    const menuItems = [
        { name: "Profile", path: `/account/${userId}/profile`, icon: FaUser },
        { name: "Orders", path: `/account/${userId}/orders`, icon: FaShoppingBag },
        { name: "Chat", path: `/account/${userId}/chat`, icon: FaComments },
        { name: "Marketplace", path: `/account/${userId}/marketplace`, icon: FaStore },
        { name: "Notifications", path: `/account/${userId}/notifications`, icon: FaBell },
    ];

    function Chat() {
        const [messages, setMessages] = useState([]);
        const [inputMessage, setInputMessage] = useState("");

        const handleSendMessage = () => {
            if (inputMessage.trim()) {
                const newMessage = { sender: "User", content: inputMessage.trim() };
                setMessages((prev) => [...prev, newMessage]);
                setInputMessage("");

                // Simulate a response
                setTimeout(() => {
                    const response = {
                        sender: "Chef",
                        content: "Got it! I'll prepare your order shortly.",
                    };
                    setMessages((prev) => [...prev, response]);
                }, 1000);
            }
        };

        return (
            <div className="flex flex-col h-full">
                <div className="bg-gray-200 p-4 rounded-t-lg">
                    <h2 className="text-2xl font-semibold">Chat with Chef</h2>
                    <p className="text-sm text-gray-600">
                        Discuss your order details or clarify any questions.
                    </p>
                </div>

                <div className="flex-1 bg-gray-50 overflow-y-auto p-4">
                    {messages.map((message, index) => (
                        <div
                            key={index}
                            className={`flex ${message.sender === "User" ? "justify-end" : "justify-start"
                                } mb-4`}
                        >
                            <div
                                className={`${message.sender === "User"
                                    ? "bg-blue-500 text-white"
                                    : "bg-gray-300 text-gray-800"
                                    } px-4 py-2 rounded-lg max-w-md`}
                            >
                                {message.content}
                            </div>
                        </div>
                    ))}
                </div>

                <div className="bg-white p-4 rounded-b-lg">
                    <div className="flex items-center space-x-2">
                        <input
                            type="text"
                            placeholder="Type a message..."
                            value={inputMessage}
                            onChange={(e) => setInputMessage(e.target.value)}
                            className="flex-1 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
                        />
                        <button
                            onClick={handleSendMessage}
                            className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
                        >
                            Send
                        </button>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="flex">
            {/* Sidebar */}
            <div className="w-1/5 bg-gray-800 text-white p-4 h-screen sticky top-0">
                <h2 className="text-2xl font-bold mb-6">Account</h2>
                <div className="space-y-4">
                    {menuItems.map((item) => (
                        <Link
                            key={item.name}
                            to={item.path}
                            className={`flex items-center text-lg p-2 rounded hover:bg-gray-700 ${location.pathname === item.path ? "bg-gray-700" : ""
                                }`}
                        >
                            <item.icon className="mr-3" />
                            {item.name}
                        </Link>
                    ))}
                </div>
            </div>

            {/* Content Section */}
            <div className="flex-1 p-8 bg-gray-100">
                <div className="bg-white p-6 rounded-lg shadow-md h-full">
                    <Routes>
                        <Route path=":userId/profile" element={<Profile />} />
                        <Route path=":userId/orders" element={<Orders />} />
                        <Route path=":userId/chat" element={<Chat />} />
                        <Route path=":userId/marketplace" element={<Marketplace />} />
                        <Route path=":userId/notifications" element={<Notifications />} />
                    </Routes>
                </div>
            </div>
        </div>
    );
}

export default Account;
