"use client";
import Image from "next/image";
import { Button } from "../Shared/Button";

export const HeroSection = () => {
  return (
    <section className="relative bg-slate-900 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          <div className="max-w-xl lg:max-w-none">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight mb-6">
              Your Journey
              <br />
              Your Car
              <br />
              <span className="text-red-400">Your Way</span>
            </h1>
            <p className="text-gray-300 text-lg sm:text-xl mb-8 leading-relaxed max-w-lg">
              Lorem ipsum dolor sit amet consectetur. Diam vulputate morbi
              imperdiet feugiat in ipsum cras ut. Consectetur ornare velit.
              Magna iaculis mauris sit tincidunt mauris ante adipiscing neque.
            </p>
            <Button
              size="lg"
              className="bg-red-500 hover:bg-red-600 text-white font-medium px-8 py-4 text-lg rounded-md"
            >
              Subscribe ♡
            </Button>
          </div>

          {/* Right Image Grid */}
          <div className="relative h-[400px] lg:h-[300px]">
            <div className="grid grid-cols-2 gap-3 h-full">
              {/* Left Column - Two equal images */}
              <div className="flex flex-col gap-3">
                <div className="flex-1 relative overflow-hidden rounded-lg">
                  <Image
                    src="https://images.pexels.com/photos/1545743/pexels-photo-1545743.jpeg?auto=compress&cs=tinysrgb&w=600"
                    alt="Classic muscle car"
                    fill
                    className="object-cover"
                  />
                </div>

                <div className="flex-1 relative overflow-hidden rounded-lg">
                  <Image
                    src="https://images.pexels.com/photos/2127733/pexels-photo-2127733.jpeg?auto=compress&cs=tinysrgb&w=600"
                    alt="Yellow sports car"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>

              {/* Right Column - Three images with different heights */}
              <div className="flex flex-col gap-3">
                <div className="h-32 relative overflow-hidden rounded-lg">
                  <Image
                    src="https://images.pexels.com/photos/3593922/pexels-photo-3593922.jpeg?auto=compress&cs=tinysrgb&w=600"
                    alt="Blue sports car"
                    fill
                    className="object-cover"
                  />
                </div>

                <div className="flex-1 relative overflow-hidden rounded-lg">
                  <Image
                    src="https://images.pexels.com/photos/1119796/pexels-photo-1119796.jpeg?auto=compress&cs=tinysrgb&w=600"
                    alt="Luxury sedan"
                    fill
                    className="object-cover"
                  />
                </div>

                <div className="h-32 relative overflow-hidden rounded-lg">
                  <Image
                    src="https://images.pexels.com/photos/1035108/pexels-photo-1035108.jpeg?auto=compress&cs=tinysrgb&w=600"
                    alt="Modern car"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
