import React from 'react';
import Equip from '../../assets/images/equip.png';

const ProductHero = () => {
    return (
        <div className="relative h-96 w-full">
            {/* Background image */}
            <div
                className="absolute inset-0 bg-cover bg-center"
                style={{
                    backgroundImage: `url(${Equip})`,
                    filter: "brightness(70%)"
                }}
            />

            {/* Text content */}
            <div className="relative h-full flex flex-col items-center justify-center text-white text-center px-4">
                <h1 className="text-4xl md:text-5xl font-bold mb-4">Discover Our Complete Tractor Range</h1>
                <p className="text-xl md:text-2xl">Power, Performance, and Precision for Every Agricultural Need</p>
            </div>
        </div>
    );
};

export default ProductHero;