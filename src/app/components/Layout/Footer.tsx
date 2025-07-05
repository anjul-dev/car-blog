'use client'
import React, { useState, useEffect } from "react";
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

const Footer = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);
  
  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      setIsSubscribed(true);
      setTimeout(() => {
        setIsSubscribed(false);
        setEmail("");
      }, 2000);
    }
  };

  return (
    <footer className="bg-[#232536] text-white font-sans overflow-hidden">
      <div 
        className={`mx-4 sm:mx-6 md:mx-8 lg:mx-10 px-4 sm:px-6 py-8 sm:py-10 md:py-12 space-y-6 sm:space-y-8 transform transition-all duration-1000 ease-out ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
        }`}
      >
        {/* Top Section: Logo and Navigation */}
        <div className="flex flex-col lg:flex-row justify-between items-center gap-6 sm:gap-8">
          {/* Logo Section */}
          <div 
            className="flex flex-row items-center space-x-3 group cursor-pointer transform transition-all duration-300 hover:scale-105"
          >
            <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-13 md:h-13 bg-[#FFD6D6] rounded-full flex items-center justify-center relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-pink-300 to-red-300 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative z-10 w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 bg-white rounded-full transform group-hover:rotate-180 transition-transform duration-500"></div>
            </div>
            <span className="text-white font-bold text-base sm:text-lg md:text-xl group-hover:text-[#FFD6D6] transition-colors duration-300">
              LOGO
            </span>
          </div>
          
          {/* Navigation - Stacked on mobile/tablet, horizontal on desktop */}
          <nav className="flex flex-wrap justify-center lg:justify-end gap-4 sm:gap-6 text-gray-300 text-sm sm:text-base md:text-lg lg:text-xl">
            {['Home', 'Blog', 'About us', 'Contact us', 'Privacy Policy'].map((item, index) => (
              <a
                key={item}
                href={item === 'Home' ? '/' : `/${item.toLowerCase().replace(' ', '-')}`}
                className="relative group hover:text-white transition-all duration-300 transform hover:-translate-y-1 px-2 py-1"
                style={{
                  animationDelay: `${index * 100}ms`
                }}
              >
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#FFD6D6] group-hover:w-full transition-all duration-300"></span>
              </a>
            ))}
          </nav>
        </div>

        {/* Middle Section: Newsletter - Full width on mobile, side-by-side on desktop */}
        <div 
          className="flex flex-col lg:flex-row items-center gap-6 sm:gap-8 w-full bg-[#2A2B39] py-8 sm:py-12 md:py-14 xl:py-20 px-4 sm:px-6 md:px-8 lg:px-10 my-6 sm:my-8 md:my-10 lg:my-15 rounded-xl sm:rounded-2xl relative overflow-hidden transform transition-all duration-700 hover:bg-[#2E2F3D] group"
        >
          {/* Animated background gradient */}
          <div className="absolute inset-0 bg-gradient-to-r from-red-500/10 to-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          
          {/* Left Half - Newsletter Title */}
          <div className="w-full lg:w-1/2 relative z-10 text-center lg:text-left">
            <h3 className="text-white text-xl sm:text-2xl md:text-3xl lg:text-4xl font-extrabold leading-tight transform transition-all duration-500 group-hover:scale-105">
              <span className="inline-block transition-all duration-300 hover:text-[#FFD6D6]">
                Subscribe to our newsletter to get
              </span>
              <br className="hidden sm:block" />
              <span className="inline-block transition-all duration-300 delay-100 hover:text-[#FFD6D6]">
                latest updates and news
              </span>
            </h3>
          </div>
          
          {/* Right Half - Newsletter Form */}
          <div className="w-full lg:w-1/2 flex flex-col sm:flex-row gap-3 relative z-10">
            <div className="flex flex-col sm:flex-row gap-3 w-full">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="example@email.com"
                className="flex-1 min-w-0 px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base bg-white text-slate-900 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-400 placeholder-gray-500 transform transition-all duration-300 focus:scale-105 hover:shadow-lg"
                onKeyPress={(e) => e.key === 'Enter' && handleSubscribe(e)}
              />
              <button 
                onClick={handleSubscribe}
                className={`px-4 sm:px-6 py-2 sm:py-3 rounded-lg font-medium transition-all duration-300 flex items-center justify-center gap-2 whitespace-nowrap transform hover:scale-105 hover:shadow-lg text-sm sm:text-base ${
                  isSubscribed 
                    ? 'bg-green-500 text-white' 
                    : 'bg-red-500 text-white hover:bg-red-600'
                }`}
              >
                <span className="transition-all duration-300">
                  {isSubscribed ? 'Subscribed!' : 'Subscribe'}
                </span>
                <span className={`text-base sm:text-lg transition-all duration-500 ${
                  isSubscribed ? 'rotate-180' : 'hover:translate-x-1'
                }`}>
                  {isSubscribed ? '✓' : '✈'}
                </span>
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Section: Address and Social - Stacked on mobile, side-by-side on desktop */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 sm:gap-8">
          {/* Contact Information */}
          <div className="text-center md:text-left space-y-1 text-gray-300 text-xs sm:text-sm transform transition-all duration-500 hover:text-white">
            <p className="transition-all duration-300 hover:translate-x-2">
              Firststreet 118 2561 abctown
            </p>
            <p className="transition-all duration-300 hover:translate-x-2 delay-100">
              example@femail.com | 001 23345 442
            </p>
          </div>
          
          {/* Social Media Icons */}
          <div className="flex space-x-3 sm:space-x-4">
            {[
              { Icon: Facebook, color: 'hover:bg-blue-600', name: 'Facebook' },
              { Icon: Twitter, color: 'hover:bg-blue-400', name: 'Twitter' },
              { Icon: Instagram, color: 'hover:bg-gradient-to-r hover:from-purple-500 hover:to-pink-500', name: 'Instagram' },
              { Icon: Linkedin, color: 'hover:bg-blue-700', name: 'LinkedIn' }
            ].map(({ Icon, color, name }, i) => (
              <div
                key={name}
                className={`w-8 h-8 sm:w-10 sm:h-10 bg-slate-700 rounded-full flex items-center justify-center ${color} transition-all duration-300 cursor-pointer transform hover:scale-110 hover:-translate-y-1 hover:shadow-lg group`}
                style={{
                  animationDelay: `${i * 100}ms`
                }}
                title={name}
              >
                <Icon 
                  size={14} 
                  className="sm:w-[18px] sm:h-[18px] text-white transition-all duration-300 group-hover:scale-110" 
                />
              </div>
            ))}
          </div>
        </div>

        {/* Animated bottom border */}
        <div className="w-full h-0.5 bg-gradient-to-r from-transparent via-[#FFD6D6] to-transparent opacity-30 animate-pulse"></div>
      </div>
    </footer>
  );
};

export default Footer;