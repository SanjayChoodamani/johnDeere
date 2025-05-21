import React from 'react';
import Parts from '../../assets/images/parts.png';
import Implements from '../../assets/images/implements.png';
import Perfromace from '../../assets/images/performance.png';

const WhyChooseSection = () => {
    const features = [
        {
            icon: Parts, 
            title: 'Advanced Technology',
            description: 'State-of-the-art features and smart farming capabilities'
        },
        {
            icon: Implements, 
            title: 'Low Maintenance',
            description: 'Designed for minimal downtime and easy service'
        },
        {
            icon: Perfromace, 
            title: 'Heavy Duty Performance',
            description: 'Built for demanding agricultural operations'
        }
    ];

    return (
        <div className="py-12 px-4 bg-gray-50">
            <h2 className="text-3xl font-bold text-center mb-12">Why Choose Our Tractors</h2>

            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
                {features.map((feature, index) => (
                    <div key={index} className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                        <div className="w-16 h-16 mb-4">
                            <img
                                src={feature.icon}
                                alt={feature.title}
                                className="w-10 h-10 object-contain"
                            />
                        </div>
                        <h3 className="text-xl font-semibold text-green-700 mb-2">{feature.title}</h3>
                        <p className="text-gray-600">{feature.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default WhyChooseSection;