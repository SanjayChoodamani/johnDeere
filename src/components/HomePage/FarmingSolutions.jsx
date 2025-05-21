import React from 'react';
import FarmingTractor1 from '../../assets/images/farm1.png';
import FarmingTractor2 from '../../assets/images/farm2.png';

export default function FarmingSolutions() {
    const solutions = [
        {
            id: 1,
            title: 'Technology Solutions',
            description: 'High precision technologies, intelligent management, analytics and insights',
            image: FarmingTractor1,
            link: '/products'
        },
        {
            id: 2,
            title: 'Production System Solutions',
            description: `Industry's leading soil, climate, and crop management system delivers success`,
            image: FarmingTractor2,
            link: '/products'
        }
    ];

    return (
        <section className="py-12 px-10 bg-gray-50 font-montserrat">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold text-center mb-10">Farming Solutions</h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {solutions.map((solution) => (
                        <div key={solution.id} className="relative rounded-md overflow-hidden shadow-md h-64 group">
                            {/* Background Image */}
                            <img
                                src={solution.image}
                                alt={solution.title}
                                className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                            />

                            {/* Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>

                            {/* Content */}
                            <div className="absolute inset-0 p-6 flex flex-col justify-end">
                                <h3 className="text-xl md:text-2xl font-semibold text-white mb-2">{solution.title}</h3>
                                <p className="text-white text-sm mb-4 max-w-md">{solution.description}</p>
                                <a
                                    href={solution.link}
                                    className="inline-block bg-white text-green-700 font-medium py-2 px-5 rounded hover:bg-gray-100 transition duration-300 w-max"
                                >
                                    Learn More
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}