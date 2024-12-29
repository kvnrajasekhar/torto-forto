import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function CakeList() {
    const { featureType } = useParams(); // Get the feature type from the URL
    const [cakes, setCakes] = useState([]);
    const [loading, setLoading] = useState(true);

    // Sample data for demonstration
    const sampleData = {
        Birthday: [
            { id: 1, name: "Chocolate Cake", bakeryName: "Sweet Treats", location: "New York", price: 20, image: "https://via.placeholder.com/150" },
            { id: 2, name: "Vanilla Cake", bakeryName: "Cake Studio", location: "Los Angeles", price: 25, image: "https://via.placeholder.com/150" },
        ],
        "Baby Shower": [
            { id: 3, name: "Pink Velvet Cake", bakeryName: "Bakers Hub", location: "Chicago", price: 30, image: "https://via.placeholder.com/150" },
        ],
        Marriage: [
            { id: 4, name: "Wedding Cake", bakeryName: "Royal Bakery", location: "Houston", price: 50, image: "https://via.placeholder.com/150" },
        ],
        "Valentines Day": [
            { id: 5, name: "Heart Shape Cake", bakeryName: "Romantic Bakes", location: "San Francisco", price: 35, image: "https://via.placeholder.com/150" },
        ],
        Christmas: [
            { id: 6, name: "Christmas Special", bakeryName: "Holiday Bakery", location: "Seattle", price: 40, image: "https://via.placeholder.com/150" },
        ],
        Hallowen: [
            { id: 6, name: "Christmas Special", bakeryName: "Holiday Bakery", location: "Seattle", price: 40, image: "https://via.placeholder.com/150" },
        ],
        NewYear: [
            { id: 6, name: "Christmas Special", bakeryName: "Holiday Bakery", location: "Seattle", price: 40, image: "https://via.placeholder.com/150" },
        ],
        // Add other categories here...
    };

    useEffect(() => {
        const fetchCakes = async () => {
            try {
                setLoading(true);
                const response = await fetch(`http://localhost:5000/api/cakes?type=${featureType}`);
                if (response.ok) {
                    const data = await response.json();
                    setCakes(data);
                } else {
                    console.warn("Using sample data as the API returned an error.");
                    setCakes(sampleData[featureType] || []);
                }
            } catch (error) {
                console.error("Error fetching cakes data:", error);
                setCakes(sampleData[featureType] || []);
            } finally {
                setLoading(false);
            }
        };

        fetchCakes();
    }, [featureType]);// Re-fetch data when featureType changes

    if (loading) {
        return <p className="text-center text-gray-700">Loading cakes...</p>;
    }

    return (
        <div className="max-w-7xl mx-auto px-4 py-8">
            <h2 className="text-2xl font-bold text-gray-800 text-center mb-8">{featureType} Cakes</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {cakes.length > 0 ? (
                    cakes.map((cake) => (
                        <div key={cake.id} className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-all">
                            <img
                                src={cake.image}
                                alt={cake.name}
                                className="w-full h-54 object-cover rounded-md"
                            />
                            <h3 className="text-xl font-semibold text-gray-800 mt-4 text-center">{cake.name}</h3>
                            <p className="text-gray-600 text-center">Bakery: {cake.bakeryName}</p>
                            <p className="text-gray-600 text-center">Location: {cake.location}</p>
                            <p className="text-center text-green-600 font-bold mt-2">${cake.price}</p>
                            <div className="flex justify-center gap-4 mt-4">
                                <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600">
                                    Order Now
                                </button>
                                <button className="bg-gray-500 text-white px-4 py-2 rounded-lg hover:bg-gray-600">
                                    Add to Cart
                                </button>
                            </div>
                        </div>
                    ))
                ) : (
                    <p className="text-center text-gray-700 col-span-full">No cakes available for this category.</p>
                )}
            </div>
        </div>
    );
}

export default CakeList;
