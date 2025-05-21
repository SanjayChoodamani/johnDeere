import React from 'react';
import Precision from '../../assets/images/precision.png';
import Implements from '../../assets/images/implements.png';
import Tractors from '../../assets/images/tractor.png';
import Parts from '../../assets/images/parts.png';
import Tractor1 from '../../assets/images/tractor1.png';
import Tractor2 from '../../assets/images/tractor2.png';

// Icon components for the product categories
const TractorIcon = () => (
    <img src={Tractors} alt="Tractors" className="w-12 h-12 text-green-600" />
);

const ImplementsIcon = () => (
    <img src={Implements} alt="Implements" className="w-12 h-12 text-green-600" />
);

const PrecisionIcon = () => (
    <img src={Precision} alt="Precision Agriculture" className="w-12 h-12 text-green-600" />
);

const PartsIcon = () => (
    <img src={Parts} alt="Parts & Services" className="w-12 h-12 text-green-600" />
);

export default function AllProducts() {
    // First section - Icon based product categories
    const categories = [
        {
            id: 1,
            title: 'Tractors',
            description: 'Explore our range of tractors designed to deliver efficiency, power, and reliability.',
            icon: <TractorIcon />,
            link: '/products'
        },
        {
            id: 2,
            title: 'Implements',
            description: 'Enhance productivity with our range of implements designed to complement your farming operations.',
            icon: <ImplementsIcon />,
            link: '/products'
        },
        {
            id: 3,
            title: 'Precision Agriculture',
            description: 'Maximize yields with our precision agriculture solutions that combine technology and innovation.',
            icon: <PrecisionIcon />,
            link: '/products'
        },
        {
            id: 4,
            title: 'Parts & Services',
            description: 'Quality parts and expert service to keep your equipment running at peak performance.',
            icon: <PartsIcon />,
            link: '/products'
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

    return (
        <div className="font-montserrat">
            {/* First section - Icon-based product categories */}
            <section className="py-16 px-10 bg-white">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold text-center mb-12">Our Products</h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {categories.map((category) => (
                            <div key={category.id} className="flex flex-col items-center text-center p-6 hover:shadow-lg transition-shadow duration-300">
                                <div className="mb-4">
                                    {category.icon}
                                </div>
                                <h3 className="text-xl font-semibold text-gray-800 mb-3">{category.title}</h3>
                                <p className="text-gray-600 mb-4 text-sm">{category.description}</p>
                                <a
                                    href={category.link}
                                    className="text-green-600 hover:text-green-700 inline-flex items-center gap-1 text-sm font-medium"
                                >
                                    Learn More
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                    </svg>
                                </a>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Second section - Specific tractor models with images */}
            <section className="py-16 px-10 bg-gray-50">
                <div className="container mx-auto px-4">
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
                                        <a
                                            href={model.link}
                                            className="text-green-600 hover:text-green-700 inline-flex items-center gap-1 text-sm font-medium"
                                        >
                                            Learn More
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                            </svg>
                                        </a>
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