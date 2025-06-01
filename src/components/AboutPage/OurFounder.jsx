import React from 'react';
import Founder from '../../assets/images/founder.png';

const OurFounder = () => {
    return (
        <section className="py-16 px-4 md:px-8 lg:px-16 bg-gray-50">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                    {/* Image Section */}
                    <div className="order-2 lg:order-1">
                        <div className="relative">
                            <img
                                src={Founder}
                                alt="Mr. MT Krishne Gowda"
                                className="w-auto rounded-lg shadow-lg object-cover"
                            />
                        </div>
                    </div>

                    {/* Content Section */}
                    <div className="order-1 lg:order-2">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Our Founder</h2>
                        <h3 className="text-xl md:text-2xl font-semibold text-gray-800 mb-6">Mr. MT Krishne Gowda</h3>

                        <div className="space-y-4 text-gray-600 leading-relaxed">
                            <p>
                                In 2005, our founder, Mr. MT Krishne Gowda, purchased his first John Deere tractor and was immensely impressed by its cutting-edge technology, durability, and efficiency. The superior performance of the machine inspired him to explore greater opportunities in the agricultural sector.
                            </p>

                            <p>
                                Recognizing the growing demand for high-quality farm equipment in Karnataka, Mr. Gowda seized the opportunity in 2012 to acquire the prestigious John Deere dealership in Hassan. With a commitment to empowering farmers with advanced solutions, he established Sri Lakshmi Tractor Tech, a name synonymous with trust, reliability, and excellence.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default OurFounder;