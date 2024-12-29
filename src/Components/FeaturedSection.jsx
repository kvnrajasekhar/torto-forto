import { Link } from 'react-router-dom';

function FeaturedSection() {
    const cakes = [
        { id: 1, name: 'Birthday', image: './src/assets/featured section/1.jpg' },
        { id: 2, name: 'Baby Shower', image: './src/assets/featured section/2.jpg' },
        { id: 3, name: 'Marriage', image: './src/assets/featured section/3.jpg' },
        { id: 4, name: 'Valentines Day', image: './src/assets/featured section/4.jpg' },
        { id: 5, name: 'Graduation', image: './src/assets/featured section/5.jpg' },
        { id: 6, name: 'Christmas', image: './src/assets/featured section/6.jpg' },
        { id: 7, name: 'Halloween', image: './src/assets/featured section/7.jpg' },
        { id: 8, name: 'New Year', image: './src/assets/featured section/8.jpg' },
    ];

    return (
        <div className="min-h-screen">
            {/* Featured Cakes Section */}
            <section id="order" className="bg-[#bbbbb9] py-12">
                <div className="max-w-7xl mx-auto px-4">
                    <h2 className="text-2xl font-bold text-gray-800 text-center mb-8">Featured Section</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
                        {cakes.map((cake) => (
                            <Link key={cake.id} to={`/cakes/${cake.name}`} className="bg-gray-100 p-4 rounded-lg shadow-md hover:shadow-lg transition-all">
                                <img src={cake.image} alt={cake.name} className="w-full h-54 object-cover rounded-md" />
                                <h3 className="text-xl font-semibold text-gray-800 mt-4 text-center">{cake.name}</h3>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}

export default FeaturedSection;
