"use client";
import { ShareIcon } from "lucide-react";
import { Button } from "../UI/Button";

interface HeroSectionProps {
  heroImage: string;
}

export default function HeroSection({ heroImage }: HeroSectionProps) {
    
  return (
    <section className="min-w-fit relative overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0"></div>
      </div>
      <div className="relative px-4 sm:px-16 py-6 lg:py-20">
        <div className="grid lg:grid-cols-1 gap-0 lg:gap-12 items-center max-w-2/3 md:max-w-1/2  lg:max-w-full">
          <div className="max-w-lg xl:max-w-1/2">
            <h1 className="text-3xl xl:text-7xl lg:text-5xl font-bold text-white leading-tight mb-6 lg:mb-10">
              Your Journey
              <br />
              Your Car
              <br />
              <span className="text-white">Your Way</span>
            </h1>
            <p className="text-gray-300 text-base text-md lg:text-lg xl:text-xl line-clamp-2 md:line-clamp-none mb-6 lg:mb-12 leading-relaxed">
              Lorem ipsum dolor sit amet consectetur. Diam volutpat morbi
              elementum vel euismod aliquam.
            </p>
            <Button className="bg-[#FF5959] text-white px-6 lg:px-8 xl:px-10 py-4 lg:py-8 text-sm lg:text-lg rounded-lg font-bold hover:bg-red-600 transition-colors flex items-center gap-2">
              Subscribe <ShareIcon />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
