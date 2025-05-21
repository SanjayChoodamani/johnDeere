import React from 'react';
import Equip from '../../assets/images/equip.png';

const AboutHero = () => {
    return (
        <div className="bg-gradient-to-r from-white to-gray-100 py-16 px-10">
            <div className="container mx-auto px-4 md:px-6 flex flex-col md:flex-row items-center">
                <div className="md:w-1/2 mb-8 md:mb-0 pr-0 md:pr-12">
                    <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                        Trusted Support for<br />
                        Long-Lasting<br />
                        Performance
                    </h1>
                    <p className="text-gray-600 mb-6">
                        We stand firmly behind every tractor we build. Our service network
                        and support systems are designed to keep your equipment running
                        efficiently year after year.
                    </p>
                </div>
                <div className="md:w-1/2">
                    <div className="relative">
                        <img
                            src={Equip}
                            alt="Farm equipment in field"
                            className="rounded-lg w-full shadow-lg object-cover"
                        />
                        <div className="absolute inset-0 bg-amber-500 opacity-20 rounded-lg"></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutHero;