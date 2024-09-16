import React from 'react';
import { FaTwitter, FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';

function ProfileCard() {
    return (
        <div className="w-full p-10 md:p-20 flex flex-col items-center mx-auto bg-gray-100 rounded-lg shadow-lg">
            <div className="w-full p-10 flex flex-col items-center mx-auto bg-white rounded-lg shadow-lg">
                <div className="flex-shrink-0">
                    <img
                        src="https://via.placeholder.com/150"
                        alt="Profile"
                        className="w-32 h-32 rounded-full object-cover"
                    />
                </div>

                <div className="mt-4 text-center ">
                    <h2 className="text-2xl font-bold">John Doe</h2>
                    <p className="mt-2 text-gray-600">Web Developer & Designer</p>
                </div>

                <div className="mt-4 text-center ">
                    <p className="text-gray-600">
                        Passionate web developer with a knack for creating visually appealing and user-friendly websites.
                    </p>
                    <p className="text-gray-600">
                        Always eager to learn and explore new technologies.
                    </p>
                </div>

                <div className="mt-6 flex space-x-4">
                    <a href="#" className="text-blue-500 hover:text-blue-700 transition duration-300">
                        <FaTwitter size={24} />
                    </a>
                    <a href="#" className="text-blue-800 hover:text-blue-900 transition duration-300">
                        <FaFacebook size={24} />
                    </a>
                    <a href="#" className="text-pink-500 hover:text-pink-600 transition duration-300">
                        <FaInstagram size={24} />
                    </a>
                    <a href="#" className="text-blue-600 hover:text-blue-700 transition duration-300">
                        <FaLinkedin size={24} />
                    </a>
                </div>
            </div>
        </div>
    );
}

export default ProfileCard;
