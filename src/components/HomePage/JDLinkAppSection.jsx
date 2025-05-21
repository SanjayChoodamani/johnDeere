import React from 'react';
import Jdlink from '../../assets/images/jdlink.png';

export default function JDLinkAppSection() {
    return (
        <section className="py-16 px-10 bg-green-50 font-montserrat">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row items-center">
                    {/* App Image */}
                    <div className="w-full md:w-1/2 flex justify-center mb-8 md:mb-0">
                        <div className="w-56 md:w-64 lg:w-72">
                            <img
                                src={Jdlink}
                                alt="JDLink Mobile App"
                                className="w-full h-auto object-contain"
                            />
                        </div>
                    </div>

                    {/* App Description */}
                    <div className="w-full md:w-1/2 md:pl-8">
                        <h2 className="text-2xl md:text-3xl font-bold mb-4">JDLink™</h2>
                        <p className="text-gray-700 mb-6 max-w-lg">
                            JDLink™ is an innovative application introduced by John Deere, that enables you to
                            check your tractors health and stay connected with your tractor, anytime anywhere.
                        </p>

                        <div className="flex flex-wrap gap-4">
                            <a
                                href="/download/mobile"
                                className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded transition duration-300"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
                                    <rect x="5" y="2" width="14" height="20" rx="2" ry="2" />
                                    <line x1="12" y1="18" x2="12" y2="18" />
                                </svg>
                                Download Mobile App
                            </a>

                            <a
                                href="/download/desktop"
                                className="inline-flex items-center gap-2 bg-white border border-gray-300 hover:bg-gray-50 text-gray-800 py-2 px-4 rounded transition duration-300"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
                                    <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
                                    <line x1="8" y1="21" x2="16" y2="21" />
                                    <line x1="12" y1="17" x2="12" y2="21" />
                                </svg>
                                Download Desktop App
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}