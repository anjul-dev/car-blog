"use client";
import Image from "next/image";

interface AllCategoryProps {
  categoryImages: string[];
}

export default function AllCategory({ categoryImages }: AllCategoryProps) {
  const categories = [
    {
      title: "Car Reviews",
      description:
        "Lorem Ipsum dolor sit amet consectetur. Urna dignissim ac appellatuer in.",
    },
    {
      title: "Maintenance Tips",
      description:
        "Lorem Ipsum dolor sit amet consectetur. Urna dignissim ac appellatuer in.",
    },
    {
      title: "Car Modifications",
      description:
        "Lorem Ipsum dolor sit amet consectetur. Urna dignissim ac appellatuer in.",
    },
    {
      title: "Driving Tips",
      description:
        "Lorem Ipsum dolor sit amet consectetur. Urna dignissim ac appellatuer in.",
    },
  ];

  return (
    <section className="bg-white py-16 border-t border-gray-200 overflow-hidden mx-4 xl:mx-20">
      <div className="px-4 sm:px-6">
        <div className="flex justify-between items-center mb-12">
          <div className="flex items-center">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 transition-colors duration-300 hover:text-[#FF5959]">
              All Category
            </h2>
            <hr className="w-10 border-t-2 border-gray-900 ml-5 transition-all duration-300 hover:w-16 hover:border-[#FF5959]" />
          </div>
          <button className="text-gray-500 hover:text-gray-700 text-sm sm:text-base transition-colors duration-200 hover:scale-105 transform">
            See All
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 lg:gap-12 sm:gap-8">
          {categories.map((category, index) => (
            <div
              key={index}
              className="
                text-center gap-7 p-6 py-10 bg-[#F4F0F8] rounded-lg shadow-sm 
                transition-all duration-500 ease-out
                hover:shadow-xl hover:shadow-red-200/50 hover:border hover:border-red-300
                hover:scale-[1.05] hover:-translate-y-3
                group cursor-pointer
                relative overflow-hidden
              "
              style={{
                willChange: 'transform, box-shadow, border-color',
              }}
            >
              {/* Subtle gradient overlay on hover */}
              <div className="
                absolute inset-0 bg-gradient-to-br from-red-50/50 to-transparent 
                opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-out
                rounded-lg
              " />
              
              {/* Content with relative positioning */}
              <div className="relative z-10">
                <div className="
                  w-18 h-18 bg-gray-200 rounded-full overflow-hidden 
                  flex items-center justify-center mx-auto mb-7 relative
                  transition-all duration-400 ease-out
                  group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-red-200/50
                  ring-4 ring-transparent group-hover:ring-red-200
                ">
                  <Image
                    src={categoryImages[index]}
                    alt="Category"
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <h3 className="
                  text-base sm:text-lg lg:text-xl font-bold text-gray-900 mb-3
                  transition-colors duration-300 group-hover:text-[#FF5959]
                ">
                  {category.title}
                </h3>
                <p className="
                  text-gray-600 text-xs sm:text-sm lg:text-md leading-relaxed
                  transition-colors duration-300 group-hover:text-red-700
                ">
                  {category.description}
                </p>
              </div>
              
              {/* Hover indicator dot */}
              <div className="
                absolute top-4 right-4 w-2 h-2 bg-[#FF5959] rounded-full
                opacity-0 group-hover:opacity-100 transition-all duration-300
                scale-50 group-hover:scale-100
              " />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}