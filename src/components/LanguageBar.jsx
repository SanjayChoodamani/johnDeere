import React, { useState } from 'react';
import { ChevronDown, Phone, MapPin } from 'lucide-react';

export default function LanguageBar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="bg-gray-100 py-2 px-4 text-gray-800 font-montserrat">
            <div className="container mx-auto flex justify-between items-center">
                <div className="relative">
                    <button
                        className="flex items-center space-x-1 text-sm focus:outline-none"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        <span>English</span>
                        <ChevronDown size={16} />
                    </button>

                    {isOpen && (
                        <div className="absolute top-full left-0 mt-1 bg-white shadow-lg rounded-md py-1 z-150">
                            <button className="block w-full text-left px-4 py-2 text-sm hover:bg-gray-100">English</button>
                        </div>
                    )}
                </div>

                <div className="flex items-center space-x-6">
                    <a href="tel:08172256046" className="flex items-center space-x-2 text-sm">
                        <Phone size={16} />
                        <span>08172 256046</span>
                    </a>

                    <a href="/dealer-locator" className="flex items-center space-x-2 text-sm">
                        <MapPin size={16} />
                        <span>Dealer Locator</span>
                    </a>
                </div>
            </div>
        </div>
    );
}