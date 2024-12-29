

const AboutPage = () => {
    return (
        <div className="min-h-screen bg-gray-50 py-10">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="bg-white shadow-md rounded-lg overflow-hidden">
                    <div className="px-6 py-8 text-center">
                        <h1 className="text-4xl font-extrabold text-gray-800 mb-4">About Frostiq</h1>
                        <p className="text-lg text-gray-600 leading-relaxed">
                            Welcome to Frostiq — your ultimate customizable and scalable solution for modern applications.
                            Designed with precision and built for performance, Frostiq empowers users with intuitive
                            interfaces and cutting-edge technologies to streamline workflows and enhance productivity.
                        </p>
                    </div>
                    <div className="py-8 bg-gray-100 grid grid-cols-1 md:grid-cols-3 gap-6 px-6">
                        <div className="text-center">
                            <h2 className="text-xl font-semibold text-gray-800">Customization</h2>
                            <p className="text-gray-600 mt-2">
                                Tailor every aspect of your experience to meet your unique requirements. Frostiq
                                supports dynamic configurations to suit individual and enterprise needs.
                            </p>
                        </div>
                        <div className="text-center">
                            <h2 className="text-xl font-semibold text-gray-800">Real-Time Updates</h2>
                            <p className="text-gray-600 mt-2">
                                Experience real-time synchronization and seamless updates powered by advanced
                                APIs and robust backend frameworks.
                            </p>
                        </div>
                        <div className="text-center">
                            <h2 className="text-xl font-semibold text-gray-800">Scalability</h2>
                            <p className="text-gray-600 mt-2">
                                Built to grow with your needs, Frostiq handles increased demand with ease, making it
                                the perfect choice for businesses of all sizes.
                            </p>
                        </div>
                    </div>
                    <div className="px-6 py-8">
                        <h2 className="text-2xl font-bold text-gray-800 text-center mb-6">Why Choose Frostiq?</h2>
                        <p className="text-gray-600 leading-relaxed">
                            With expertise in full-stack development, real-time data integration, and modern design
                            principles, Frostiq delivers unparalleled performance and user experience. It integrates
                            seamlessly with a wide array of tools, ensuring your workflows remain efficient and impactful.
                            Our commitment to excellence ensures that Frostiq evolves to meet your growing needs, backed
                            by a team dedicated to innovation and user success.
                        </p>
                    </div>
                    <div className="text-center py-6 bg-gray-200">
                        <p className="text-gray-700 text-sm">
                            &copy; {new Date().getFullYear()} Frostiq. All rights reserved. Designed and developed with
                            expertise in scalability and customization.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutPage;
