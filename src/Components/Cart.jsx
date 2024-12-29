import  { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Cart = () => {
    const [cart, setCart] = useState([
        {
            id: 1,
            name: 'Chocolate Cake',
            price: 25.99,
            quantity: 1,
            image: 'https://via.placeholder.com/150?text=Chocolate+Cake',
        },
        {
            id: 2,
            name: 'Vanilla Cake',
            price: 45.99,
            quantity: 2,
            image: 'https://via.placeholder.com/150?text=Vanilla+Cake',
        },
        {
            id: 3,
            name: 'Red Velvet Cake',
            price: 15.49,
            quantity: 1,
            image: 'https://via.placeholder.com/150?text=Red+Velvet+Cake',
        },
    ]);

    const navigate = useNavigate();

    const handleCheckout = (orderId) => {
        navigate(`/checkout/${orderId}`);
    };

    const handleRemoveItem = (id) => {
        setCart(cart.filter(item => item.id !== id));
    };

    return (
        <div className="min-h-screen bg-gray-100 py-10">
            <div className="max-w-5xl mx-auto bg-white shadow-md rounded-lg overflow-hidden">
                <div className="px-6 py-8">
                    <h1 className="text-3xl font-bold text-gray-800 mb-6">Your Cart</h1>
                    {cart.length > 0 ? (
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {cart.map((item) => (
                                <div key={item.id} className="border rounded-lg shadow-md bg-gray-50">
                                    <img src={item.image} alt={item.name} className="w-full h-48 object-cover rounded-t-lg" />
                                    <div className="p-4">
                                        <h2 className="text-lg font-bold text-gray-800">{item.name}</h2>
                                        <p className="text-gray-600">Total: ${(item.price * item.quantity).toFixed(2)}</p>
                                        <div className="flex justify-between items-center mt-4">
                                            <button
                                                onClick={() => handleCheckout(item.id)}
                                                className="px-4 py-2 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600"
                                            >
                                                Checkout
                                            </button>
                                            <button
                                                onClick={() => handleRemoveItem(item.id)}
                                                className="px-4 py-2 bg-red-500 text-white font-semibold rounded-md hover:bg-red-600"
                                            >
                                                Remove
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    ) : (
                        <p className="text-gray-600">Your cart is empty. Add some products to get started!</p>
                    )}
                </div>
            </div>
        </div>
    );

};

export default Cart;
