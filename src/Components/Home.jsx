import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import FeaturedSection from './FeaturedSection';
import '../index.css'

function Home() {
    const [location, setLocation] = useState(null);
    const [error, setError] = useState(null);
    const [isPaused, setIsPaused] = useState(false);

    const testimonials = [
        { id: 1, name: 'John Doe', feedback: 'Amazing cakes, love the quality!' },
        { id: 2, name: 'Jane Smith', feedback: 'The best cake shop in town!' },
        { id: 3, name: 'Chris Evans', feedback: 'Highly recommend their red velvet cake.' },
        { id: 1, name: 'John Doe', feedback: 'Amazing cakes, love the quality!' },
        { id: 2, name: 'Jane Smith', feedback: 'The best cake shop in town!' },
        { id: 3, name: 'Chris Evans', feedback: 'Highly recommend their red velvet cake.' },
        { id: 1, name: 'John Doe', feedback: 'Amazing cakes, love the quality!' },
        { id: 2, name: 'Jane Smith', feedback: 'The best cake shop in town!' },
        { id: 3, name: 'Chris Evans', feedback: 'Highly recommend their red velvet cake.' },
        { id: 1, name: 'John Doe', feedback: 'Amazing cakes, love the quality!' },
        { id: 2, name: 'Jane Smith', feedback: 'The best cake shop in town!' },
        { id: 3, name: 'Chris Evans', feedback: 'Highly recommend their red velvet cake.' },
        { id: 1, name: 'John Doe', feedback: 'Amazing cakes, love the quality!' },
        { id: 2, name: 'Jane Smith', feedback: 'The best cake shop in town!' },
        { id: 3, name: 'Chris Evans', feedback: 'Highly recommend their red velvet cake.' },
    ];

    useEffect(() => {
        console.log('Attempting to fetch geolocation...');

        // Check if geolocation is supported
        if (!navigator.geolocation) {
            setError('Geolocation is not supported by this browser.');
            return;
        }

        // Requesting location from the browser
        navigator.geolocation.getCurrentPosition(
            (position) => {
                console.log('Location retrieved successfully:', position);
                setLocation({
                    latitude: position.coords.latitude,
                    longitude: position.coords.longitude,
                });
            },
            (err) => {
                console.log('Error retrieving location:', err);

                // Handle specific error cases
                if (err.code === err.PERMISSION_DENIED) {
                    setError('Enable location access.');
                } else if (err.code === err.POSITION_UNAVAILABLE) {
                    setError('Location information is unavailable.');
                } else if (err.code === err.TIMEOUT) {
                    setError('The request to get user location timed out. Please try again.');
                } else {
                    setError('An unknown error occurred while fetching location.');
                }
            }
        );
    }, []);


    return (
        <div className="min-h-screen bg-[#ddb892]">
            {/* Navigation */}
            <Navbar location={location} error={error} />

            {/* Hero Section */}
            <section id="home" className="relative">
                <div className="w-full h-[850px]">
                    <img
                        src="./src/assets/main.png"
                        alt="Hero"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-25 flex flex-col justify-center items-center text-center text-white">
                        <h1 className="text-5xl font-extrabold">Welcome to Cake Shop</h1>
                        <p className="text-lg mt-4">Discover the best cakes in town, freshly baked just for you!</p>
                        <Link
                            to="/shop"
                            className="mt-6 bg-[#d66] text-white py-3 px-6 text-xl rounded hover:bg-white hover:text-[#d66] transition"
                        >
                            Customize
                        </Link>
                    </div>
                </div>
            </section>

            {/* Featured Cakes */}
            <FeaturedSection />

            {/* Testimonials Section */}
            <section id="testimonials-container" className="bg-[#bbbbb9] py-12 overflow-hidden">
                <div
                    id="testimonials"
                    style={{
                        animationPlayState: isPaused ? "paused" : "running",
                    }}
                    onMouseEnter={() => setIsPaused(true)}
                    onMouseLeave={() => setIsPaused(false)}
                >
                    {testimonials.map((testimonial, index) => (
                        <div key={index}>
                            <p className="text-gray-600 italic">{testimonial.feedback}</p>
                            <p className="text-gray-800 font-semibold mt-2 text-right">- {testimonial.name}</p>
                        </div>
                    ))}
                    {/* Duplicate testimonials for seamless looping */}
                    {testimonials.map((testimonial, index) => (
                        <div key={`clone-${index}`}>
                            <p className="text-gray-600 italic">{testimonial.feedback}</p>
                            <p className="text-gray-800 font-semibold mt-2 text-right">- {testimonial.name}</p>
                        </div>
                    ))}
                </div>
            </section>

            <Footer />
        </div>
    );
}

export default Home;
