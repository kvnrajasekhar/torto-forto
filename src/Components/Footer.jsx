
const Footer = () => {
    return (
        <footer className="bg-[url('/path/to/your/background.png')] bg-cover bg-black bg-no-repeat text-white py-10">
            <div className="max-w-7xl mx-auto flex flex-wrap justify-between">
                {/* About Section */}
                <div className="w-full lg:w-1/3 px-4">
                    <h3 className="text-lg font-semibold">About Emporium Pies</h3>
                    <p className="mt-2 text-sm">
                        Emporium Pies is a modern American pie company devoted to making Fine Pie for Fine Folk in the Dallas/Fort-Worth area.
                    </p>
                    <p className="mt-4 text-sm">© 2023 Emporium Pies</p>
                </div>

                {/* Quick Links */}
                <div className="w-full lg:w-1/3 px-4 mt-6 lg:mt-0"> 
                    <h3 className="text-lg font-semibold">Quick Links</h3>
                    <ul className="mt-2 space-y-2 text-sm">
                        <li><a href="#" className="hover:underline">Contact Us</a></li>
                        <li><a href="#" className="hover:underline">Pie Flavors & Care Instructions</a></li>
                        <li><a href="#" className="hover:underline">Shipping & Returns</a></li>
                        <li><a href="#" className="hover:underline">Delivery Apps</a></li>
                        <li><a href="#" className="hover:underline">Nationwide Shipping</a></li>
                        <li><a href="#" className="hover:underline">Current Menu</a></li>

                    </ul>
                </div>

                {/* Newsletter */}
                <div className="w-full lg:w-1/3 px-4 mt-6 lg:mt-0">
                    <h3 className="text-lg font-semibold">It’s Pie Time!</h3>
                    <p className="mt-2 text-sm">
                        Be the first to hear about pie collaborations, new flavor launches, and menu updates!
                    </p>
                    <form className="mt-4 space-y-3">
                        <input
                            type="text"
                            placeholder="FIRST NAME"
                            className="w-full px-4 py-2 text-sm text-gray-800 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
                        />
                        <input
                            type="text"
                            placeholder="LAST NAME"
                            className="w-full px-4 py-2 text-sm text-gray-800 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
                        />
                        <input
                            type="email"
                            placeholder="ENTER EMAIL"
                            className="w-full px-4 py-2 text-sm text-gray-800 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
                        />
                        <button
                            type="submit"
                            className="w-full py-2 text-sm font-semibold text-white bg-[#b66] rounded-md hover:bg-white hover:text-[#b66]"
                        >
                            SIGN UP
                        </button>
                    </form>
                    <div className="flex items-center space-x-3 mt-4">
                        <a href="#" className="text-white hover:text-yellow-500">
                            <i className="fab fa-facebook-f"></i>
                        </a>
                        <a href="#" className="text-white hover:text-yellow-500">
                            <i className="fab fa-instagram"></i>
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
