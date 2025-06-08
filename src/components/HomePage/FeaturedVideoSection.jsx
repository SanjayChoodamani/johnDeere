import React from 'react';

export default function FeaturedVideoSection() {
    return (
        <section className="py-16 px-4 md:px-10 bg-green-50 font-montserrat">
            <div className="container mx-auto">
                {/* Header */}
                <div className="text-center mb-8">
                    <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 text-gray-900">
                        Featured Video
                    </h2>
                    <p className="text-gray-600 text-sm md:text-base lg:text-lg max-w-md mx-auto">
                        Discover Our Latest Tractor Technology
                    </p>
                </div>

                {/* Video Container */}
                <div className="max-w-4xl mx-auto">
                    <div className="relative w-full h-0 pb-[56.25%] rounded-lg overflow-hidden shadow-xl bg-gray-900">
                        <iframe
                            className="absolute top-0 left-0 w-full h-full"
                            src="https://www.youtube.com/embed/PUSUMFPARww?rel=0&modestbranding=1&showinfo=0"
                            title="John Deere Latest Tractor Technology"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowFullScreen
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}