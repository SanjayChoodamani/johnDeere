import { useState } from 'react';
import { Phone, Clock, Mail } from 'lucide-react';

const ContactFormSection = () => {
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: '',
        subject: 'Service Inquiry',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = () => {
        console.log('Form submitted:', formData);
        // Here you would typically send the data to your backend
        alert('Form submitted successfully!');
        setFormData({
            name: '',
            phone: '',
            email: '',
            subject: 'Service Inquiry',
            message: ''
        });
    };

    return (
        <div className="py-16 px-10 bg-gray-50">
            <div className="container mx-auto px-4 md:px-6">
                <h2 className="text-2xl font-bold mb-12">Customer Contact Center</h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    {/* Contact Info */}
                    <div>
                        <div className="mb-8">
                            <div className="flex items-center mb-2">
                                <Phone className="text-green-700 mr-2" size={20} />
                                <h3 className="font-semibold">Toll-Free Number (India)</h3>
                            </div>
                            <p className="text-gray-600 ml-7">08172 256046</p>
                        </div>

                        <div className="mb-8">
                            <div className="flex items-center mb-2">
                                <Clock className="text-green-700 mr-2" size={20} />
                                <h3 className="font-semibold">Availability</h3>
                            </div>
                            <p className="text-gray-600 ml-7">Monday to Saturday, 9:00 AM to 6:00 PM</p>
                        </div>

                        <div className="mb-8">
                            <div className="flex items-center mb-2">
                                <Mail className="text-green-700 mr-2" size={20} />
                                <h3 className="font-semibold">Email</h3>
                            </div>
                            <p className="text-gray-600 ml-7">lakshmitractortech@gmail.com</p>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Send us a message</h3>
                        <div>
                            <div className="mb-4">
                                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-green-500"
                                />
                            </div>

                            <div className="mb-4">
                                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
                                <input
                                    type="tel"
                                    id="phone"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-green-500"
                                />
                            </div>

                            <div className="mb-4">
                                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-green-500"
                                />
                            </div>

                            <div className="mb-4">
                                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">Subject</label>
                                <select
                                    id="subject"
                                    name="subject"
                                    value={formData.subject}
                                    onChange={handleChange}
                                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-green-500"
                                >
                                    <option value="Service Inquiry">Service Inquiry</option>
                                    <option value="Product Support">Product Support</option>
                                    <option value="Maintenance Request">Maintenance Request</option>
                                    <option value="Parts Inquiry">Parts Inquiry</option>
                                    <option value="Other">Other</option>
                                </select>
                            </div>

                            <div className="mb-6">
                                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    rows="4"
                                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-green-500"
                                ></textarea>
                            </div>

                            <button
                                type="button"
                                onClick={handleSubmit}
                                className="w-full bg-green-800 hover:bg-green-900 text-white font-medium py-2 px-4 rounded-md transition-colors duration-300"
                            >
                                Submit
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactFormSection;