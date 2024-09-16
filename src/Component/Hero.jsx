import React from 'react';

function Hero() {
    return (
        <div className="flex flex-col md:flex-row items-center lg:h-auto sm:h-96">
            <div className="w-full md:w-1/2 relative bg-gradient-to-r p-14 from-blue-500 to-indigo-600 flex items-center justify-center text-center md:text-left">
                <div
                    className="absolute inset-0 bg-cover bg-center opacity-50"
                    style={{ backgroundImage: 'url("https://source.unsplash.com/random")' }}
                ></div>

                <div className="relative z-10 text-white px-6 md:px-16 py-8 md:py-16 p-12">
                    <h1 className="text-4xl sm:text-4xl font-bold leading-tight">Welcome to Our Platform</h1>
                    <p className="mt-4 text-lg sm:text-xl">Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis a voluptatibus aperiam saepe dolorem veniam aspernatur ullam in similique deserunt magnam fuga beatae.</p>

                    {/* Call to Action Button */}
                    <div className="mt-8">
                        <a
                            href="#"
                            className="px-8 py-3 bg-white text-indigo-600 font-semibold rounded-lg shadow-md hover:bg-gray-100 transition duration-300"
                        >
                            Get Started
                        </a>
                    </div>
                </div>
            </div>

            {/* Image Column (50% width on md and up) */}
            <div className="w-full md:w-1/2 flex justify-center items-center">
                <div className="relative w-full h-full flex items-center justify-center">
                    <img
                        src="https://buffer.com/library/content/images/size/w1200/2023/10/free-images.jpg"
                        alt="Hero Image"
                        className="object-cover w-full h-full"
                        style={{ maxHeight: '436px' }} // Ensure the height matches the design
                    />
                </div>
            </div>
        </div>
    );
}

export default Hero;
