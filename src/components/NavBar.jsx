import React, { useState } from 'react';
import { Search, Menu, X } from 'lucide-react';
import Logo from '../assets/images/logo.png';

export default function NavBar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <nav className="bg-white shadow-md py-4 px-4 font-montserrat">
            <div className="container mx-auto">
                <div className="flex justify-between items-center">
                    {/* Logo */}
                    <div className="flex-shrink-0">
                        <a href="/" className="flex items-center">
                            <img src={Logo} alt="John Deere" className="h-12" />
                        </a>
                    </div>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center space-x-8">
                        <a href="/" className="font-medium text-gray-800 hover:text-green-700 py-2">
                            Home
                        </a>

                        <a href="/products" className="font-medium text-gray-800 hover:text-green-700 py-2">
                            Products
                        </a>

                        <a href="/aboutus" className="font-medium text-gray-800 hover:text-green-700 py-2">
                            About Us
                        </a>

                        <a href="/contact" className="font-medium text-gray-800 hover:text-green-700 py-2">
                            Contact Us
                        </a>
                    </div>

                    {/* Search icon */}
                    <div className="flex items-center">
                        <button className="p-2 rounded-full hover:bg-gray-100">
                            <Search size={20} className="text-gray-600" />
                        </button>

                        {/* Mobile menu button */}
                        <button
                            className="ml-2 p-2 rounded-md md:hidden focus:outline-none"
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                        >
                            {isMenuOpen ? (
                                <X size={24} className="text-gray-600" />
                            ) : (
                                <Menu size={24} className="text-gray-600" />
                            )}
                        </button>
                    </div>
                </div>

                {/* Mobile Navigation */}
                {isMenuOpen && (
                    <div className="md:hidden mt-4">
                        <div className="flex flex-col space-y-2 pb-3 pt-2">
                            <a href="/" className="px-3 py-2 rounded-md text-base font-medium text-gray-800 hover:bg-gray-100 block">
                                Home
                            </a>

                            <a href="/products" className="px-3 py-2 rounded-md text-base font-medium text-gray-800 hover:bg-gray-100 block">
                                Products
                            </a>

                            <a href="/aboutus" className="px-3 py-2 rounded-md text-base font-medium text-gray-800 hover:bg-gray-100 block">
                                About Us
                            </a>

                            <a href="/contact" className="px-3 py-2 rounded-md text-base font-medium text-gray-800 hover:bg-gray-100 block">
                                Contact us
                            </a>
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
}