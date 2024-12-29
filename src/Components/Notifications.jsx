import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

const Notifications = () => {
    const location = useLocation();
    const [notifications, setNotifications] = useState([]);

    useEffect(() => {
        const fetchNotifications = async () => {
            const BASE_URL = import.meta.env.BASE_URL;
            try {
                const response = await fetch(`${BASE_URL}/notifications`);
                if (!response.ok) {
                    throw new Error("Failed to fetch notifications");
                }
                const data = await response.json();
                setNotifications(data);
            } catch (error) {
                console.error("Error fetching notifications:", error);
            }
        };

        fetchNotifications();
    }, []);

    const handleMarkAsRead = (id) => {
        setNotifications((notifications) =>
            notifications.map((notification) =>
                notification.id === id ? { ...notification, read: true } : notification
            )
        );
    };

    const handleClearNotifications = () => {
        setNotifications([]);
    };

    const menuItems = [
        { name: "Profile", path: "/account/profile" },
        { name: "Orders", path: "/account/orders" },
        { name: "Chat", path: "/account/chat" },
        { name: "Marketplace", path: "/account/marketplace" },
        { name: "Notifications", path: "/account/notifications" },
    ];

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
                            {item.name}
                        </Link>
                    ))}
                </div>
            </div>

            {/* Main Content */}
            <div className="flex-1 p-8 bg-gray-100 mt-14">
                <div className="bg-white p-6 rounded-lg shadow-md">
                    <div className="flex justify-between items-center">
                        <h1 className="text-2xl font-bold text-gray-800">Notifications</h1>
                        <button
                            onClick={handleClearNotifications}
                            className="text-sm text-red-500 hover:underline"
                        >
                            Clear All
                        </button>
                    </div>

                    <div className="mt-6 space-y-4">
                        {notifications.length > 0 ? (
                            notifications.map((notification) => (
                                <div
                                    key={notification.id}
                                    className={`p-4 rounded-md border ${notification.read ? "bg-gray-100" : "bg-blue-50"
                                        }`}
                                >
                                    <h3 className="text-lg font-bold text-gray-800">{notification.title}</h3>
                                    <p className="text-sm text-gray-600">{notification.message}</p>
                                    <span className="text-xs text-gray-400">{notification.date}</span>
                                    {!notification.read && (
                                        <button
                                            onClick={() => handleMarkAsRead(notification.id)}
                                            className="mt-2 text-sm text-blue-500 hover:underline"
                                        >
                                            Mark as Read
                                        </button>
                                    )}
                                </div>
                            ))
                        ) : (
                            <p className="text-gray-500 text-center">No new notifications</p>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Notifications;
