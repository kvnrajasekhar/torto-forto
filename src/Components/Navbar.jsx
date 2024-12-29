// NavBar.js
import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <nav className="bg-white shadow-md fixed top-0 w-full z-50">
            <div className="max-w-7xl px-2 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    <div className="text-2xl font-bold text-gray-800 font-montserrat">FROSTIQ</div>
                    <div className="flex space-x-6">
                        <Link to="/" className="nav-link  font-montserrat">Home</Link>
                        <Link to="/about" className="nav-link  font-montserrat">About</Link>
                        <Link to="/orders" className="nav-link  font-montserrat">Orders</Link>
                        <Link to="/account" className="nav-link  font-montserrat">Account</Link>
                        <Link to="/cart" className="nav-link  font-montserrat">Cart</Link>
                        <Link to="/shop" className="nav-link  font-montserrat">Shop</Link>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
