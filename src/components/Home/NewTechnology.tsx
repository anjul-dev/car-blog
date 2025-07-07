"use client";
import Image from "next/image";

interface Post {
  id: number;
  title: string;
  author?: { name?: string };
  date?: string;
}

interface NewTechnologyProps {
  posts: Post[];
  techImages: string[];
  imagesOffset?: number;
}

export default function NewTechnology({
  posts,
  techImages,
  imagesOffset = 0,
}: NewTechnologyProps) {
  return (
    <section className="bg-white py-20 border-t border-gray-200 overflow-hidden mx-4 xl:mx-20">
      <div className="px-4 sm:px-6">
        <div className="flex justify-between items-center mb-12">
          <div className="flex items-center">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 transition-colors duration-300 hover:text-[#FF5959]">
              New Technology
            </h2>
            <hr className="w-10 border-t-2 border-gray-900 ml-5 transition-all duration-300 hover:w-16 hover:border-[#FF5959]" />
          </div>
          <button className="text-gray-500 hover:text-gray-700 text-sm sm:text-base transition-colors duration-200 hover:scale-105 transform">
            See All
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {posts.slice(0, 4).map((post, index) => (
            <div
              key={post.id}
              className="
                bg-[#F4F0F8] rounded-lg border border-gray-200 overflow-hidden 
                transition-all duration-500 ease-out
                hover:shadow-lg hover:shadow-red-200/50 hover:border-gray-300
                hover:scale-[1.03] hover:-translate-y-2
                group cursor-pointer
              "
              style={{
                willChange: 'transform, box-shadow, border-color',
              }}
            >
              <div className="overflow-hidden rounded-t-lg">
                <Image
                  src={techImages[index + imagesOffset]}
                  alt="Car Technology"
                  width={300}
                  height={200}
                  className="
                    w-full h-40 sm:h-50 object-cover
                    transition-transform duration-700 ease-out
                    group-hover:scale-110
                  "
                />
              </div>
              <div className="p-4 py-6">
                <h4 className="
                  font-bold text-[#2B2C34] mb-2 line-clamp-2 text-lg pb-4
                  transition-colors duration-300
                ">
                  {post.title}, New Technology in Cars....
                </h4>
                <div className="flex items-center justify-between text-xs sm:text-sm text-gray-500">
                  <div className="flex items-center">
                    <div className="
                      w-11 h-11 rounded-full mr-3 overflow-hidden
                      transition-transform duration-300 group-hover:scale-110
                      ring-2 ring-transparent group-hover:ring-red-300
                    ">
                      <Image
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwwYBs7BIZaJ0jOfKhG9gIV-KHw6UMJFG-gI1oBd2OTImE1KBp4awVOSDC-Yp1d3EV2OY&usqp=CAU"
                        alt="Author"
                        width={28}
                        height={28}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex flex-col">
                      <span className="
                        font-semibold text-black
                        transition-colors duration-300 group-hover:text-[#FF5959]
                      ">
                        {post.author?.name || "Dasteen"}
                      </span>
                      <span className="
                        text-gray-400
                        transition-colors duration-300 group-hover:text-red-500
                      ">
                        {post.date || "Jan 10, 2024"}
                      </span>
                    </div>
                  </div>
                  <span className="
                    transition-colors duration-300 group-hover:text-red-600
                  ">
                    3 Min Read
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}