import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ModelComponent from '../components/TractorModelPage/ModelComponent';
import AllTractors from '../assets/data/AllTractors';

const TractorModelPage = () => {
    const { modelId } = useParams();
    const [modelData, setModelData] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            const data = AllTractors.getModelDetailData(modelId);
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
                <a href="/" className="text-blue-600 hover:underline mt-4 inline-block">
                    Return to Home
                </a>
            </div>
        );
    }

    return <ModelComponent model={modelData} />;
};

export default TractorModelPage;