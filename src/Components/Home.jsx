/* eslint-disable no-undef */
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import FeaturedSection from './FeaturedSection';

function Home() {
    // const [location, setLocation] = useState(null);
    // const [error, setError] = useState(null);

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
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    setLocation({
                        latitude: position.coords.latitude,
                        longitude: position.coords.longitude,
                    });
                },
                (err) => {
                    setError(err.message);
                }
            );
        } else {
            setError('Geolocation is not supported by this browser.');
        }
    }, []);

    return (
        <div className="min-h-screen bg-[#ddb892]">
            {/* Navigation */}
            <Navbar />

            {/* Hero Section */}
            <section id="home" className="relative" >
                <div className="w-full h-[850px] ">
                    <img
                        src="./src/assets/main.png "
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

            {/* Geolocation Section */}
            <section className="bg-gray-100 py-12">
                <div className="max-w-7xl mx-auto px-4 text-center">
                    <h2 className="text-2xl font-bold text-gray-800">Your Location</h2>
                    {location ? (
                        <p className="text-gray-700 mt-2">
                            Latitude: {location.latitude}, Longitude: {location.longitude}
                        </p>
                    ) : (
                        <p className="text-red-500 mt-2">{error || 'Accessing your location...'}</p>
                    )}
                </div>
            </section>

            {/* Featured Cakes */}
            <FeaturedSection />

            {/* Testimonials */}

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
