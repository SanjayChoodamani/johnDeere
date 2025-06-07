import React from 'react';
import { useNavigate } from 'react-router-dom';
import AllTractors from '../../assets/data/AllTractors';
import Gear from '../../assets/images/gear.png';

const TractorsSection = () => {
  const navigate = useNavigate();
  
  const tractorSeries = AllTractors.getAllSeries();
  
  const handleViewSeries = (seriesId) => {
    navigate(`/tractor-category/${seriesId}`);
  };
  
  return (
    <div className="py-12 px-10 bg-white">
      <h2 className="text-3xl font-bold text-center mb-10">Explore Our Tractor Series</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {tractorSeries.map((series) => (
          <div key={series.id} className="rounded-lg overflow-hidden shadow-md">
            <div className="h-50 overflow-hidden">
              <img 
                src={series.image} 
                alt={series.name} 
                className="w-full h-full object-cover"
              />
            </div>
            
            <div className="p-4">
              <h3 className="text-xl font-semibold text-green-700">{series.name}</h3>
              <p className="text-gray-600 font-medium my-1">{series.hpRange}</p>
              <p className="text-gray-600 text-sm mb-4">{series.description}</p>
              
              <div className="mb-4">
                <p className="font-semibold text-sm mb-2">Key Applications:</p>
                <ul className="space-y-1">
                  {series.applications.map((app, index) => (
                    <li key={index} className="flex items-center text-sm">
                      <img src={Gear} alt="gear" className="w-4 h-4 mr-2" />
                      {app}
                    </li>
                  ))}
                </ul>
              </div>
              
              <button 
                onClick={() => handleViewSeries(series.id)}
                className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700 transition duration-200"
              >
                View {series.name}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TractorsSection;