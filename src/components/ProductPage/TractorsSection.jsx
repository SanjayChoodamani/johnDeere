import React from 'react';
import { useNavigate } from 'react-router-dom';
import DSeries from '../../assets/images/d_series.jpg';
import ESeries from '../../assets/images/e_series.jpg';
import MSeries from '../../assets/images/5m_series.jpg';
import SpecialtySeries from '../../assets/images/special_series.jpg';
import Gear from '../../assets/images/gear.png';

const TractorsSection = () => {
  const navigate = useNavigate();
  
  const tractorSeries = [
    {
      id: 'd-series',
      name: 'D Series',
      image: DSeries,
      hpRange: '35 HP - 50 HP',
      description: 'Versatile, multipurpose machines designed for both agricultural and heavy-duty haulage tasks.',
      applications: ['Agriculture', 'Haulage', 'General Purpose']
    },
    {
      id: 'e-series',
      name: 'E Series',
      image: ESeries,
      hpRange: '50 HP - 75 HP',
      description: 'Built for power and endurance, ideal for demanding agricultural tasks and large implements.',
      applications: ['Heavy Duty', 'Large Implements', 'Power Farming']
    },
    {
      id: '5m-series',
      name: '5M Series',
      image: MSeries,
      hpRange: '75 HP - 100 HP',
      description: 'India\'s largest tractor, equipped with state-of-the-art technology and immense power.',
      applications: ['Large Scale', 'Advanced Equipment', 'Heavy Duty']
    },
    {
      id: 'specialty-series',
      name: 'Specialty Series',
      image: SpecialtySeries,
      hpRange: '25 HP - 40 HP',
      description: 'Purpose-built for niche operations like orchard farming and intercultural work.',
      applications: ['Orchard', 'Intercultural', 'Compact Design']
    }
  ];
  
  const handleViewSeries = (seriesId) => {
    navigate(`/tractor-category/${seriesId}`);
  };
  
  return (
    <div className="py-12 px-10 bg-white">
      <h2 className="text-3xl font-bold text-center mb-10">Explore Our Tractor Series</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {tractorSeries.map((series) => (
          <div key={series.id} className="rounded-lg overflow-hidden shadow-md">
            <div className="h-48 overflow-hidden">
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