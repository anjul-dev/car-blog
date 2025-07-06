"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "../Shared/Button";

interface Post {
  id: number;
  title: string;
  body: string;
  author?: { name?: string };
}

interface LatestPostsProps {
  featuredPost: Post;
  trendingPosts: Post[];
  techImages: string[];
}

export default function LatestPosts({
  featuredPost,
  trendingPosts,
  techImages,
}: LatestPostsProps) {
  const [hoveredPostId, setHoveredPostId] = useState<number | null>(null);

  return (
    <section className="bg-white py-16 mx-4 xl:mx-20">
      <div className="grid lg:grid-cols-2 gap-6 xl:gap-12">
        {/* Left - Featured */}
        <div>
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-gray-900 transition-colors duration-300 hover:text-red-500">
              Latest
            </h2>
          </div>
          <div 
            className="
              ml-6 mb-8 border border-gray-200 rounded-lg shadow-md shadow-gray-200
              transition-all duration-500 ease-out
              hover:shadow-xl hover:shadow-red-200/50 hover:border-red-300
              hover:scale-[1.02] hover:-translate-y-2
              group cursor-pointer
            "
            style={{
              willChange: 'transform, box-shadow, border-color',
            }}
          >
            <div className="overflow-hidden rounded-t-lg">
              <Image
                src={techImages[1]}
                alt={featuredPost.title}
                width={800}
                height={300}
                className="
                  w-full mx-auto h-90 object-cover mb-6
                  transition-transform duration-700 ease-out
                  group-hover:scale-105
                "
              />
            </div>
            <div className="p-8 pt-0">
              <div className="flex items-center text-md text-gray-600 mb-3 transition-colors duration-300 group-hover:text-gray-700">
                <span>
                  By{" "}
                  <span className="text-[#FF6666] font-bold transition-colors duration-300 group-hover:text-red-500">
                    {featuredPost.author?.name || "Jane Doe"}
                  </span>
                </span>
                <span className="mx-2">•</span>
                <span>March 17, 2024</span>
              </div>
              <h3 className="
                text-2xl lg:text-3xl font-bold font-[family-name:--font-family-poppins] 
                text-gray-900 mb-4 leading-tight
                transition-colors duration-300 group-hover:text-red-900
              ">
                {featuredPost.title}
              </h3>
              <p className="
                text-gray-600 leading-relaxed mb-6 text-base
                transition-colors duration-300 group-hover:text-gray-700
              ">
                Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                cupidatat non proident. Duis aute irure dolor in reprehenderit
                in voluptate v Duis aute irure dolor in reprehenderit in volusse
                cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                cupidatat non proident.
              </p>
              <Link href={`/posts/${featuredPost.id}`}>
                <Button className="
                  bg-[#FF5959] text-white px-14 py-7 rounded-lg font-medium 
                  transition-all duration-300 ease-out
                  hover:bg-red-600 hover:shadow-lg hover:shadow-red-300/50
                  hover:scale-105 hover:-translate-y-0.5
                  transform active:scale-95
                ">
                  Read more
                </Button>
              </Link>
            </div>
          </div>
        </div>

        {/* Right - Trending */}
        <div className="mx-10">
          <div className="flex justify-between items-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900">Trending Blogs</h3>
            <button className="text-gray-500 hover:text-gray-700 text-sm font-medium transition-colors duration-200">
              See all
            </button>
          </div>

          <div className="space-y-4 xl:space-y-9">
            {trendingPosts.map((post, index) => {
              const isHovered = hoveredPostId === post.id;
              const isDefault = hoveredPostId === null && index === 0;

              return (
                <div
                  key={post.id}
                  onMouseEnter={() => setHoveredPostId(post.id)}
                  onMouseLeave={() => setHoveredPostId(null)}
                  className={`
                    relative p-6 px-10 cursor-pointer rounded 
                    transition-all duration-500 ease-out
                    transform hover:scale-[1.02] hover:-translate-y-1
                    border border-gray-200 shadow-sm
                    ${isHovered 
                      ? 'bg-red-500 text-white shadow-xl border-red-500' 
                      : isDefault 
                        ? 'bg-red-50 border-red-100' 
                        : 'bg-white hover:bg-gray-50'
                    }
                  `}
                  style={{
                    willChange: 'transform, background-color, color, box-shadow',
                  }}
                >
                  {/* Smooth background overlay for better transition */}
                  <div 
                    className={`
                      absolute inset-0 rounded transition-opacity duration-500 ease-out
                      ${isHovered ? 'opacity-100' : 'opacity-0'}
                    `}
                    style={{
                      background: 'linear-gradient(135deg, #ef4444 0%, #dc2626 100%)',
                    }}
                  />
                  
                  {/* Content with relative positioning to stay above overlay */}
                  <div className="relative z-10">
                    <div className="flex items-center text-sm mb-3">
                      <span
                        className={`
                          transition-colors duration-500 ease-out
                          ${isHovered 
                            ? 'text-white' 
                            : isDefault 
                              ? 'text-red-600' 
                              : 'text-gray-500'
                          }
                        `}
                      >
                        By{" "}
                        <span
                          className={`
                            font-bold transition-colors duration-500 ease-out
                            ${isHovered 
                              ? 'text-white' 
                              : 'text-[#FF6666]'
                            }
                          `}
                        >
                          {post.author?.name || "Jane Doe"}
                        </span>
                      </span>
                      <span className="mx-2">•</span>
                      <span
                        className={`
                          transition-colors duration-500 ease-out
                          ${isHovered 
                            ? 'text-white' 
                            : isDefault 
                              ? 'text-red-600' 
                              : 'text-gray-500'
                          }
                        `}
                      >
                        Aug 25, 2024
                      </span>
                    </div>
                    <h4
                      className={`
                        font-bold text-2xl xl:text-3xl leading-tight 
                        transition-colors duration-500 ease-out
                        ${isHovered 
                          ? 'text-white' 
                          : isDefault 
                            ? 'text-red-900' 
                            : 'text-gray-900'
                        }
                      `}
                    >
                      Lorem ipsum dolor sit amet,
                      <br />
                      consectetur adipiscing
                    </h4>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}