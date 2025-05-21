import React from 'react';
import { ChevronRight } from 'lucide-react';
import Implements from '../../assets/images/implements.png';
import Parts from '../../assets/images/parts.png';
import Service from '../../assets/images/service.png';

const ProductSupportSection = () => {
    const supportCards = [
        {
            icon: <img src={Implements} alt="Maintenance & Repairs" className="w-8 h-8" />,
            title: "Maintenance & Repairs",
            description: "Scheduled maintenance services to keep your tractor in peak condition.",
            link: "/products"
        },
        {
            icon: <img src={Parts} alt="Maintenance & Repairs" className="w-8 h-8" />,
            title: "Diagnostic Services",
            description: "Comprehensive check-ups and expert analysis for quick problem resolution.",
            link: "/products"
        },
        {
            icon: <img src={Service} alt="Maintenance & Repairs" className="w-6 h-8" />,
            title: "Service Plans",
            description: "Tailored packages designed to fit your specific needs and requirements.",
            link: "/products"
        }
    ];

    return (
        <div className="py-16 px-10 bg-white">
            <div className="container mx-auto px-4 md:px-6">
                <h2 className="text-2xl font-bold text-center mb-12">Product Support</h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {supportCards.map((card, index) => (
                        <div key={index} className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-300">
                            <div className="mb-4">
                                {card.icon}
                            </div>
                            <h3 className="text-xl font-semibold mb-2">{card.title}</h3>
                            <p className="text-gray-600 mb-4">{card.description}</p>
                            <a
                                href={card.link}
                                className="inline-flex items-center text-green-700 hover:text-green-900"
                            >
                                Learn More <ChevronRight className="ml-1 w-4 h-4" />
                            </a>
                        </div>
                    ))}
                </div>

                <div className="text-center mt-12">
                    <a
                        href="/products"
                        className="inline-block bg-green-800 hover:bg-green-900 text-white font-medium py-3 px-6 rounded-md transition-colors duration-300"
                    >
                        Explore Product Support
                    </a>
                </div>
            </div>
        </div>
    );
};

export default ProductSupportSection;