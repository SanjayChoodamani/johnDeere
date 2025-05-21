import React from 'react';
import Tractor from '../../assets/images/tractor.png';
import Implement from '../../assets/images/implements.png';
import Menu from '../../assets/images/menu.png';

export default function ProductionSystemSolutions() {
    const solutions = [
        {
            id: 1,
            title: 'Land Preparation',
            description: 'Modern technology for efficient land preparation',
            icon: <img src={Menu} alt="Land Preparation" className="w-10 h-10" />
        },
        {
            id: 2,
            title: 'Sowing & Fertilization',
            description: 'Precise control over seeding and fertilization',
            icon: <img src={Tractor} alt="Land Preparation" className="w-10 h-10" />
        },
        {
            id: 3,
            title: 'Harvesting Solutions',
            description: 'Advanced harvesting and post-harvest solutions',
            icon: <img src={Implement} alt="Land Preparation" className="w-10 h-10" />
        }
    ];

    return (
        <section className="py-16 px-10 bg-white font-montserrat">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold text-center mb-12">Production System Solutions</h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                    {solutions.map((solution) => (
                        <div key={solution.id} className="flex flex-col items-center text-center p-5 border-t border-gray-200 hover:shadow-md transition-shadow duration-300">
                            <div className="mb-4">
                                {solution.icon}
                            </div>
                            <h3 className="text-lg font-semibold text-gray-800 mb-2">{solution.title}</h3>
                            <p className="text-gray-600 text-sm mb-2">{solution.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}