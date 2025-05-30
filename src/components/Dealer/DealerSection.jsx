import React, { useState } from 'react';
import { MapPin, Phone, User, Star, Award, Shield } from 'lucide-react';

const DealerSection = () => {
    const [flippedCard, setFlippedCard] = useState(null);

    const dealers = [
        {
            id: 1,
            name: "Rajesh Kumar",
            location: "Hassan",
            phone: "+91 9876543210",
            rating: 4.8,
            experience: "15+ Years",
            specialization: "John Deere Tractors"
        },
        {
            id: 2,
            name: "Amit Singh",
            location: "Arsikere",
            phone: "+91 9876543211",
            rating: 4.9,
            experience: "12+ Years",
            specialization: "Agricultural Equipment"
        },
        {
            id: 3,
            name: "Priya Sharma",
            location: "Alur",
            phone: "+91 9876543212",
            rating: 4.7,
            experience: "10+ Years",
            specialization: "Tractor Sales & Service"
        },
        {
            id: 4,
            name: "Suresh Reddy",
            location: "Belur",
            phone: "+91 9876543213",
            rating: 4.8,
            experience: "18+ Years",
            specialization: "Farm Machinery"
        },
        {
            id: 5,
            name: "Ravi Patel",
            location: "Sakleshpur",
            phone: "+91 9876543214",
            rating: 4.6,
            experience: "14+ Years",
            specialization: "Tractor Implements"
        },
        {
            id: 6,
            name: "Neha Agarwal",
            location: "Arkalgud",
            phone: "+91 9876543215",
            rating: 4.9,
            experience: "11+ Years",
            specialization: "Customer Support"
        },
        {
            id: 7,
            name: "Vikram Joshi",
            location: "Holenarasipura",
            phone: "+91 9876543216",
            rating: 4.7,
            experience: "16+ Years",
            specialization: "Parts & Accessories"
        },
        {
            id: 8,
            name: "Deepak Gupta",
            location: "Channarayapatna",
            phone: "+91 9876543217",
            rating: 4.8,
            experience: "13+ Years",
            specialization: "Technical Support"
        }
    ];

    const handleCardClick = (id) => {
        setFlippedCard(flippedCard === id ? null : id);
    };

    return (
        <div className="py-16 bg-gray-50">
            <div className="container mx-auto px-4">
                {/* Header Section */}
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-bold text-gray-900 mb-4">
                        Our Authorized Dealers
                    </h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Connect with our trusted dealers across India for the best John Deere tractors
                        and agricultural equipment solutions.
                    </p>
                </div>

                {/* Dealers Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {dealers.map((dealer) => (
                        <div
                            key={dealer.id}
                            className="relative h-64 cursor-pointer group"
                            onClick={() => handleCardClick(dealer.id)}
                        >
                            <div className={`relative w-full h-full transition-transform duration-700 transform-style-preserve-3d ${flippedCard === dealer.id ? 'rotate-y-180' : ''
                                }`}>

                                {/* Front Card */}
                                <div className="absolute inset-0 w-full h-full backface-hidden bg-white rounded-xl shadow-lg border border-gray-200 hover:shadow-xl transition-shadow duration-300">
                                    <div className="p-6 h-full flex flex-col items-center justify-center text-center">
                                        {/* Dealer Icon */}
                                        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4 group-hover:bg-green-200 transition-colors duration-300">
                                            <User size={32} className="text-green-600" />
                                        </div>

                                        {/* Dealer Name */}
                                        <h3 className="text-xl font-semibold text-gray-900 mb-2">
                                            {dealer.name}
                                        </h3>

                                        {/* Location */}
                                        <div className="flex items-center text-gray-600 mb-3">
                                            <MapPin size={16} className="mr-1" />
                                            <span className="text-sm">{dealer.location}</span>
                                        </div>

                                        {/* Dealer Badge */}
                                        <div className="flex items-center bg-green-50 px-3 py-1 rounded-full">
                                            <Shield size={14} className="text-green-600 mr-1" />
                                            <span className="text-xs font-medium text-green-700">
                                                Authorized Dealer
                                            </span>
                                        </div>

                                        {/* Click Indicator */}
                                        <p className="text-xs text-gray-400 mt-4">Click for details</p>
                                    </div>
                                </div>

                                {/* Back Card */}
                                <div className="absolute inset-0 w-full h-full backface-hidden rotate-y-180 bg-gradient-to-br from-green-500 to-green-600 rounded-xl shadow-lg">
                                    <div className="p-6 h-full flex flex-col justify-center text-white">
                                        {/* Header */}
                                        <div className="text-center mb-6">
                                            <div className="w-12 h-12 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-3">
                                                <Award size={24} className="text-green-600" />
                                            </div>
                                            <h3 className="text-lg font-bold mb-1">{dealer.name}</h3>
                                            <p className="text-green-100 text-sm">{dealer.specialization}</p>
                                        </div>

                                        {/* Contact Info */}
                                        <div className="space-y-3">
                                            <div className="flex items-center">
                                                <Phone size={16} className="mr-2 text-green-100" />
                                                <span className="text-sm">{dealer.phone}</span>
                                            </div>

                                            <div className="flex items-center">
                                                <MapPin size={16} className="mr-2 text-green-100" />
                                                <span className="text-sm">{dealer.location}</span>
                                            </div>

                                            {/* <div className="flex items-center">
                                                <Star size={16} className="mr-2 text-yellow-300 fill-current" />
                                                <span className="text-sm">{dealer.rating} Rating</span>
                                            </div>

                                            <div className="flex items-center">
                                                <Award size={16} className="mr-2 text-green-100" />
                                                <span className="text-sm">{dealer.experience}</span>
                                            </div> */}
                                        </div>

                                        {/* Call Button */}
                                        <a
                                            href={`tel:${dealer.phone}`}
                                            className="mt-4 bg-white bg-opacity-20 hover:bg-opacity-30 text-green-600 text-center py-2 px-4 rounded-lg transition-all duration-300 text-sm font-medium"
                                            onClick={(e) => e.stopPropagation()}
                                        >
                                            Call Now
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Footer Note */}
                <div className="text-center mt-12">
                    <p className="text-gray-600">
                        Need help finding a dealer in your area?
                        <a href="/contact" className="text-green-600 hover:text-green-700 font-medium ml-1">
                            Contact us
                        </a>
                    </p>
                </div>
            </div>

            <style jsx>{`
        .transform-style-preserve-3d {
          transform-style: preserve-3d;
        }
        .backface-hidden {
          backface-visibility: hidden;
        }
        .rotate-y-180 {
          transform: rotateY(180deg);
        }
      `}</style>
        </div>
    );
};

export default DealerSection;