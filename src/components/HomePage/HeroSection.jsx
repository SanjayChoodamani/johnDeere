import React, { useState, useEffect } from 'react';
import Hero1 from '../../assets/images/hero.png';
import Hero2 from '../../assets/images/hero1.png';
import Hero3 from '../../assets/images/hero2.png';
import Hero4 from '../../assets/images/hero3.jpg';
import Hero5 from '../../assets/images/hero4.jpg';

export default function HeroSection() {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const heroImages = [Hero2, Hero4, Hero5];
    
    useEffect(() => {
        // Set up an interval to change the image every 5 seconds
        const interval = setInterval(() => {
            setCurrentImageIndex((prevIndex) => (prevIndex + 1) % heroImages.length);
        }, 5000);
        
        // Clean up the interval on component unmount
        return () => clearInterval(interval);
    }, [heroImages.length]);
    
    return (
        <section className="relative h-96 md:h-[500px] w-full overflow-hidden font-montserrat px-10">
            {/* Background Images with Fade Animation */}
            {heroImages.map((image, index) => (
                <div
                    key={index}
                    className={`absolute inset-0 bg-cover bg-center z-0 transition-opacity duration-1000 ease-in-out ${
                        index === currentImageIndex ? 'opacity-100' : 'opacity-0'
                    }`}
                    style={{
                        backgroundImage: `url(${image})`,
                        filter: 'brightness(0.85)'
                    }}
                />
            ))}

            {/* Gradient Overlay */}
            <div
                className="absolute inset-0 bg-gradient-to-r from-teal-900/70 to-transparent z-10"
            />

            {/* Content */}
            <div className="relative z-20 container mx-auto px-6 h-full flex flex-col justify-center">
                <div className="max-w-lg">
                    <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-3">
                        Sri Lakshmi Tractors Tech
                    </h1>
                    <p className="text-lg md:text-xl text-white mb-6">
                        Power Meets Innovation
                    </p>
                    <a
                        href="/products"
                        className="inline-block bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-md transition duration-300 ease-in-out"
                    >
                        Explore Our Range
                    </a>
                </div>
            </div>
            
            {/* Image Navigation Indicators */}
            <div className="absolute bottom-6 left-6 md:left-12 lg:left-20 flex space-x-2 z-20">
                {heroImages.map((_, index) => (
                    <button
                        key={index}
                        className={`w-2 h-2 rounded-full transition-all duration-300 ${
                            index === currentImageIndex ? 'bg-white w-6' : 'bg-white/50'
                        }`}
                        onClick={() => setCurrentImageIndex(index)}
                        aria-label={`Go to slide ${index + 1}`}
                    />
                ))}
            </div>
        </section>
    );
}