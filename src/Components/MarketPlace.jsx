import { useState, useEffect } from "react";
import { FaSearch } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";

const MarketPlace = () => {
    const [searchTerm, setSearchTerm] = useState(""); // State for search bar
    const [orders, setOrders] = useState([]);
    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        const sampleOrders = [
            {
                RequestID: "ORD001",
                orderPlacedDate: "2024-12-20",
                eventType: "Event A",
                description: "Customer wants a large banner.",
                cost: 530,
                image: "https://via.placeholder.com/150",
            },
            {
                RequestID: "ORD002",
                orderPlacedDate: "2024-12-22",
                eventType: "Event B",
                description: "Customer needs custom printing.",
                cost: 550,
                image: "https://via.placeholder.com/150",
            },
            {
                RequestID: "ORD003",
                orderPlacedDate: "2024-12-23",
                eventType: "Event C",
                description: "Customer requests gift packaging.",
                cost: 560,
                image: "https://via.placeholder.com/150",
            },
            {
                RequestID: "ORD004",
                orderPlacedDate: "2024-12-24",
                eventType: "Event D",
                description: "Customer requests a custom design.",
                cost: 560,
                image: "https://via.placeholder.com/150",
            },
        ];
        setOrders(sampleOrders); // Simulating setting data from API response
    }, []);

    const handleSearch = (event) => setSearchTerm(event.target.value);



    const handleAccept = (RequestID) => {
        alert(`Order ${RequestID} Accepted`)
        navigate(`/checkout/${RequestID}`);
    };
    const handleReject = (RequestID) => alert(`Order ${RequestID} Rejected`);

    const filteredOrders = orders.filter((order) =>
        order.RequestID.toLowerCase().includes(searchTerm.toLowerCase()) ||
        order.eventType.toLowerCase().includes(searchTerm.toLowerCase())
    );

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
                        <h1 className="text-2xl font-bold text-gray-800">Marketplace</h1>
                        <div className="relative">
                            <input
                                type="text"
                                className="pl-10 pr-4 py-2 border rounded-md"
                                placeholder="Search Orders"
                                value={searchTerm}
                                onChange={handleSearch}
                            />
                            <FaSearch className="absolute left-3 top-2 text-gray-500 mt-1" />
                        </div>
                    </div>

                    <div className="mt-6 grid grid-cols-2 gap-6">
                        {filteredOrders.map((order) => (
                            <div className="bg-white rounded-lg shadow-md" key={order.RequestID}>
                                <img
                                    src={order.image}
                                    alt={`Order ${order.RequestID}`}
                                    className="w-full h-40 object-cover rounded-t-lg"
                                />
                                <div className="p-6">
                                    <h2 className="text-lg font-bold text-gray-700">RequestID: {order.RequestID}</h2>
                                    <p className="text-sm text-gray-600">Order Placed: {order.orderPlacedDate}</p>
                                    <p className="text-sm text-gray-600">Event Type: {order.eventType}</p>
                                    <p className="text-sm text-gray-600">Description: {order.description}</p>
                                    <div className="mt-4 flex items-center space-x-4">
                                        <input
                                            value={order.cost}
                                            className="w-28 p-2 border rounded-md"
                                            placeholder="Cost"
                                        />
                                        <button
                                            onClick={() => handleAccept(order.RequestID)}
                                            className="bg-green-500 text-white px-6 py-2 rounded-md"
                                        >
                                            Accept
                                        </button>
                                        <button
                                            onClick={() => handleReject(order.RequestID)}
                                            className="bg-red-500 text-white px-6 py-2 rounded-md"
                                        >
                                            Reject
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MarketPlace;
