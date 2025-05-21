import React from 'react';
import Hero from '../../assets/images/hero.png';

export default function HeroSection() {
    return (
        <section className="relative h-96 md:h-[500px] w-full overflow-hidden font-montserrat px-10">
            {/* Background Image */}
            <div
                className="absolute inset-0 bg-cover bg-center z-0"
                style={{
                    backgroundImage: `url(${Hero})`,
                    filter: 'brightness(0.85)'
                }}
            />

            {/* Gradient Overlay */}
            <div
                className="absolute inset-0 bg-gradient-to-r from-teal-900/70 to-transparent z-10"
            />

            {/* Content */}
            <div className="relative z-20 container mx-auto px-6 h-full flex flex-col justify-center">
                <div className="max-w-lg">
                    <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-3">
                        John Deere Tractors
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
        </section>
    );
}