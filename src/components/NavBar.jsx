import React, { useState, useEffect } from 'react';
import { Search, Menu, X, ChevronDown, Home, MapPin, Phone, IndianRupee, MessageCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import Logo from '../assets/images/logo.jpg';
import DSeries from '../assets/images/d_series.png';
import ESeries from '../assets/images/e_series.png';
import MSeries from '../assets/images/5m_series.png';
import SpecialtySeries from '../assets/images/special_series.png';

export default function NavBar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [activeDropdown, setActiveDropdown] = useState(null);
    const [selectedSeries, setSelectedSeries] = useState('d-series');

    const tractorData = {
        series: {
            'd-series': {
                name: 'D Series',
                models: [
                    { id: 'd-3036e', name: 'John Deere 3036E', hp: '36 HP', image: DSeries },
                    { id: 'd-3042d', name: 'John Deere 3042D', hp: '42 HP', image: DSeries },
                    { id: 'd-3046r', name: 'John Deere 3046R', hp: '46 HP', image: DSeries },
                    { id: 'd-5050d', name: 'John Deere 5050D', hp: '50 HP', image: DSeries },
                    { id: 'd-3036e', name: 'John Deere 3036E', hp: '36 HP', image: DSeries },
                    { id: 'd-3042d', name: 'John Deere 3042D', hp: '42 HP', image: DSeries },
                    { id: 'd-3046r', name: 'John Deere 3046R', hp: '46 HP', image: DSeries },
                    { id: 'd-5050d', name: 'John Deere 5050D', hp: '50 HP', image: DSeries }
                ]
            },
            'e-series': {
                name: 'E Series',
                models: [
                    { id: 'e-5055e', name: 'John Deere 5055E', hp: '55 HP', image: ESeries },
                    { id: 'e-5065e', name: 'John Deere 5065E', hp: '65 HP', image: ESeries },
                    { id: 'e-5075e', name: 'John Deere 5075E', hp: '75 HP', image: ESeries },
                    { id: 'e-5310', name: 'John Deere 5310', hp: '75 HP', image: ESeries }
                ]
            },
            '5m-series': {
                name: '5M Series',
                models: [
                    { id: '5m-5075m', name: 'John Deere 5075M', hp: '75 HP', image: MSeries },
                    { id: '5m-5090m', name: 'John Deere 5090M', hp: '90 HP', image: MSeries },
                    { id: '5m-5105m', name: 'John Deere 5105M', hp: '105 HP', image: MSeries },
                    { id: '5m-5120m', name: 'John Deere 5120M', hp: '120 HP', image: MSeries }
                ]
            },
            'specialty-series': {
                name: 'Specialty Series',
                models: [
                    { id: 'sp-3028en', name: 'John Deere 3028EN', hp: '28 HP', image: SpecialtySeries },
                    { id: 'sp-3033r', name: 'John Deere 3033R', hp: '33 HP', image: SpecialtySeries },
                    { id: 'sp-3038r', name: 'John Deere 3038R', hp: '38 HP', image: SpecialtySeries },
                    { id: 'sp-4049r', name: 'John Deere 4049R', hp: '49 HP', image: SpecialtySeries }
                ]
            }
        }
    };

    const implementsDropdownItems = [
        { name: 'Plows', href: '/products' },
        { name: 'Cultivators', href: '/products' },
        { name: 'Harvesters', href: '/products' },
        { name: 'Seeders', href: '/products' },
    ];

    const handleDropdownToggle = (dropdown) => {
        setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
    };

    const handleSeriesClick = (seriesId) => {
        setSelectedSeries(seriesId);
    };

    // Block scrolling when dropdown is open
    useEffect(() => {
        if (activeDropdown === 'tractors') {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }

        // Cleanup function to reset scroll on unmount
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [activeDropdown]);

    return (
        <>
            <nav className="bg-white shadow-md py-3 px-4 font-sans relative z-50">
                <div className="container mx-auto">
                    <div className="flex justify-between items-center">
                        {/* Left Section - Logo and Navigation */}
                        <div className="flex items-center space-x-8">
                            {/* Logo */}
                            <div className="flex-shrink-0">
                                <Link to="/" className="flex items-center">
                                    <img src={Logo} alt="John Deere" className="h-10" />
                                </Link>
                            </div>

                            {/* Desktop Navigation with Dropdowns */}
                            <div className="hidden lg:flex items-center space-x-6">
                                {/* Tractors Dropdown */}
                                <div className="relative">
                                    <button
                                        className="flex items-center font-medium text-gray-800 hover:text-green-700 py-2 focus:outline-none"
                                        onClick={() => handleDropdownToggle('tractors')}
                                    >
                                        TRACTORS
                                        <ChevronDown size={16} className="ml-1" />
                                    </button>
                                </div>

                                {/* Implements Dropdown */}
                                <div className="relative">
                                    <button
                                        className="flex items-center font-medium text-gray-800 hover:text-green-700 py-2 focus:outline-none"
                                        onClick={() => handleDropdownToggle('implements')}
                                    >
                                        IMPLEMENTS
                                        <ChevronDown size={16} className="ml-1" />
                                    </button>

                                    {activeDropdown === 'implements' && (
                                        <div className="absolute top-full left-0 mt-2 w-48 bg-white border border-gray-200 rounded-md shadow-lg z-50">
                                            {implementsDropdownItems.map((item, index) => (
                                                <Link
                                                    key={index}
                                                    to={item.href}
                                                    className="block px-4 py-3 text-sm text-gray-700 hover:bg-gray-50 hover:text-green-700"
                                                >
                                                    {item.name}
                                                </Link>
                                            ))}
                                        </div>
                                    )}
                                </div>

                                <Link to="/aboutus" className="font-medium text-gray-800 hover:text-green-700 py-2">
                                    About Us
                                </Link>

                                <Link to="/contact" className="font-medium text-gray-800 hover:text-green-700 py-2">
                                    Contact Us
                                </Link>
                            </div>

                            {/* Mobile Company Name */}
                            <div className="flex mx-[-1.5rem] lg:hidden items-center">
                                <span className="text-sm font-medium text-gray-800">
                                    Sri Laxmi Tractors Tech
                                </span>
                            </div>
                        </div>

                        {/* Right Section - Desktop */}
                        <div className="hidden lg:flex items-center space-x-6">
                            <Link to="/" className="flex items-center text-sm text-gray-600 hover:text-green-700">
                                <Home size={16} className="mr-1" />
                                Home
                            </Link>
                            <Link to="/dealer-locator" className="flex items-center text-sm text-gray-600 hover:text-green-700">
                                <MapPin size={16} className="mr-1" />
                                Dealers
                            </Link>
                            <a href="tel:+919901045699" className="flex items-center text-sm text-gray-600 hover:text-green-700">
                                <Phone size={16} className="mr-1" />
                                Call Us
                            </a>
                            <Link to="/products" className="flex items-center text-sm text-gray-600 hover:text-green-700">
                                <IndianRupee size={16} className="mr-1" />
                                Get Price
                            </Link>
                            <Link to="https://wa.me/+919901045699" className="flex items-center text-sm text-gray-600 hover:text-green-700">
                                <MessageCircle size={16} className="mr-1" />
                                Let's Chat
                            </Link>
                            <button className="p-2 rounded-full hover:bg-gray-100">
                                <Search size={18} className="text-gray-600" />
                            </button>
                        </div>

                        {/* Mobile menu button */}
                        <div className="flex items-center lg:hidden">
                            <button className="p-2 rounded-full hover:bg-gray-100 mr-2">
                                <Search size={18} className="text-gray-600" />
                            </button>
                            <button
                                className="p-2 rounded-md focus:outline-none"
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

                    {/* Mobile Navigation Menu */}
                    {isMenuOpen && (
                        <div className="lg:hidden mt-4">
                            <div className="flex flex-col space-y-2 pb-3 pt-2 border-b border-gray-200">
                                {/* Tractors Button in Mobile Menu */}
                                <button
                                    className="flex items-center justify-between px-3 py-2 text-base font-medium text-gray-800 hover:bg-gray-100 focus:outline-none"
                                    onClick={() => {
                                        handleDropdownToggle('tractors');
                                        setIsMenuOpen(false);
                                    }}
                                >
                                    TRACTORS
                                    <ChevronDown size={16} className="ml-1" />
                                </button>
                                <button
                                    className="flex items-center justify-between px-3 py-2 text-base font-medium text-gray-800 hover:bg-gray-100 focus:outline-none"
                                    onClick={() => {
                                        handleDropdownToggle('implements');
                                        setIsMenuOpen(false);
                                    }}
                                >
                                    IMPLEMENTS
                                    <ChevronDown size={16} className="ml-1" />
                                </button>

                                <Link to="/aboutus" className="px-3 py-2 text-base font-medium text-gray-800 hover:bg-gray-100 block">
                                    About Us
                                </Link>
                                <Link to="/contact" className="px-3 py-2 text-base font-medium text-gray-800 hover:bg-gray-100 block">
                                    Contact Us
                                </Link>
                            </div>
                        </div>
                    )}
                </div>
            </nav>

            {/* Desktop Dropdown - Below navbar */}
            {activeDropdown === 'tractors' && (
                <div className="hidden lg:block fixed left-0 right-0 bg-white z-100 shadow-lg border-t border-gray-200">
                    <div className="flex">
                        {/* Left Sidebar - Series Navigation */}
                        <div className="w-80 bg-gray-50 p-6 border-r border-gray-200 min-h-96">
                            <div className="flex items-center justify-between mb-6">
                                <h3 className="font-bold text-gray-800 text-lg">
                                    TRACTOR SERIES
                                </h3>
                                <button
                                    onClick={() => setActiveDropdown(null)}
                                    className="p-1 hover:bg-gray-200 rounded-full"
                                >
                                    <X size={20} className="text-gray-600" />
                                </button>
                            </div>
                            <div className="space-y-3">
                                {Object.entries(tractorData.series).map(([seriesId, series]) => (
                                    <button
                                        key={seriesId}
                                        onClick={() => handleSeriesClick(seriesId)}
                                        className={`w-full text-left p-4 rounded-lg border transition-all duration-200 ${selectedSeries === seriesId
                                            ? 'bg-green-50 border-green-300 text-green-700'
                                            : 'bg-white border-gray-200 text-gray-700 hover:bg-gray-50'
                                            }`}
                                    >
                                        <div className="flex items-center justify-between">
                                            <div>
                                                <span className="font-semibold text-base">{series.name}</span>
                                                <p className="text-sm text-gray-500 mt-1">
                                                    {series.models.length} Models Available
                                                </p>
                                            </div>
                                            <ChevronDown size={16} className="text-green-600 rotate-[-90deg]" />
                                        </div>
                                    </button>
                                ))}
                            </div>

                            {/* View All Series Button */}
                            <div className="mt-8">
                                <Link
                                    to="/products"
                                    onClick={() => setActiveDropdown(null)}
                                    className="w-full bg-green-600 hover:bg-green-700 text-white font-medium py-3 px-4 rounded-lg transition duration-200 text-center block"
                                >
                                    View All Series
                                </Link>
                            </div>
                        </div>

                        {/* Right Content - Products Grid */}
                        <div className="flex-1 p-10 max-h-130 overflow-y-auto">
                            <div className="mb-6">
                                <h3 className="text-xl font-semibold text-gray-900">
                                    {tractorData.series[selectedSeries].name}
                                </h3>
                                <p className="text-gray-600 mt-1">
                                    Choose from our {tractorData.series[selectedSeries].models.length} available models
                                </p>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                                {tractorData.series[selectedSeries].models.map((model, index) => (
                                    <Link
                                        key={index}
                                        to={`/tractor-model/${model.id}`}
                                        onClick={() => setActiveDropdown(null)}
                                        className="group block border-2 border-gray-200 rounded-xl p-4 hover:border-green-300 hover:shadow-lg transition-all duration-300"
                                    >
                                        <div className="aspect-square overflow-hidden rounded-lg bg-white mb-4 border border-gray-100">
                                            <img
                                                src={model.image}
                                                alt={model.name}
                                                className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
                                            />
                                        </div>
                                        <div className="text-center">
                                            <h4 className="font-semibold text-gray-900 mb-1">{model.name}</h4>
                                            <p className="text-sm text-green-600 font-medium">{model.hp}</p>
                                            <div className="mt-3">
                                                <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full">
                                                    View Details
                                                </span>
                                            </div>
                                        </div>
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {/* Mobile Dropdown - Full screen */}
            {activeDropdown === 'tractors' && (
                <div className="lg:hidden fixed inset-0 bg-white z-50 overflow-y-auto">
                    {/* Mobile Header */}
                    <div className="bg-white border-b border-gray-200 px-4 py-4">
                        <div className="flex items-center justify-between">
                            <h2 className="text-xl font-bold text-gray-900">Explore Our Tractors</h2>
                            <button
                                onClick={() => setActiveDropdown(null)}
                                className="p-2 hover:bg-gray-100 rounded-full"
                            >
                                <X size={24} className="text-gray-600" />
                            </button>
                        </div>
                    </div>

                    {/* Mobile Series Navigation */}
                    <div className="p-4">
                        <h3 className="font-bold text-gray-800 mb-4 text-lg">
                            TRACTOR SERIES
                        </h3>
                        <div className="space-y-3 mb-6">
                            {Object.entries(tractorData.series).map(([seriesId, series]) => (
                                <button
                                    key={seriesId}
                                    onClick={() => handleSeriesClick(seriesId)}
                                    className={`w-full text-left p-4 rounded-lg border transition-all duration-200 ${selectedSeries === seriesId
                                        ? 'bg-green-50 border-green-300 text-green-700'
                                        : 'bg-white border-gray-200 text-gray-700 hover:bg-gray-50'
                                        }`}
                                >
                                    <div className="flex items-center justify-between">
                                        <div>
                                            <span className="font-semibold text-base">{series.name}</span>
                                            <p className="text-sm text-gray-500 mt-1">
                                                {series.models.length} Models Available
                                            </p>
                                        </div>
                                        <ChevronDown size={16} className="text-green-600 rotate-[-90deg]" />
                                    </div>
                                </button>
                            ))}
                        </div>

                        {/* Mobile Products Grid */}
                        <div className="mb-6">
                            <h3 className="text-lg font-semibold text-gray-900 mb-2">
                                {tractorData.series[selectedSeries].name}
                            </h3>
                            <p className="text-gray-600 mb-4">
                                Choose from our {tractorData.series[selectedSeries].models.length} available models
                            </p>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                            {tractorData.series[selectedSeries].models.map((model, index) => (
                                <Link
                                    key={index}
                                    to={`/tractor-model/${model.id}`}
                                    onClick={() => setActiveDropdown(null)}
                                    className="group block border-2 border-gray-200 rounded-xl p-4 hover:border-green-300 hover:shadow-lg transition-all duration-300"
                                >
                                    <div className="aspect-square overflow-hidden rounded-lg bg-white mb-4 border border-gray-100">
                                        <img
                                            src={model.image}
                                            alt={model.name}
                                            className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
                                        />
                                    </div>
                                    <div className="text-center">
                                        <h4 className="font-semibold text-gray-900 mb-1">{model.name}</h4>
                                        <p className="text-sm text-green-600 font-medium">{model.hp}</p>
                                        <div className="mt-3">
                                            <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full">
                                                View Details
                                            </span>
                                        </div>
                                    </div>
                                </Link>
                            ))}
                        </div>

                        {/* View All Series Button */}
                        <Link
                            to="/products"
                            onClick={() => setActiveDropdown(null)}
                            className="w-full bg-green-600 hover:bg-green-700 text-white font-medium py-3 px-4 rounded-lg transition duration-200 text-center block"
                        >
                            View All Series
                        </Link>
                    </div>
                </div>
            )}

            {/* Mobile Implements Dropdown - Full screen */}
            {activeDropdown === 'implements' && (
                <div className="lg:hidden fixed inset-0 bg-white z-50 overflow-y-auto">
                    {/* Mobile Header */}
                    <div className="bg-white border-b border-gray-200 px-4 py-4">
                        <div className="flex items-center justify-between">
                            <h2 className="text-xl font-bold text-gray-900">Explore Our Implements</h2>
                            <button
                                onClick={() => setActiveDropdown(null)}
                                className="p-2 hover:bg-gray-100 rounded-full"
                            >
                                <X size={24} className="text-gray-600" />
                            </button>
                        </div>
                    </div>

                    {/* Mobile Implements List */}
                    <div className="p-4">
                        <h3 className="font-bold text-gray-800 mb-4 text-lg">
                            IMPLEMENTS CATEGORIES
                        </h3>
                        <div className="space-y-3">
                            {implementsDropdownItems.map((item, index) => (
                                <Link
                                    key={index}
                                    to={item.href}
                                    onClick={() => setActiveDropdown(null)}
                                    className="block p-4 border border-gray-200 rounded-lg text-gray-700 hover:bg-gray-50 hover:text-green-700 hover:border-green-300 transition-all duration-200"
                                >
                                    <span className="font-semibold text-base">{item.name}</span>
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
            )}

            {/* Overlay for closing dropdowns on desktop */}
            {activeDropdown && (
                <div
                    className="fixed inset-0 z-30 lg:top-16"
                    onClick={() => setActiveDropdown(null)}
                    style={{ backgroundColor: 'rgba(0,0,0,0.1)' }}
                ></div>
            )}

            {/* Mobile Bottom Navigation Bar */}
            <div className="lg:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 z-40 mb-3 mx-3 rounded-lg shadow-md">
                <div className="grid grid-cols-5 py-2">
                    <Link to="/" className="flex flex-col items-center py-2 px-1">
                        <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center mb-1 shadow-sm">
                            <Home size={16} className="text-white" />
                        </div>
                        <span className="text-xs text-gray-600">Home</span>
                    </Link>

                    <Link to="/dealer-locator" className="flex flex-col items-center py-2 px-1">
                        <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center mb-1 shadow-sm">
                            <MapPin size={16} className="text-white" />
                        </div>
                        <span className="text-xs text-gray-600">Dealers</span>
                    </Link>

                    <a href="tel:+919901045699" className="flex flex-col items-center py-2 px-1">
                        <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center mb-1 shadow-sm">
                            <Phone size={16} className="text-white" />
                        </div>
                        <span className="text-xs text-gray-600">Call Us</span>
                    </a>

                    <Link to="/products" className="flex flex-col items-center py-2 px-1">
                        <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center mb-1 shadow-sm">
                            <IndianRupee size={16} className="text-white" />
                        </div>
                        <span className="text-xs text-gray-600">Get Price</span>
                    </Link>

                    <Link to="https://wa.me/+919901045699" className="flex flex-col items-center py-2 px-1">
                        <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center mb-1 shadow-sm">
                            <MessageCircle size={16} className="text-white" />
                        </div>
                        <span className="text-xs text-gray-600">Let's Chat</span>
                    </Link>
                </div>
            </div>
        </>
    );
}