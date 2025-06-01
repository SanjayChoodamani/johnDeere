import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ModelComponent from '../components/TractorModelPage/ModelComponent';
import T401 from '../assets/images/tractors/t401.png';
import T402 from '../assets/images/tractors/t402.png';
import T403 from '../assets/images/tractors/t403.png';
import T404 from '../assets/images/tractors/t404.png';
import T405 from '../assets/images/tractors/t405.png';

import Speed from '../assets/images/speed.png';
import Parts from '../assets/images/parts.png';
import Implements from '../assets/images/implements.png';

import Brochure from '../assets/brochures/tractor.pdf'

const tractorModelsData = {
    'D3540': {
        name: 'D3540',
        series: 'd-series',
        seriesName: 'D Series',
        hp: '36 HP',
        rpm: '2100',
        description: 'Modern and technologically advanced, the AgroTrak 4036D is a versatile tractor built for superior efficiency. Ideal for all agricultural and haulage applications, it offers long-lasting performance and operational ease at a competitive price.',
        brochureUrl: Brochure,
        images: [
            T401, T402, T403, T404, T405
        ],
        specifications: {
            'Engine': '3-Cylinder, 50 HP, Turbocharged, Diesel',
            'Emission': 'BS-VI Emission Compliant',
            'Transmission': '8F + 2R / 8F + 3R / Synchro Shuttle',
            'Fuel Tank': '80 Litre',
            'Hydraulics': '1,600 kg Lift Capacity, 45 L/min Flow',
            'Wheelbase': '2,000 mm',
            'Weight': '2,100 kg'
        },
        overview: 'The AgroTrak 4036D combines raw power with intelligent engineering. Built with a naturally aspirated 3-cylinder engine and an easy-to-operate gearbox, this tractor thrives in both field and transport conditions. Farmers prefer this model for its reliability, simplicity, and strength.',
        features: [
            'Advanced hydraulic system with high lifting capacity',
            'Ergonomic operator station with easy-to-reach controls',
            'High-torque engine for maximum performance',
            'Fuel-efficient design for extended operating hours',
            'Enhanced cooling system for operation in high temperatures',
            'Heavy-duty front axle for improved stability and handling'
        ],
        // New standard features section
        standardFeatures: [
            {
                icon: Speed, 
                title: 'Top Shaft Lubrication',
                description: 'Advanced quantox lubrication system for extended component life'
            },
            {
                icon: Parts,
                title: 'Piston Spray Cooling',
                description: 'Enhanced cooling system for optimal engine performance'
            },
            {
                icon: Implements,
                title: 'Rear Oil Axle',
                description: 'Metal face seal design for superior durability'
            }
        ],
        // New FAQ section
        faqs: [
            {
                question: 'What is the price of 4036D?',
                answer: 'The AgroTrak 4036D is priced starting at $24,500 for the base model. Prices may vary based on optional features, attachments, and your location. Contact your local dealer for the most accurate pricing information.'
            },
            {
                question: 'What features make 4036D unique?',
                answer: 'The 4036D stands out with its superior fuel efficiency, advanced hydraulic system, and enhanced operator comfort. It features a naturally aspirated 3-cylinder engine that delivers exceptional torque even at low RPMs, making it perfect for tough field conditions.'
            },
            {
                question: 'Is 4036D available in 2WD?',
                answer: 'Yes, the 4036D is available in both 2WD and 4WD configurations. The 2WD variant is ideal for light-duty applications and offers improved fuel economy, while the 4WD model provides superior traction for challenging terrain and heavy-duty applications.'
            },
            {
                question: "What's the lifting capacity?",
                answer: 'The 4036D features a robust hydraulic system with a lifting capacity of 1,600 kg, making it capable of handling a wide range of implements and attachments for various agricultural operations.'
            },
            {
                question: 'How to contact an John Deere dealer near me?',
                answer: 'You can locate and contact your nearest dealer by using our Dealer Locator tool on our website, calling our customer service at 1-800-123-4567, or sending an email to support@agrotrak.com. Our team will connect you with a local dealer in your area.'
            }
        ]
    },
    'D3545': {
        name: 'D3545',
        series: 'd-series',
        seriesName: 'D Series',
        hp: '45 HP',
        rpm: '2200',
        description: 'The powerful AgroTrak 5045D delivers excellent performance in demanding agricultural environments. With its robust build and advanced features, it combines power, efficiency, and comfort for a superior farming experience.',
        images: [
            T403, T402, T401, T404, T405
        ],
        specifications: {
            'Engine': '3-Cylinder, 58 HP, Turbocharged, Diesel',
            'Emission': 'BS-VI Emission Compliant',
            'Transmission': '8F + 2R / 8F + 3R / Synchro Shuttle',
            'Fuel Tank': '85 Litre',
            'Hydraulics': '1,800 kg Lift Capacity, 50 L/min Flow',
            'Wheelbase': '2,050 mm',
            'Weight': '2,300 kg'
        },
        overview: 'The AgroTrak 5045D is designed to handle diverse agricultural tasks with ease and efficiency. Its powerful engine and enhanced transmission system provide the right power and speed for every job. The spacious operator platform ensures comfort during long working hours.',
        features: [
            'High-performance engine with excellent torque backup',
            'Multi-disc oil-immersed brakes for better safety',
            'Enhanced hydraulic system for operating multiple implements',
            'Advanced instrument cluster with digital display',
            'Adjustable steering position for operator comfort',
            'Heavy-duty chassis for durability and strength'
        ],
        // New standard features section
        standardFeatures: [
            {
                icon: '/api/placeholder/100/100', // Icon for Top Shaft Lubrication
                title: 'Top Shaft Lubrication',
                description: 'Advanced quantox lubrication system for extended component life'
            },
            {
                icon: '/api/placeholder/100/100', // Icon for Piston Spray Cooling
                title: 'Piston Spray Cooling',
                description: 'Enhanced cooling system for optimal engine performance'
            },
            {
                icon: '/api/placeholder/100/100', // Icon for Rear Oil Axle
                title: 'Rear Oil Axle',
                description: 'Metal face seal design for superior durability'
            }
        ],
        // New FAQ section
        faqs: [
            {
                question: 'What is the price of 5045D?',
                answer: 'The AgroTrak 5045D is priced starting at $28,900 for the base model. Prices may vary based on optional features, attachments, and your location. Contact your local dealer for the most accurate pricing information.'
            },
            {
                question: 'What features make 5045D unique?',
                answer: 'The 5045D features an advanced turbocharged engine that delivers superior power and torque. It comes with enhanced hydraulics, a larger fuel tank, and a more spacious operator station. The model is renowned for its versatility across different farming applications.'
            },
            {
                question: 'Is 5045D available in 2WD?',
                answer: 'Yes, the 5045D is available in both 2WD and 4WD configurations. The 2WD variant is suitable for regular field operations, while the 4WD model provides excellent traction for tough terrain and heavy-duty applications.'
            },
            {
                question: "What's the lifting capacity?",
                answer: 'The 5045D boasts an impressive hydraulic lifting capacity of 1,800 kg, allowing it to handle heavier implements and attachments with ease, making it suitable for a wide range of agricultural operations.'
            },
            {
                question: 'How to contact an John Deere dealer near me?',
                answer: 'You can locate and contact your nearest dealer by using our Dealer Locator tool on our website, calling our customer service at 1-800-123-4567, or sending an email to support@agrotrak.com. Our team will connect you with a local dealer in your area.'
            }
        ]
    },
    // Add more models as needed
};

const TractorModelPage = () => {
    const { modelId } = useParams();
    const [modelData, setModelData] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Simulate API call to fetch data
        setTimeout(() => {
            const data = tractorModelsData['D3540'];
            setModelData(data);
            setLoading(false);
        }, 500);
    }, [modelId]);

    if (loading) {
        return (
            <div className="flex justify-center items-center h-64">
                <div className="text-xl">Loading...</div>
            </div>
        );
    }

    if (!modelData) {
        return (
            <div className="container mx-auto py-8 px-4">
                <h1 className="text-2xl font-bold mb-4">Model not found</h1>
                <p>The tractor model "{modelId}" doesn't exist or has been removed.</p>
            </div>
        );
    }

    return <ModelComponent model={modelData} />;
};

export default TractorModelPage;