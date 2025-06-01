import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

// Import your tractor images for carousel
import DSeries from '../../assets/images/d_series.jpg';
import ESeries from '../../assets/images/e_series.jpg';
import MSeries from '../../assets/images/5m_series.jpg';
import SpecialtySeries from '../../assets/images/special_series.jpg';

// Import images for the second section
import Tractor1 from '../../assets/images/tractor1.png';
import Tractor2 from '../../assets/images/tractor2.png';

export default function AllProducts() {
    const [currentIndex, setCurrentIndex] = useState(0);

    // Carousel products data
    const carouselProducts = [
        {
            id: 1,
            name: "D Series",
            hp: "36 HP - 50 HP",
            image: DSeries,
            description: "Compact utility tractor perfect for small farms",
            categoryLink: "/tractor-category/d-series"
        },
        {
            id: 2,
            name: "E Series",
            hp: "45 HP - 65 HP",
            image: ESeries,
            description: "Mid-range tractor for versatile farming operations",
            categoryLink: "/tractor-category/e-series"
        },
        {
            id: 3,
            name: "5M Series",
            hp: "75 HP - 120 HP",
            image: MSeries,
            description: "Heavy-duty tractor for large-scale farming",
            categoryLink: "/tractor-category/5m-series"
        },
        {
            id: 4,
            name: "Specialty Series",
            hp: "50 HP - 85 HP",
            image: SpecialtySeries,
            description: "Specialized tractors for unique applications",
            categoryLink: "/tractor-category/specialty-series"
        }
    ];

    // Second section - Specific tractor models
    const tractorModels = [
        {
            id: 1,
            name: '5M Series Tractors',
            power: 'Up to 120 HP',
            description: 'Utility tractor with advanced technology',
            image: Tractor1,
            link: '/products'
        },
        {
            id: 2,
            name: 'Specialty Tractors',
            power: '75 to 115 HP',
            description: 'Perfect for vineyard and orchard farming',
            image: Tractor2,
            link: '/products'
        },
        {
            id: 3,
            name: '5M Series Tractors',
            power: 'Up to 120 HP',
            description: 'Utility tractor with advanced technology',
            image: Tractor1,
            link: '/products'
        },
        {
            id: 4,
            name: 'Specialty Tractors',
            power: '75 to 115 HP',
            description: 'Perfect for vineyard and orchard farming',
            image: Tractor2,
            link: '/products'
        }
    ];

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => 
            prevIndex === carouselProducts.length - 1 ? 0 : prevIndex + 1
        );
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => 
            prevIndex === 0 ? carouselProducts.length - 1 : prevIndex - 1
        );
    };

    const getSlideClass = (index) => {
        const diff = index - currentIndex;
        
        if (diff === 0) {
            return 'translate-x-0 scale-110 z-20 opacity-100';
        } else if (diff === 1 || (diff === -(carouselProducts.length - 1))) {
            return 'translate-x-40 md:translate-x-64 scale-75 z-10 opacity-50';
        } else if (diff === -1 || (diff === carouselProducts.length - 1)) {
            return '-translate-x-40 md:-translate-x-64 scale-75 z-10 opacity-50';
        } else {
            return 'translate-x-96 scale-50 z-0 opacity-20';
        }
    };

    return (
        <div className="font-montserrat">
            {/* First section - Image-only Carousel */}
            <div className="py-16 px-4 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
                <div className="max-w-7xl mx-auto">
                    {/* Header */}
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                            Next Generation of Farming!
                        </h2>
                        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                            Discover our complete range of advanced tractors designed for modern agriculture
                        </p>
                    </div>

                    {/* Desktop Carousel */}
                    <div className="hidden md:block relative">
                        <div className="relative h-96 flex items-center justify-center">
                            {/* Navigation Buttons */}
                            <button
                                onClick={prevSlide}
                                className="absolute left-4 z-30 bg-green-600 hover:bg-green-700 text-white p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110"
                            >
                                <ChevronLeft size={24} />
                            </button>
                            
                            <button
                                onClick={nextSlide}
                                className="absolute right-4 z-30 bg-green-600 hover:bg-green-700 text-white p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110"
                            >
                                <ChevronRight size={24} />
                            </button>

                            {/* Carousel Items - Images Only */}
                            <div className="relative w-full h-full flex items-center justify-center">
                                {carouselProducts.map((product, index) => (
                                    <div
                                        key={product.id}
                                        className={`absolute transition-all duration-700 ease-in-out transform ${getSlideClass(index)}`}
                                    >
                                        <div className="w-72 h-72 flex items-center justify-center">
                                            <img
                                                src={product.image}
                                                alt={product.name}
                                                className="w-full h-full object-contain transform hover:scale-105 transition-transform duration-300"
                                            />
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Product Info Below Image */}
                        <div className="text-center mt-[1rem]">
                            <h3 className="text-2xl font-bold text-gray-900 mb-2">
                                {carouselProducts[currentIndex].name}
                            </h3>
                            <p className="text-green-600 font-semibold text-xl mb-3">
                                {carouselProducts[currentIndex].hp}
                            </p>
                            <p className="text-gray-600 text-lg mb-6 max-w-md mx-auto">
                                {carouselProducts[currentIndex].description}
                            </p>
                            <Link
                                to={carouselProducts[currentIndex].categoryLink}
                                className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-lg font-medium text-lg transition-colors duration-200 shadow-lg hover:shadow-xl inline-block"
                            >
                                Know more
                            </Link>
                        </div>

                        {/* Dots Indicator */}
                        <div className="flex justify-center mt-8 space-x-2">
                            {carouselProducts.map((_, index) => (
                                <button
                                    key={index}
                                    onClick={() => setCurrentIndex(index)}
                                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                                        index === currentIndex 
                                            ? 'bg-green-600 scale-125' 
                                            : 'bg-gray-300 hover:bg-gray-400'
                                    }`}
                                />
                            ))}
                        </div>
                    </div>

                    {/* Mobile Carousel */}
                    <div className="md:hidden">
                        <div className="relative overflow-hidden">
                            {/* Navigation Buttons */}
                            <button
                                onClick={prevSlide}
                                className="absolute left-2 top-1/2 transform -translate-y-1/2 z-30 bg-green-600 hover:bg-green-700 text-white p-2 rounded-full shadow-lg"
                            >
                                <ChevronLeft size={20} />
                            </button>
                            
                            <button
                                onClick={nextSlide}
                                className="absolute right-2 top-1/2 transform -translate-y-1/2 z-30 bg-green-600 hover:bg-green-700 text-white p-2 rounded-full shadow-lg"
                            >
                                <ChevronRight size={20} />
                            </button>

                            {/* Mobile Carousel Container */}
                            <div className="relative h-64 flex items-center justify-center px-12">
                                {carouselProducts.map((product, index) => {
                                    const isActive = index === currentIndex;
                                    const isPrev = index === (currentIndex - 1 + carouselProducts.length) % carouselProducts.length;
                                    const isNext = index === (currentIndex + 1) % carouselProducts.length;
                                    
                                    let transformClass = 'scale-40 opacity-20 translate-x-24';
                                    let zIndex = 'z-0';
                                    
                                    if (isActive) {
                                        transformClass = 'scale-100 opacity-100 translate-x-0';
                                        zIndex = 'z-20';
                                    } else if (isPrev) {
                                        transformClass = 'scale-60 opacity-40 -translate-x-20';
                                        zIndex = 'z-10';
                                    } else if (isNext) {
                                        transformClass = 'scale-60 opacity-40 translate-x-20';
                                        zIndex = 'z-10';
                                    }

                                    return (
                                        <div
                                            key={product.id}
                                            className={`absolute transition-all duration-500 ease-in-out transform ${transformClass} ${zIndex}`}
                                        >
                                            <div className="w-48 h-48 flex items-center justify-center">
                                                <img
                                                    src={product.image}
                                                    alt={product.name}
                                                    className="w-full h-full object-contain"
                                                />
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>

                            {/* Mobile Product Info */}
                            <div className="text-center mt-[0.5rem]">
                                <h3 className="text-xl font-bold text-gray-900 mb-2">
                                    {carouselProducts[currentIndex].name}
                                </h3>
                                <p className="text-green-600 font-semibold text-lg mb-2">
                                    {carouselProducts[currentIndex].hp}
                                </p>
                                <p className="text-gray-600 text-sm mb-4 px-4">
                                    {carouselProducts[currentIndex].description}
                                </p>
                                <Link
                                    to={carouselProducts[currentIndex].categoryLink}
                                    className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-lg font-medium transition-colors duration-200 inline-block"
                                >
                                    Know more
                                </Link>
                            </div>

                            {/* Mobile Dots Indicator */}
                            <div className="flex justify-center mt-6 space-x-2">
                                {carouselProducts.map((_, index) => (
                                    <button
                                        key={index}
                                        onClick={() => setCurrentIndex(index)}
                                        className={`w-2 h-2 rounded-full transition-all duration-300 ${
                                            index === currentIndex 
                                                ? 'bg-green-600 scale-125' 
                                                : 'bg-gray-300'
                                        }`}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Bottom Call to Action */}
                    {/* <div className="text-center mt-12">
                        <Link
                            to="/products"
                            className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-lg font-semibold text-lg transition-colors duration-200 shadow-lg hover:shadow-xl inline-block"
                        >
                            Explore All Products
                        </Link>
                    </div> */}
                </div>
            </div>

            {/* Second section - Specific tractor models with images */}
            <section className="py-16 px-10 bg-gray-50">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">Featured Tractor Models</h2>
                        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                            Explore our premium tractor series designed for specific farming applications
                        </p>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {tractorModels.map((model) => (
                            <div key={model.id} className="border border-blue-200 rounded-lg bg-white overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300">
                                <div className="flex flex-col md:flex-row">
                                    <div className="md:w-1/2">
                                        <img
                                            src={model.image}
                                            alt={model.name}
                                            className="w-full h-56 object-cover"
                                        />
                                    </div>
                                    <div className="md:w-1/2 p-6 flex flex-col justify-center">
                                        <h3 className="text-lg font-semibold text-gray-800 mb-2">{model.name}</h3>
                                        <p className="text-green-600 font-semibold text-sm mb-2">{model.power}</p>
                                        <p className="text-gray-600 text-sm mb-4">{model.description}</p>
                                        <Link
                                            to={model.link}
                                            className="text-green-600 hover:text-green-700 inline-flex items-center gap-1 text-sm font-medium"
                                        >
                                            Learn More
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                            </svg>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}