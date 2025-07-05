import React from 'react';

const About = () => {
  return (
    <>
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">About Our Car Blog</h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              Your trusted source for automotive insights, reviews, and the latest industry trends.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <div>
              <img 
                src="https://source.unsplash.com/600x400/?garage,cars"
                alt="Car garage"
                className="w-full h-64 object-cover rounded-xl"
              />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-white mb-4">Why This Car Blog Exists</h2>
              <p className="text-gray-300 mb-4 leading-relaxed">
                We created this platform to bridge the gap between automotive enthusiasts and the ever-evolving world of cars. 
                Our mission is to provide honest, detailed, and accessible information about vehicles that matter to you.
              </p>
              <p className="text-gray-300 leading-relaxed">
                Whether you're a first-time buyer, a seasoned enthusiast, or someone curious about the latest automotive technologies, 
                we're here to guide your journey.
              </p>
            </div>
          </div>

          <div className="bg-slate-800 rounded-2xl p-8 mb-16">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">What We Cover</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-4xl mb-4">🔋</div>
                <h3 className="text-lg font-semibold text-white mb-2">Electric Vehicles</h3>
                <p className="text-gray-400 text-sm">Comprehensive reviews and guides on the latest EVs, charging infrastructure, and sustainable mobility.</p>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-4">🚙</div>
                <h3 className="text-lg font-semibold text-white mb-2">SUV Reviews</h3>
                <p className="text-gray-400 text-sm">In-depth analysis of family-friendly SUVs, luxury options, and off-road capabilities.</p>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-4">🔧</div>
                <h3 className="text-lg font-semibold text-white mb-2">Maintenance Tips</h3>
                <p className="text-gray-400 text-sm">Expert advice on car care, DIY maintenance, and how to extend your vehicle's lifespan.</p>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-4">🏎️</div>
                <h3 className="text-lg font-semibold text-white mb-2">Performance Cars</h3>
                <p className="text-gray-400 text-sm">Track tests, performance comparisons, and everything about high-performance vehicles.</p>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-4">💰</div>
                <h3 className="text-lg font-semibold text-white mb-2">Buying Guides</h3>
                <p className="text-gray-400 text-sm">Smart purchasing decisions, financing options, and value retention insights.</p>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-4">🚗</div>
                <h3 className="text-lg font-semibold text-white mb-2">Classic Cars</h3>
                <p className="text-gray-400 text-sm">Celebrating automotive heritage, restoration projects, and timeless designs.</p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-teal-600 to-teal-800 rounded-2xl p-8 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">Tech Stack</h2>
            <p className="text-teal-100 mb-6">
              This modern car blog is built using cutting-edge web technologies for the best user experience.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              {[
                'React', 'TypeScript', 'Tailwind CSS', 'React Router', 
                'REST APIs', 'Responsive Design', 'Modern UI/UX'
              ].map((tech, index) => (
                <span 
                  key={index}
                  className="bg-white/20 text-white px-4 py-2 rounded-full text-sm font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
