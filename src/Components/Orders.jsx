import { useEffect, useState } from "react";

const Orders = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    // Simulating data fetching from an API
    setTimeout(() => {
      try {
        // Sample Orders Data
        const fetchedOrders = [
          {
            orderId: "12345",
            eventType: "Wedding",
            bakeryName: "Sweet Delights Bakery",
            cost: "$200",
            dateOrdered: "2024-12-10",
            orderStatus: "Completed",
            paymentMode: "Credit Card",
            cakeImage: "https://via.placeholder.com/150?text=Cake+1", // Placeholder image
          },
          {
            orderId: "67890",
            eventType: "Birthday",
            bakeryName: "Delicious Cakes",
            cost: "$150",
            dateOrdered: "2024-12-12",
            orderStatus: "Pending",
            paymentMode: "Cash on Delivery",
            cakeImage: "https://via.placeholder.com/150?text=Cake+2", // Placeholder image
          },
        ];
        setOrders(fetchedOrders);
        setLoading(false);
      } catch (err) {
        setError("Failed to fetch orders");
        setLoading(false);
      }
    }, 2000);
  }, []);

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
                      className={`px-2 py-1 rounded-full text-white ${
                        order.orderStatus === "Completed"
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
