
import { useParams, useNavigate } from "react-router-dom";

const Checkout = () => {
    const { RequestID } = useParams();
    const navigate = useNavigate();

    const orders = [
        { RequestID: "1", cost: 1200, eventType: "Birthday", description: "Happy Birthday Cake" },
        { RequestID: "2", cost: 1500, eventType: "Wedding", description: "Elegant Wedding Cake" },
    ];

    const orderDetails = orders.find((order) => order.RequestID === RequestID);

    if (!orderDetails) {
        return (
            <div className="flex justify-center items-center min-h-screen bg-gray-100">
                <p>Order not found. Please return to the Marketplace.</p>
                <button
                    className="ml-4 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
                    onClick={() => navigate("/account/marketplace")}
                >
                    Go Back
                </button>
            </div>
        );
    }

    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-100">
            <div className="w-full max-w-3xl space-y-6 p-6">
                {/* Product Details */}
                <div className="bg-white rounded-lg shadow-md p-6">
                    <h2 className="text-xl font-bold text-gray-800 mb-4">Product Details</h2>
                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <p className="text-sm text-gray-600">Price</p>
                            <p className="font-semibold text-gray-700">₹{orderDetails.cost}</p>
                        </div>
                        <div>
                            <p className="text-sm text-gray-600">Event Type</p>
                            <p className="font-semibold text-gray-700">{orderDetails.eventType}</p>
                        </div>
                        <div>
                            <p className="text-sm text-gray-600">Description</p>
                            <p className="font-semibold text-gray-700">{orderDetails.description}</p>
                        </div>
                    </div>
                </div>

                {/* Payment Details */}
                <div className="bg-white rounded-lg shadow-md p-6">
                    <h2 className="text-xl font-bold text-gray-800 mb-4">Payment Details</h2>
                    <div className="space-y-4">
                        <div className="flex justify-between">
                            <p className="text-gray-600">Items Cost</p>
                            <p className="font-semibold text-gray-700">₹{orderDetails.cost}</p>
                        </div>
                        <div className="flex justify-between">
                            <p className="text-gray-600">Delivery Fee</p>
                            <p className="font-semibold text-gray-700">₹100</p>
                        </div>
                        <div className="flex justify-between">
                            <p className="text-gray-600">Platform Fee</p>
                            <p className="font-semibold text-gray-700">₹50</p>
                        </div>
                        <div className="flex justify-between">
                            <p className="text-gray-600">Donation</p>
                            <p className="font-semibold text-gray-700">₹10</p>
                        </div>
                    </div>
                </div>

                {/* Continue Button */}
                <div className="text-center">
                    <button
                        className="bg-blue-500 text-white px-6 py-3 rounded-md hover:bg-blue-600"
                        onClick={() => alert("Continue to payment!")}
                    >
                        Continue
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Checkout;
