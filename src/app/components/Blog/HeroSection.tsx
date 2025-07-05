"use client";

import { useRandomImages } from "@/hooks/useRandomImages";
import { UNSPLASH_ACCESS_KEY} from "@/constant";
import Image from "next/image";
import { Button } from "../UI/Button";

export const HeroSection = () => {
  const heroImages = useRandomImages(3, {
    width: 600,
    height: 400,
    category: "car full body, car side view, complete car, luxury car, supercar",
    accessKey: UNSPLASH_ACCESS_KEY,
  });
  const heroImagesReady = heroImages.length >= 3;

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

          <div className="grid grid-cols-2 gap-4 lg:gap-6 max-w-lg mx-auto lg:max-w-none">
            <div className="space-y-4 lg:space-y-6">
              {heroImagesReady && (
                <>
                  <Image
                    src={heroImages[0]}
                    alt="Luxury Sports Car"
                    width={800}
                    height={400}
                    className="w-full h-48 sm:h-56 lg:h-64 object-cover rounded-2xl"
                  />
                  <Image
                    src={heroImages[1]}
                    alt="Electric Vehicle"
                    width={800}
                    height={300}
                    className="w-full h-32 sm:h-40 lg:h-48 object-cover rounded-2xl"
                  />
                </>
              )}
            </div>

            <div className="pt-8 lg:pt-12">
              {heroImagesReady && (
                <Image
                  src={heroImages[2]}
                  alt="Classic Car"
                  width={800}
                  height={500}
                  className="w-full h-56 sm:h-64 lg:h-80 object-cover rounded-2xl"
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};