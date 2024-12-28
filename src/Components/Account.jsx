
import { Link, Route, Routes } from 'react-router-dom';
import { useState, useEffect } from 'react';

// Placeholder components for each section
const ProfileInfo = () => <div>Profile Information Content</div>;
const Orders = () => <div>Orders Content</div>;
const Chat = () => <div>Chat Content</div>;
const Marketplace = () => <div>Marketplace Content</div>;
const Notifications = () => <div>Notifications Content</div>;

const Account = () => {
    const [userData, setUserData] = useState(null);

    // Fetch user data from the backend when the component mounts
    useEffect(() => {
        // Replace with your backend API call
        const fetchUserData = async () => {
            const response = await fetch('/api/user'); // Adjust this to your backend endpoint
            const data = await response.json();
            setUserData(data);
        };

        fetchUserData();
    }, []);

    return (
        <div className="flex">
            {/* Sidebar */}
            <div className="w-1/4 bg-gray-800 text-white p-4">
                <div className="space-y-4">
                    <Link to="/account/profile" className="block text-xl hover:bg-gray-700 p-2 rounded">Profile Info</Link>
                    <Link to="/account/orders" className="block text-xl hover:bg-gray-700 p-2 rounded">Orders</Link>
                    <Link to="/account/chat" className="block text-xl hover:bg-gray-700 p-2 rounded">Chat</Link>
                    <Link to="/account/marketplace" className="block text-xl hover:bg-gray-700 p-2 rounded">Marketplace</Link>
                    <Link to="/account/notifications" className="block text-xl hover:bg-gray-700 p-2 rounded">Notifications</Link>
                </div>
            </div>

            {/* Content Section */}
            <div className="flex-1 p-8 bg-gray-100">
                <h2 className="text-3xl font-semibold mb-6">Account Dashboard</h2>
                <div className="bg-white p-6 rounded-lg shadow-md">
                    {/* Render different components based on the route */}
                    <Routes>
                        <Route path="profile" element={<ProfileInfo />} />
                        <Route path="orders" element={<Orders />} />
                        <Route path="chat" element={<Chat />} />
                        <Route path="marketplace" element={<Marketplace />} />
                        <Route path="notifications" element={<Notifications />} />
                    </Routes>
                </div>
            </div>
        </div>
    );
};

export default Account;
