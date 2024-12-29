import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

const Profile = () => {
    const location = useLocation();
    const [profile, setProfile] = useState(null);
    const userId = location.pathname.split("/")[3]; // Extract userId from the URL

    useEffect(() => {
        // Fetch user details from the backend using the unique userId
        const fetchProfile = async () => {
            try {
                const response = await fetch(`/api/users/${userId}`); // Replace with actual endpoint
                if (!response.ok) {
                    throw new Error("Failed to fetch user details");
                }
                const userData = await response.json();
                setProfile(userData);
            } catch (error) {
                console.error("Error fetching profile data:", error);
            }
        };

        fetchProfile();
    }, [userId]);

    const handleResetPassword = () => {
        alert("Password reset link has been sent to your email.");
        // Implement actual reset password logic
    };

    const handleLogout = () => {
        alert("Logged out successfully.");
        // Implement logout logic
    };

    const menuItems = [
        { name: "Profile", path: `/account/profile/${userId}` },
        { name: "Orders", path: `/account/orders/${userId}` },
        { name: "Chat", path: `/account/chat/${userId}` },
        { name: "Marketplace", path: `/account/marketplace/${userId}` },
        { name: "Notifications", path: `/account/notifications/${userId}` },
    ];

    if (!profile) {
        return <div>Loading...</div>;
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
                            {item.name}
                        </Link>
                    ))}
                </div>
            </div>

            {/* Main Content */}
            <div className="flex-1 p-8 bg-gray-100 mt-14">
                <div className="bg-white p-6 rounded-lg shadow-md">
                    <h1 className="text-2xl font-bold text-gray-800 mb-6">Profile Information</h1>
                    <div className="space-y-4">
                        <div className="flex justify-between items-center">
                            <span className="text-gray-600">Name:</span>
                            <span className="text-gray-800 font-semibold">{profile.name}</span>
                        </div>
                        <div className="flex justify-between items-center">
                            <span className="text-gray-600">Email:</span>
                            <span className="text-gray-800 font-semibold">{profile.email}</span>
                        </div>
                        <div className="flex justify-between items-center">
                            <span className="text-gray-600">Phone:</span>
                            <span className="text-gray-800 font-semibold">{profile.phoneNumber}</span>
                        </div>
                        <div className="flex justify-between items-center">
                            <span className="text-gray-600">Address:</span>
                            <span className="text-gray-800 font-semibold">
                                {`${profile.address.street}, ${profile.address.city}, ${profile.address.state}, ${profile.address.zip}, ${profile.address.country}`}
                            </span>
                        </div>
                    </div>
                    <div className="mt-6 space-y-4">
                        <button
                            onClick={handleResetPassword}
                            className="w-full bg-blue-500 text-white px-6 py-2 rounded-md"
                        >
                            Reset Password
                        </button>
                        <button
                            onClick={handleLogout}
                            className="w-full bg-red-500 text-white px-6 py-2 rounded-md"
                        >
                            Logout
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;
