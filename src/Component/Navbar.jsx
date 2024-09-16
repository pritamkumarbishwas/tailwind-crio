import React, { useState } from 'react';

function Navbar() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <>
            <nav className="bg-white-800">
                <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                    <div className="relative flex h-16 items-center justify-between">
                        <div className="flex flex-1 items-center justify-start">
                            <div className="flex flex-shrink-0 items-center">
                                <h1 className="text-3xl text-blue-700 font-bold">Logo</h1>
                            </div>
                        </div>
                        <div className="hidden sm:ml-6 sm:block">
                            <div className="flex space-x-4 justify-end">
                                <a href="#" className="rounded-md px-3 py-2 text-sm font-medium text-gray-800  hover:text-gray-700">Home</a>
                                <a href="#" className="rounded-md px-3 py-2 text-sm font-medium  text-gray-800  hover:text-gray-700">About</a>
                                <a href="#" className="rounded-md px-3 py-2 text-sm font-medium  text-gray-800  hover:text-gray-700">Contact Us</a>
                            </div>
                        </div>
                        {/* Mobile menu button */}
                        <div className="absolute inset-y-0 right-0 flex items-center sm:hidden">
                            <button
                                type="button"
                                className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400  focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                                aria-controls="mobile-menu"
                                aria-expanded={isMobileMenuOpen}
                                onClick={toggleMobileMenu}
                            >
                                <span className="sr-only">Open main menu</span>
                                {/* Icon for menu open/close */}
                                {isMobileMenuOpen ? (
                                    <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                ) : (
                                    <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                                    </svg>
                                )}
                            </button>
                        </div>
                    </div>
                </div>

                {/* Mobile menu */}
                {isMobileMenuOpen && (
                    <div className="sm:hidden" id="mobile-menu">
                        <div className="space-y-1 px-2 pb-3 pt-2">
                            <a href="#" className="block rounded-md  px-3 py-2 text-base font-medium text-gray-800  hover:text-gray-700">Home</a>
                            <a href="#" className="block rounded-md px-3 py-2 text-base font-medium text-gray-800  hover:text-gray-700">About</a>
                            <a href="#" className="block rounded-md px-3 py-2 text-base font-medium text-gray-800  hover:text-gray-700">Contact Us</a>
                        </div>
                    </div>
                )}
            </nav>
        </>
    );
}

export default Navbar;
