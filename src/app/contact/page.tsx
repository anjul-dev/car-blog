'use client';
import React, { useState } from 'react';

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
}

const Contact = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!validateEmail(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.subject.trim()) {
      newErrors.subject = 'Subject is required';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear error when user starts typing
    if (errors[name as keyof FormErrors]) {
      setErrors(prev => ({
        ...prev,
        [name]: undefined
      }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submission attempted', formData);
    
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    // Simulate API call
    setTimeout(() => {
      alert(`Thank you, ${formData.name}! Your message has been received. We'll get back to you soon.`);
      console.log('Form submitted successfully:', formData);
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      setErrors({});
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <>
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Get In Touch</h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              Have a question about cars, want to suggest a review, or just want to say hello? We'd love to hear from you!
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-slate-800 rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-white mb-6">Send us a Message</h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 bg-slate-700 border rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-400 transition-colors ${
                      errors.name ? 'border-red-400' : 'border-slate-600'
                    }`}
                    placeholder="Your full name"
                  />
                  {errors.name && <p className="mt-1 text-sm text-red-400">{errors.name}</p>}
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 bg-slate-700 border rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-400 transition-colors ${
                      errors.email ? 'border-red-400' : 'border-slate-600'
                    }`}
                    placeholder="your.email@example.com"
                  />
                  {errors.email && <p className="mt-1 text-sm text-red-400">{errors.email}</p>}
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">
                    Subject *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 bg-slate-700 border rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-400 transition-colors ${
                      errors.subject ? 'border-red-400' : 'border-slate-600'
                    }`}
                    placeholder="What's this about?"
                  />
                  {errors.subject && <p className="mt-1 text-sm text-red-400">{errors.subject}</p>}
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    value={formData.message}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 bg-slate-700 border rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-400 transition-colors resize-vertical ${
                      errors.message ? 'border-red-400' : 'border-slate-600'
                    }`}
                    placeholder="Tell us what's on your mind..."
                  ></textarea>
                  {errors.message && <p className="mt-1 text-sm text-red-400">{errors.message}</p>}
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-teal-500 text-white py-3 px-6 rounded-lg font-semibold hover:bg-teal-600 focus:outline-none focus:ring-2 focus:ring-teal-400 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            </div>

            {/* Contact Info */}
            <div className="space-y-8">
              <div className="bg-slate-800 rounded-2xl p-8">
                <h3 className="text-xl font-bold text-white mb-6">Contact Information</h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-4">
                    <div className="text-teal-400 text-xl">📍</div>
                    <div>
                      <p className="text-white font-medium">Address</p>
                      <p className="text-gray-400">Firststreet 118 2561 abctown</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="text-teal-400 text-xl">📧</div>
                    <div>
                      <p className="text-white font-medium">Email</p>
                      <p className="text-gray-400">example@femail.com</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="text-teal-400 text-xl">📞</div>
                    <div>
                      <p className="text-white font-medium">Phone</p>
                      <p className="text-gray-400">001 2345 442</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-slate-800 rounded-2xl p-8">
                <h3 className="text-xl font-bold text-white mb-4">Quick Tips</h3>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-start space-x-3">
                    <span className="text-teal-400">•</span>
                    <span>Looking for a specific car review? Let us know!</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="text-teal-400">•</span>
                    <span>Have a car story to share? We'd love to feature it.</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="text-teal-400">•</span>
                    <span>Partnership inquiries are always welcome.</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="text-teal-400">•</span>
                    <span>We typically respond within 24 hours.</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
