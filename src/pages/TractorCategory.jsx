import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import WhyChooseSection from '../components/ProductPage/WhyChooseSection';
import LanguageBar from '../components/LanguageBar';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import AllTractors from '../assets/data/AllTractors';

const MobileTableRow = ({ model }) => {
    return (
        <div className="bg-white border rounded-lg shadow-sm mb-4 p-4">
            <div className="flex justify-between items-center border-b pb-2 mb-2">
                <Link
                    to={`/tractor-model/${model.id}`}
                    className="text-blue-700 font-bold text-lg hover:text-blue-900"
                >
                    {model.id}
                </Link>
                <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs">
                    {model.drive}
                </span>
            </div>

            <div className="grid grid-cols-2 gap-2 text-sm">
                <div>
                    <p className="text-gray-500">Engine</p>
                    <p className="font-medium">{model.engineHP}</p>
                </div>
                <div>
                    <p className="text-gray-500">Transmission</p>
                    <p className="font-medium">{model.transmission}</p>
                </div>
                <div>
                    <p className="text-gray-500">PTO Option</p>
                    <p className="font-medium">{model.ptoOption}</p>
                </div>
                <div>
                    <p className="text-gray-500">Clutch</p>
                    <p className="font-medium">{model.clutch}</p>
                </div>
            </div>
        </div>
    );
};

const TractorCategory = () => {
    const { seriesId } = useParams();
    const [seriesData, setSeriesData] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Get data from centralized AllTractors source
        setTimeout(() => {
            const data = AllTractors.getCategoryTableData(seriesId);
            setSeriesData(data);
            setLoading(false);
        }, 500);
    }, [seriesId]);

    if (loading) {
        return (
            <div className="flex justify-center items-center h-64">
                <div className="text-xl">Loading...</div>
            </div>
        );
    }

    if (!seriesData) {
        return (
            <div className="container mx-auto py-8 px-4">
                <h1 className="text-2xl font-bold mb-4">Series not found</h1>
                <p>The tractor series "{seriesId}" doesn't exist or has been removed.</p>
                <Link to="/" className="text-blue-600 hover:underline mt-4 inline-block">
                    Return to Home
                </Link>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-50">
            <LanguageBar />
            <NavBar />
            
            {/* Hero Section */}
            <div className="relative px-10">
                <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{
                        backgroundImage: `url(${seriesData.image})`,
                        filter: "brightness(40%)"
                    }}
                />
                <div className="relative container mx-auto px-4 py-16 text-white">
                    <h1 className="text-3xl md:text-4xl font-bold mb-4">{seriesData.name}</h1>
                    <p className="max-w-3xl text-sm md:text-base">{seriesData.description}</p>
                </div>
            </div>

            {/* Models Table Section */}
            <div className="container mx-auto py-8 px-10">
                <h2 className="text-2xl font-bold mb-6">Available Models</h2>

                {/* Desktop Table - Hidden on mobile */}
                <div className="hidden md:block bg-white rounded-lg shadow-md overflow-hidden">
                    <div className="overflow-x-auto">
                        <table className="min-w-full divide-y divide-gray-200">
                            <thead className="bg-gray-800 text-white">
                                <tr>
                                    <th className="px-4 py-3 text-left text-xs font-medium uppercase tracking-wider">Model</th>
                                    <th className="px-4 py-3 text-left text-xs font-medium uppercase tracking-wider">Drive</th>
                                    <th className="px-4 py-3 text-left text-xs font-medium uppercase tracking-wider">Engine HP (kW)</th>
                                    <th className="px-4 py-3 text-left text-xs font-medium uppercase tracking-wider">Transmission</th>
                                    <th className="px-4 py-3 text-left text-xs font-medium uppercase tracking-wider">PTO Option</th>
                                    <th className="px-4 py-3 text-left text-xs font-medium uppercase tracking-wider">Clutch</th>
                                </tr>
                            </thead>
                            <tbody className="bg-white divide-y divide-gray-200">
                                {seriesData.models.map((model, index) => (
                                    <tr key={model.id} className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                                        <td className="px-4 py-4 whitespace-nowrap">
                                            <Link
                                                to={`/tractor-model/${model.id}`}
                                                className="text-blue-600 hover:text-blue-800 font-medium"
                                            >
                                                {model.id}
                                            </Link>
                                        </td>
                                        <td className="px-4 py-4 whitespace-nowrap">{model.drive}</td>
                                        <td className="px-4 py-4 whitespace-nowrap">{model.engineHP}</td>
                                        <td className="px-4 py-4 whitespace-nowrap">{model.transmission}</td>
                                        <td className="px-4 py-4 whitespace-nowrap">{model.ptoOption}</td>
                                        <td className="px-4 py-4 whitespace-nowrap">{model.clutch}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* Mobile Cards - Shown only on mobile */}
                <div className="md:hidden">
                    {seriesData.models.map(model => (
                        <MobileTableRow key={model.id} model={model} />
                    ))}
                </div>
            </div>
            
            {/* Why Choose Section */}
            <WhyChooseSection />
            
            {/* Footer */}
            <Footer />
        </div>
    );
};

export default TractorCategory;