import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const Orders = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const location = useLocation();

  // Extract user ID from the URL
  const userId = location.pathname.split("/")[3];

  useEffect(() => {
    // Fetch orders dynamically based on user ID
    const fetchOrders = async () => {
      try {
        const response = await fetch(`http://user.frostiq.me/api/orders/${userId}`); // Replace with actual endpoint
        if (!response.ok) {
          throw new Error("Failed to fetch orders");
        }
        const data = await response.json();
        setOrders(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchOrders();
  }, [userId]);

  return (
    <div className="max-w-4xl mx-auto py-8 mt-14">
      {loading && (
        <div className="text-center">
          <span className="text-xl font-semibold">Loading...</span>
        </div>
      )}
      {error && (
        <div className="text-center text-red-500">
          <span className="text-lg font-semibold">{error}</span>
        </div>
      )}
      {!loading && !error && (
        <div className="space-y-4">
          {orders.map((order) => (
            <div
              key={order.orderId}
              className="bg-white shadow-lg rounded-lg p-6 border border-gray-200 flex"
            >
              {/* Cake Image */}
              <img
                src={order.cakeImage}
                alt="Ordered Cake"
                className="w-32 h-32 object-cover rounded-lg mr-6"
              />
              <div className="flex-1">
                <h2 className="text-2xl font-semibold text-gray-800">Order ID: {order.orderId}</h2>
                <div className="mt-2 text-gray-600">
                  <p><strong>Event Type:</strong> {order.eventType}</p>
                  <p><strong>Bakery Name:</strong> {order.bakeryName}</p>
                  <p><strong>Cost:</strong> {order.cost}</p>
                  <p><strong>Date Ordered:</strong> {order.dateOrdered}</p>
                  <p><strong>Order Status:</strong>
                    <span
                      className={`px-2 py-1 rounded-full text-white ${order.orderStatus === "Completed"
                          ? "bg-green-500"
                          : order.orderStatus === "Pending"
                            ? "bg-yellow-500"
                            : "bg-red-500"
                        }`}
                    >
                      {order.orderStatus}
                    </span>
                  </p>
                  <p><strong>Payment Mode:</strong> {order.paymentMode}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Orders;
