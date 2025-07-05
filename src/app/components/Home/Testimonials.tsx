"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Image from "next/image";

interface Testimonial {
  id: number;
  name: string;
  location: string;
  message: string;
  avatar: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Jonathan Vallem",
    location: "New York, USA",
    message:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    avatar: "https://i.pravatar.cc/40?img=1",
  },
  {
    id: 2,
    name: "Sarah Lee",
    location: "London, UK",
    message:
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    avatar: "https://i.pravatar.cc/40?img=2",
  },
  {
    id: 3,
    name: "Akira Tanaka",
    location: "Tokyo, Japan",
    message:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    avatar: "https://i.pravatar.cc/40?img=3",
  },
];

export default function Testimonials() {
  const [index, setIndex] = useState(0);
  const testimonial = testimonials[index];

  const handlePrev = () => {
    setIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="w-full bg-[#232536] text-white py-16">
      <div className="w-full max-w-screen-2xl mx-auto px-4 md:px-16 flex flex-col md:flex-row items-center justify-between gap-12">
        {/* Left Column */}
        <motion.div 
          className="flex-1 max-w-md"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.h4 
            className="text-sm lg:text:md xl:text-lg tracking-widest uppercase text-gray-400 mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Testimonials
          </motion.h4>
          <motion.h2 
            className="text-2xl md:text-3xl xl:text-5xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            What people say <br /> about our blog
          </motion.h2>
          <motion.p 
            className="text-gray-400 text:sm lg:text-md xl:text-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor.
          </motion.p>
        </motion.div>

        <motion.div 
          className="w-px h-50 bg-gray-700 hidden md:block"
          initial={{ opacity: 0, scaleY: 0 }}
          animate={{ opacity: 1, scaleY: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        />

        {/* Right Column */}
        <motion.div 
          className="flex-1 max-w-2xl flex flex-col gap-6"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, x: 30, y: 20 }}
              animate={{ opacity: 1, x: 0, y: 0 }}
              exit={{ opacity: 0, x: -30, y: -20 }}
              transition={{ 
                duration: 0.6, 
                ease: "easeInOut",
                opacity: { duration: 0.4 }
              }}
              className="text-lg md:text-xl lg:text-2xl xl:text-3xl font-bold"
            >
              {testimonial.message}
            </motion.div>
          </AnimatePresence>

          <motion.div 
            className="flex items-center justify-between mt-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1 }}
          >
            <AnimatePresence mode="wait">
              <motion.div 
                key={`${testimonial.id}-info`}
                className="flex items-center gap-3"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
              >
                <motion.div
                  className="relative"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.2 }}
                >
                  <Image
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    width={45}
                    height={45}
                    className="rounded-full object-cover"
                  />
                  <motion.div
                    className="absolute inset-0 rounded-full border-2 border-white opacity-0"
                    whileHover={{ opacity: 1 }}
                    transition={{ duration: 0.2 }}
                  />
                </motion.div>
                <div>
                  <motion.div 
                    className="text-lg lg:text-xl font-semibold"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: 0.1 }}
                  >
                    {testimonial.name}
                  </motion.div>
                  <motion.div 
                    className="text-md lg:text-lg text-gray-400"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: 0.2 }}
                  >
                    {testimonial.location}
                  </motion.div>
                </div>
              </motion.div>
            </AnimatePresence>

            <motion.div 
              className="flex items-center gap-4 mx-5"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 1.2 }}
            >
              <motion.button
                onClick={handlePrev}
                className="w-12 h-12 rounded-full bg-white hover:bg-gray-200 text-black flex items-center justify-center transition-all duration-300"
                aria-label="Previous testimonial"
                whileHover={{ 
                  scale: 1.1,
                  boxShadow: "0 4px 20px rgba(255, 255, 255, 0.3)"
                }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.2 }}
              >
                <ArrowLeft className="w-5 h-5" />
              </motion.button>
              <motion.button
                onClick={handleNext}
                className="w-15 h-15 rounded-full bg-red-500 hover:bg-red-600 text-white flex items-center justify-center transition-all duration-300"
                aria-label="Next testimonial"
                whileHover={{ 
                  scale: 1.1,
                  boxShadow: "0 4px 20px rgba(239, 68, 68, 0.4)"
                }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.2 }}
              >
                <ArrowRight className="w-5 h-5" />
              </motion.button>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}