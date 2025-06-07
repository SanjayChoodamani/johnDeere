import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import LanguageBar from '../LanguageBar';
import NavBar from '../NavBar';
import Footer from '../Footer';

const ModelComponent = ({ model }) => {
    const [mainImage, setMainImage] = useState(model.images[0]);
    const [openFaqIndex, setOpenFaqIndex] = useState(null);
    const [showAllSpecs, setShowAllSpecs] = useState(false);

    if (!model) return null;

    const toggleFaq = (index) => {
        setOpenFaqIndex(openFaqIndex === index ? null : index);
    };

    return (
        <div className="bg-white min-h-screen">
            <LanguageBar />
            <NavBar />
            {/* Breadcrumb */}
            <div className="bg-gray-100 py-3 px-4">
                <div className="container mx-auto px-4">
                    <div className="flex items-center text-sm">
                        <Link to="/" className="text-gray-600 hover:text-blue-600">Home</Link>
                        <span className="mx-2 text-gray-400">&gt;</span>
                        <Link to="/products" className="text-gray-600 hover:text-blue-600">Tractors</Link>
                        <span className="mx-2 text-gray-400">&gt;</span>
                        <Link to={`/tractor-category/${model.series}`} className="text-gray-600 hover:text-blue-600">
                            {model.seriesName}
                        </Link>
                        <span className="mx-2 text-gray-400">&gt;</span>
                        <span className="text-gray-800">{model.name}</span>
                    </div>
                </div>
            </div>

            {/* Main Content */}
            <div className="container mx-auto px-10 py-8">
                <div className="lg:flex lg:space-x-8">
                    {/* Images Section */}
                    <div className="lg:w-1/2 mb-8 lg:mb-0">
                        {/* Main Image */}
                        <div className="bg-white rounded-lg overflow-hidden mb-4 p-2 shadow-md">
                            <img
                                src={mainImage}
                                alt={model.name}
                                className="w-full h-auto object-cover"
                            />
                        </div>

                        {/* Thumbnail Gallery */}
                        <div className="grid grid-cols-4 gap-2">
                            {model.images.map((img, index) => (
                                <div
                                    key={index}
                                    className={`rounded-lg overflow-hidden cursor-pointer shadow ${img === mainImage ? 'ring-2 ring-green-500' : ''}`}
                                    onClick={() => setMainImage(img)}
                                >
                                    <img
                                        src={img}
                                        alt={`${model.name} view ${index + 1}`}
                                        className="w-full h-auto object-cover"
                                    />
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Details Section */}
                    <div className="lg:w-1/2">
                        {/* Model Title & Subtitle */}
                        <div className="mb-6">
                            <h1 className="text-3xl font-bold text-gray-900">{model.name}</h1>
                            <div className="text-xl text-gray-700 mt-1">{model.hp} | {model.rpm} RPM</div>
                        </div>

                        {/* Description */}
                        <div className="text-gray-700 mb-8">
                            <p>{model.description}</p>
                        </div>

                        {/* Specifications Table */}
                        <div className="mb-8 rounded-lg overflow-hidden">
                            <div className="grid grid-cols-1">
                                {Object.entries(model.specifications).slice(0, showAllSpecs ? undefined : 5).map(([key, value], index) => (
                                    <div key={key} className={`py-3 grid grid-cols-2 px-4 ${index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}`}>
                                        <div className="font-medium text-gray-800">{key}</div>
                                        <div className="text-gray-600">{value}</div>
                                    </div>
                                ))}
                            </div>
                            {Object.entries(model.specifications).length > 5 && (
                                <div className="bg-gray-100 px-4 py-3 text-center">
                                    <button
                                        onClick={() => setShowAllSpecs(!showAllSpecs)}
                                        className="text-green-600 hover:text-green-700 font-medium transition duration-300"
                                    >
                                        {showAllSpecs ? 'Show Less' : `Read More (${Object.entries(model.specifications).length - 5} more)`}
                                    </button>
                                </div>
                            )}
                        </div>

                        {/* Action Buttons */}
                        <div className="flex flex-wrap gap-4">
                            <button className="bg-green-600 hover:bg-green-700 text-white font-medium py-2 px-6 rounded-md transition duration-300 shadow-md">
                                Request a Quote
                            </button>
                            <button className="bg-white hover:bg-gray-100 text-green-600 font-medium py-2 px-6 rounded-md transition duration-300 shadow-md" onClick={() => window.open(model.brochureUrl, '_blank')}>
                                Download Brochure
                            </button>
                        </div>
                    </div>
                </div>

                {/* Product Overview Section */}
                <div className="mt-12">
                    <h2 className="text-2xl font-bold text-gray-900 mb-6">Product Overview</h2>
                    <div className="bg-white p-6 rounded-lg shadow-lg">
                        <p className="text-gray-700">{model.overview}</p>
                    </div>
                </div>

                {/* Features Section */}
                {model.features && model.features.length > 0 && (
                    <div className="mt-12">
                        <h2 className="text-2xl font-bold text-gray-900 mb-6">Key Features</h2>
                        <div className="bg-white p-6 rounded-lg shadow-lg">
                            <ul className="list-disc pl-5 space-y-2">
                                {model.features.map((feature, index) => (
                                    <li key={index} className="text-gray-700">{feature}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                )}

                {/* Standard Features Section */}
                <div className="mt-12">
                    <h2 className="text-2xl font-bold text-gray-900 mb-6">Standard Features</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {model.standardFeatures && model.standardFeatures.map((feature, index) => (
                            <div key={index} className="bg-white p-6 rounded-lg shadow-lg text-center">
                                <div className="flex justify-center mb-4">
                                    <img src={feature.icon} alt={feature.title} className="w-10 h-10" />
                                </div>
                                <h3 className="font-bold text-lg text-gray-900 mb-2">{feature.title}</h3>
                                <p className="text-gray-700 text-sm">{feature.description}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* FAQ Section */}
                <div className="mt-12">
                    <h2 className="text-2xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
                    <div className="bg-white rounded-lg shadow-lg divide-y divide-gray-200">
                        {model.faqs && model.faqs.map((faq, index) => (
                            <div key={index} className="hover:bg-gray-50">
                                <button
                                    className="w-full flex items-center justify-between p-5 text-left"
                                    onClick={() => toggleFaq(index)}
                                >
                                    <span className="font-medium text-gray-900">{faq.question}</span>
                                    <span className="text-gray-500 flex-shrink-0 ml-2">
                                        {openFaqIndex === index ? (
                                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                                <path d="M7.41 15.41L12 10.83l4.59 4.58L18 14l-6-6-6 6z" />
                                            </svg>
                                        ) : (
                                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                                <path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6z" />
                                            </svg>
                                        )}
                                    </span>
                                </button>
                                {openFaqIndex === index && (
                                    <div className="px-5 pb-5 text-gray-700">
                                        <p>{faq.answer}</p>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <Footer />
        </div >
    );
};

export default ModelComponent;