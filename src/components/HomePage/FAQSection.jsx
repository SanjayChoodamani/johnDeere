import React, { useState } from 'react';

export default function FAQSection() {
    const faqs = [
        {
            id: 1,
            question: "What is the John Deere tractor price range?",
            answer: "John Deere tractors are available in a wide price range starting from approximately ₹5 lakhs for small utility tractors and going up to ₹90 lakhs for premium high-horsepower models. The exact price depends on the model's specifications, engine capacity, features, and technology."
        },
        {
            id: 2,
            question: "What is the John Deere tractor HP range?",
            answer: "John Deere offers tractors across various horsepower ranges from 22 HP to 620 HP, catering to different farming needs. The utility tractors range from 22-140 HP, row crop tractors from 140-400 HP, and articulated 4WD tractors can go up to 620 HP."
        },
        {
            id: 3,
            question: "What is John Deere AutoTrac™?",
            answer: "John Deere AutoTrac™ is an assisted steering system that uses GPS technology to automatically guide your equipment through fields. It helps reduce skips and overlaps, improving efficiency, reducing input costs, and minimizing operator fatigue during operation."
        }
    ];

    const [openId, setOpenId] = useState(null);

    const toggleFAQ = (id) => {
        setOpenId(openId === id ? null : id);
    };

    return (
        <section className="py-16 bg-gray-50 font-montserrat">
            <div className="container mx-auto px-4 max-w-3xl">
                <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>

                <div className="space-y-4">
                    {faqs.map((faq) => (
                        <div
                            key={faq.id}
                            className="border border-gray-200 rounded-md overflow-hidden bg-white"
                        >
                            <button
                                className="flex justify-between items-center w-full p-4 text-left focus:outline-none"
                                onClick={() => toggleFAQ(faq.id)}
                            >
                                <span className="font-medium">{faq.question}</span>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className={`h-5 w-5 text-gray-500 transition-transform duration-300 ${openId === faq.id ? 'transform rotate-180' : ''}`}
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                >
                                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                                </svg>
                            </button>

                            {openId === faq.id && (
                                <div className="px-4 pb-4 text-gray-600 text-sm">
                                    <p>{faq.answer}</p>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}