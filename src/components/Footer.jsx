import React from 'react';
import { MapPin, Phone, Mail, Facebook, Twitter, Youtube, Instagram } from 'lucide-react';
import Logo from '../assets/images/logo.png';

export default function Footer() {
    return (
        <footer className="bg-gray-900 text-white font-montserrat">
            {/* Main Footer Content */}
            <div className="container mx-auto px-4 py-10">
                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
                    {/* Company Logo and Info */}
                    <div className="col-span-1">
                        <div className="flex flex-col">
                            <div className="mb-6">
                                <img src={Logo} alt="John Deere" className="h-16 bg-white p-2 rounded" />
                            </div>
                            <p className="text-gray-300 text-sm mb-6">
                                Leading the way in agricultural innovation and sustainable farming solutions.
                            </p>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="col-span-1">
                        <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
                        <ul className="space-y-3">
                            <li>
                                <a href="/products" className="text-gray-300 hover:text-white text-sm transition duration-150">
                                    Products
                                </a>
                            </li>
                            <li>
                                <a href="/products" className="text-gray-300 hover:text-white text-sm transition duration-150">
                                    Services
                                </a>
                            </li>
                            <li>
                                <a href="/aboutus" className="text-gray-300 hover:text-white text-sm transition duration-150">
                                    About Us
                                </a>
                            </li>
                            <li>
                                <a href="/contact" className="text-gray-300 hover:text-white text-sm transition duration-150">
                                    Contact Us
                                </a>
                            </li>

                        </ul>
                    </div>

                    {/* Contact Information */}
                    <div className="col-span-1">
                        <h3 className="text-lg font-semibold mb-4">Contact</h3>
                        <ul className="space-y-4">
                            <li className="flex items-start">
                                <MapPin size={20} className="mr-3 text-gray-400 flex-shrink-0 mt-1" />
                                <a
                                    href="https://maps.app.goo.gl/TTRg1CkdkaKf3TuWA"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-gray-300 text-sm hover:text-white transition duration-150"
                                >
                                    Thanniruhalla, Hassan, Karnataka 573201
                                </a>
                            </li>
                            <li className="flex items-center">
                                <Phone size={20} className="mr-3 text-gray-400 flex-shrink-0" />
                                <a href="tel:08172256046" className="text-gray-300 text-sm hover:text-white">
                                    08172 256046
                                </a>
                            </li>
                            <li className="flex items-center">
                                <Mail size={20} className="mr-3 text-gray-400 flex-shrink-0" />
                                <a href="mailto:lakshmitractortech@gmail.com" className="text-gray-300 text-sm hover:text-white">
                                    lakshmitractortech@gmail.com
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Social Media Links */}
                    <div className="col-span-1">
                        <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
                        <div className="flex space-x-3">
                            <a href="https://www.facebook.com/lakshmitractortechhassan" className="bg-gray-700 p-2 rounded-full hover:bg-gray-600 transition duration-150">
                                <Facebook size={20} className="text-white" />
                            </a>
                            <a href="https://www.instagram.com/srilakshmitractortech_hassan/" className="bg-gray-700 p-2 rounded-full hover:bg-gray-600 transition duration-150">
                                <Instagram size={20} className="text-white" />
                            </a>
                            {/* <a href="#" className="bg-gray-700 p-2 rounded-full hover:bg-gray-600 transition duration-150">
                                <Youtube size={20} className="text-white" />
                            </a> */}
                        </div>
                    </div>
                </div>
            </div>

            {/* Copyright Bar */}
            <div className="border-t border-gray-800 py-6">
                <div className="container mx-auto px-4">
                    <p className="text-center text-gray-400 text-sm">
                        © 2025 Sri Lakshmi Tractors Tech | Developed by Pixelamedia
                    </p>
                </div>
            </div>
        </footer>
    );
}