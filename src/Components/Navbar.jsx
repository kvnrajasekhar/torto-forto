/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom';
import { UserContext } from '../context/UserContext';
import { useContext } from 'react';

function Navbar({ location, error, onLocationChange }) {
    const { logout } = useContext(UserContext)
    return (
        <nav className="bg-white shadow-md fixed top-0 w-full z-50">
            <div className="max-w-7xl px-2 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    <div className="text-2xl font-bold text-gray-800 font-montserrat">FROSTIQ</div>
                    <div className="flex items-center space-x-4">
                        {location ? (
                            <span className="text-gray-700">
                                Location: {location.latitude.toFixed(2)}, {location.longitude.toFixed(2)}
                            </span>
                        ) : error ? (
                            <span className="text-red-500">{error}</span>
                        ) : (
                            <button
                                onClick={onLocationChange}
                                className="bg-[#d66] text-white py-1 px-3 rounded">
                                Enter Location Manually
                            </button>
                        )}
                    </div>
                    <div className="flex space-x-6">
                        <Link to="/" className="nav-link font-montserrat">Home</Link>
                        <Link to="/about" className="nav-link font-montserrat">About</Link>
                        <Link to="/account/orders" className="nav-link font-montserrat">Orders</Link>
                        <Link to="/account" className="nav-link font-montserrat">Account</Link>
                        <Link to="/cart" className="nav-link font-montserrat">Cart</Link>
                        <Link to="/shop" className="nav-link font-montserrat">Shop</Link>
                        <button className="nav-link font-montserrat bg-red" onClick={() => logout()}>Logout</button>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
