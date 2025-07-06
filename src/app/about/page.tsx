import React from "react";
import Image from "next/image";

const About = () => {

  const imageAdd = "https://images.unsplash.com/photo-1704340142770-b52988e5b6eb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDF8MHxzZWFyY2h8MXx8Y2FyfGVufDB8fDB8fHww";
  
  return (
    <div className="bg-gray-50 text-gray-800 min-h-screen px-4 py-16">
      <div className="container mx-auto px-4 max-w-5xl">
        {/* Intro */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            About Our Car Blog
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
            Your trusted source for automotive insights, reviews, and the latest trends.
          </p>
        </div>

        {/* Why this blog exists */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
            <Image
              src={imageAdd}
              alt="Car garage"
              width={500}
              height={256}
              className="w-full h-64 object-cover rounded-xl shadow-md"
              style={{ width: "100%", height: "16rem", objectFit: "cover" }}
              priority
            />
          <div>
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-4">
              Why This Car Blog Exists
            </h2>
            <p className="mb-4 leading-relaxed text-gray-700">
              We created this platform to bridge the gap between automotive enthusiasts and the ever-evolving world of cars.
              Our mission is to provide honest, detailed, and accessible information about vehicles that matter to you.
            </p>
            <p className="leading-relaxed text-gray-700">
              Whether you&#39;re a first-time buyer, a seasoned enthusiast, or simply curious about the latest automotive technologies, we’re here to guide your journey.
            </p>
          </div>
        </div>

        {/* What we cover */}
        <div className="bg-white rounded-2xl p-8 mb-20 shadow">
          <h2 className="text-3xl font-semibold text-gray-900 text-center mb-10">
            What We Cover
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: "🔋",
                title: "Electric Vehicles",
                desc: "Reviews and guides on the latest EVs, charging infrastructure, and sustainable mobility."
              },
              {
                icon: "🚙",
                title: "SUV Reviews",
                desc: "In-depth analysis of SUVs, luxury options, and off-road capabilities."
              },
              {
                icon: "🔧",
                title: "Maintenance Tips",
                desc: "Expert advice on car care, DIY maintenance, and prolonging vehicle lifespan."
              },
              {
                icon: "🏎️",
                title: "Performance Cars",
                desc: "Track tests, performance comparisons, and all about high-performance vehicles."
              },
              {
                icon: "💰",
                title: "Buying Guides",
                desc: "Smart purchasing decisions, financing options, and value retention insights."
              },
              {
                icon: "🚗",
                title: "Classic Cars",
                desc: "Celebrating automotive heritage, restoration projects, and timeless designs."
              }
            ].map((item, index) => (
              <div
                key={index}
                className="text-center bg-gray-100 rounded-xl p-6 hover:bg-gray-200 transition"
              >
                <div className="text-4xl mb-3">{item.icon}</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-700 text-sm">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Tech Stack */}
        <div className="bg-gradient-to-r from-[#232536] to-[#232550] rounded-2xl p-10 text-center shadow-lg text-white">
          <h2 className="text-3xl font-semibold mb-4">
            Tech Stack
          </h2>
          <p className="mb-6 max-w-2xl mx-auto text-teal-100">
            This modern car blog is built using cutting-edge web technologies for a seamless and responsive experience.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              "React",
              "TypeScript",
              "Tailwind CSS",
              "React Router",
              "REST APIs",
              "Responsive Design",
              "Modern UI/UX"
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
  );
};

export default About;
