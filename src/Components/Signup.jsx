import React, { useState } from "react";
import { FaEnvelope, FaLock, FaPhoneAlt, FaGoogle, FaFacebook } from "react-icons/fa";
import { useNavigate } from "react-router";

const SignupPage = () => {
    const [username, setUsername] = useState("");
    const [name, setName] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault();
        // Logic for handling signup (validation and API call)
        console.log("Signup with:", username, name, phoneNumber, email, password);
        const baseUrl = "http://localhost:5555"

        try {
            const response = await fetch(`${baseUrl}/auth/signup`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    username,
                    name,
                    phoneNumber,
                    email,
                    password
                })
            });

            const data = await response.json();

            if (!data.success) {
                throw new Error(data.message || 'Signup failed');
            }

            console.log('Signup successful:', data);
            navigate('/')
            // Handle successful signup (e.g. redirect to login)

        } catch (error) {
            console.error('Signup error:', error);
            // Handle signup error (e.g. show error message)
        }
    };


    return (
        <div className="flex justify-center items-center h-screen bg-gray-100">
            <div className="bg-white rounded-lg shadow-lg p-8 w-96">
                <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">Sign Up</h2>

                {/* Signup Form */}
                <form onSubmit={handleSubmit}>
                    {/* First Name Input */}
                    <div className="mb-4">
                        <label htmlFor="firstName" className="block text-gray-700">Username</label>
                        <input
                            type="text"
                            id="username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            className="w-full p-3 rounded-md border border-gray-300 focus:outline-none"
                            placeholder="Enter your username"
                            required
                        />
                    </div>

                    {/* Last Name Input */}
                    <div className="mb-4">
                        <label htmlFor="name" className="block text-gray-700">Name</label>
                        <input
                            type="text"
                            id="name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className="w-full p-3 rounded-md border border-gray-300 focus:outline-none"
                            placeholder="Enter your name"
                            required
                        />
                    </div>

                    {/* Mobile Number Input */}
                    <div className="mb-4">
                        <label htmlFor="mobile" className="block text-gray-700">Mobile Number</label>
                        <div className="flex items-center border border-gray-300 rounded-md">
                            <FaPhoneAlt className="text-gray-500 ml-3" />
                            <input
                                type="tel"
                                id="phoneNumber"
                                value={phoneNumber}
                                onChange={(e) => setPhoneNumber(e.target.value)}
                                className="w-full p-3 pl-10 rounded-md border-none focus:outline-none"
                                placeholder="Enter your mobile number"
                                required
                            />
                        </div>
                    </div>

                    {/* Email Input */}
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-gray-700">Email ID</label>
                        <div className="flex items-center border border-gray-300 rounded-md">
                            <FaEnvelope className="text-gray-500 ml-3" />
                            <input
                                type="email"
                                id="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="w-full p-3 pl-10 rounded-md border-none focus:outline-none"
                                placeholder="Enter your email"
                                required
                            />
                        </div>
                    </div>

                    {/* Password Input */}
                    <div className="mb-4">
                        <label htmlFor="password" className="block text-gray-700">Set Password</label>
                        <div className="flex items-center border border-gray-300 rounded-md">
                            <FaLock className="text-gray-500 ml-3" />
                            <input
                                type="password"
                                id="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="w-full p-3 pl-10 rounded-md border-none focus:outline-none"
                                placeholder="Create a password"
                                required
                            />
                        </div>
                    </div>



                    {/* Signup Button */}
                    <button
                        type="submit"
                        className="w-full bg-blue-500 text-white py-3 rounded-md hover:bg-blue-600 transition"
                    >
                        Sign Up
                    </button>
                </form>

                {/* Social Media Signup Buttons */}
                <div className="mt-6 flex justify-around">
                    <button className="bg-blue-600 text-white p-3 rounded-full hover:bg-blue-700">
                        <FaFacebook className="w-6 h-6" />
                    </button>
                    <button className="bg-red-600 text-white p-3 rounded-full hover:bg-red-700">
                        <FaGoogle className="w-6 h-6" />
                    </button>
                </div>

                {/* Signin Link */}
                <div className="mt-4 text-center">
                    <span className="text-gray-600">Already have an account?</span>
                    <a href="/login" className="text-blue-500 hover:underline"> Login</a>
                </div>
            </div>
        </div>
    );
};

export default SignupPage;