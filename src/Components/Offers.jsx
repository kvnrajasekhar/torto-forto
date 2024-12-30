/* eslint-disable no-unused-vars */
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Offers = () => {

    // const [offers, setOffers] = useState([]);

    // useEffect(() => {
    //     const fetchOffers = async () => {
    //         try {
    //             const response = await fetch('/api/offers');
    //             const data = await response.json();
    //             setOffers(data);
    //         } catch (error) {
    //             console.error('Error fetching offers:', error);
    //         }
    //     };

    //     fetchOffers();
    // }, []);


    const [offers, setOffers] = useState([
        {
            id: 1,
            name: 'Chocolate Cake',
            image: 'https://via.placeholder.com/150?text=Chocolate+Cake',
            baker: 'Sweet Treats Bakery',
            review: 4.5, // out of 5
            price: 25.99,
        },
        {
            id: 2,
            name: 'Vanilla Cake',
            image: 'https://via.placeholder.com/150?text=Vanilla+Cake',
            baker: 'Heavenly Bakes',
            review: 4.7, // out of 5
            price: 45.99,
        },
        {
            id: 3,
            name: 'Red Velvet Cake',
            image: 'https://via.placeholder.com/150?text=Red+Velvet+Cake',
            baker: 'Gourmet Delights',
            review: 4.3, // out of 5
            price: 15.49,
        },
    ]);

    const navigate = useNavigate();

    const handleCheckout = (offerId) => {
        navigate(`/checkout/${offerId}`);
    };

    const handleRejectOffer = (id) => {
        setOffers(offers.filter((item) => item.id !== id));
    };

    return (
        <div className="min-h-screen bg-gray-100 py-10">
            <div className="max-w-5xl mx-auto bg-white shadow-md rounded-lg overflow-hidden">
                <div className="px-6 py-8">
                    <h1 className="text-3xl font-bold text-gray-800 mb-6">Exclusive Offers</h1>
                    {offers.length > 0 ? (
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {offers.map((item) => (
                                <div key={item.id} className="border rounded-lg shadow-md bg-gray-50">
                                    <img
                                        src={item.image}
                                        alt={item.name}
                                        className="w-full h-48 object-cover rounded-t-lg"
                                    />
                                    <div className="p-4">
                                        <h2 className="text-lg font-bold text-gray-800">{item.name}</h2>
                                        <p className="text-gray-600">
                                            <strong>Baker:</strong> {item.baker}
                                        </p>
                                        <p className="text-gray-600">
                                            <strong>Review:</strong> ⭐ {item.review} / 5
                                        </p>
                                        <p className="text-gray-800 font-semibold">
                                            <strong>Price:</strong> ${item.price.toFixed(2)}
                                        </p>
                                        <div className="flex justify-between items-center mt-4">
                                            <button
                                                onClick={() => handleCheckout(item.id)}
                                                className="px-4 py-2 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600"
                                            >
                                                Checkout
                                            </button>
                                            <button
                                                onClick={() => handleRejectOffer(item.id)}
                                                className="px-4 py-2 bg-red-500 text-white font-semibold rounded-md hover:bg-red-600"
                                            >
                                                Reject
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    ) : (
                        <p className="text-gray-600">No offers available at the moment. Check back later!</p>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Offers;
