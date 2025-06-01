import React from "react";

const OurStory = () => {
    return (
        <section className="py-16 px-4 md:px-8 lg:px-16 bg-white">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
                    {/* Main Content - Takes up 2 columns */}
                    <div className="lg:col-span-2">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">Our Story</h2>

                        <div className="space-y-6 text-gray-600 leading-relaxed mb-8">
                            <p>
                                In 2005, our founder, Mr. MT Krishne Gowda, purchased his first John Deere tractor and was immensely impressed by its cutting-edge technology, durability, and efficiency. The superior performance of the machine inspired him to explore greater opportunities in the agricultural sector.
                            </p>

                            <p>
                                Recognizing the growing demand for high-quality farm equipment in Karnataka, Mr. Gowda seized the opportunity in 2012 to acquire the prestigious John Deere dealership in Hassan. With a commitment to empowering farmers with advanced solutions, he established Sri Lakshmi Tractor Tech, a name synonymous with trust, reliability, and excellence.
                            </p>
                        </div>

                        {/* Mission Box */}
                        <div className="bg-green-600 text-white p-6 rounded-lg">
                            <h3 className="text-xl font-semibold mb-4">Our Mission</h3>
                            <p className="leading-relaxed">
                                We are dedicated to helping farmers achieve higher productivity through advanced technology, expert guidance, and reliable service. At Sri Lakshmi Tractor Tech, we don't just sell tractors—we build lasting relationships with our customers by ensuring their success in every harvest.
                            </p>
                        </div>
                    </div>

                    {/* Timeline Sidebar */}
                    <div className="lg:col-span-1">
                        <div className="space-y-8">
                            {/* Since 2005 */}
                            <div className="border-l-4 border-green-600 pl-6">
                                <h4 className="text-lg font-semibold text-green-600 mb-2">Since 2005</h4>
                                <p className="text-gray-600">Started our journey with John Deere</p>
                            </div>

                            {/* Established 2012 */}
                            <div className="border-l-4 border-green-600 pl-6">
                                <h4 className="text-lg font-semibold text-green-600 mb-2">Established 2012</h4>
                                <p className="text-gray-600">Official John Deere Dealership</p>
                            </div>

                            {/* Trusted Partner */}
                            <div className="border-l-4 border-green-600 pl-6">
                                <h4 className="text-lg font-semibold text-green-600 mb-2">Trusted Partner</h4>
                                <p className="text-gray-600">Serving Karnataka's farmers</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default OurStory;