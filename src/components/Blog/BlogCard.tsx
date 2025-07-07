'use client'

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

interface Author {
  id: number
  name: string
  username: string
  email: string
}

interface BlogCardProps {
  id: number
  title: string
  body: string
  author?: Author
  imageUrl: string
}

const BlogCard = ({ id, title, body, author, imageUrl }: BlogCardProps) => {
  const imageAdd = "https://images.unsplash.com/photo-1704340142770-b52988e5b6eb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDF8MHxzZWFyY2h8MXx8Y2FyfGVufDB8fDB8fHww";
  
  return (
    <Link
      href={`/posts/${id}`}
      className="max-w-full h-auto md:h-[250px] flex md:flex-row flex-col gap-4 group transition-all duration-300 hover:shadow-xl hover:shadow-gray-200 hover:-translate-y-1 cursor-pointer"
    >
      {/* Image container */}
      <div className="relative md:h-full md:w-[40vw] h-[200px] w-full overflow-hidden">
        <Image
          src={imageUrl || imageAdd}
          alt={title}
          fill
          className="object-cover rounded transition-transform duration-500 group-hover:scale-110"
          sizes="(max-width: 768px) 100vw, 40vw"
        />
        <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded" />
      </div>

      {/* Content */}
      <div className="md:max-w-[60vw] w-full md:h-full h-auto flex flex-col justify-between md:py-2 p-4">
        <h3 className="capitalize text-2xl font-bold text-gray-900 mb-3 line-clamp-2 transition-colors duration-300">
          {title}
        </h3>

        {author && (
          <div className="flex items-center gap-2 mb-4">
            <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center transition-transform duration-300 group-hover:scale-110 group-hover:rotate-12">
              <span className="text-white text-sm font-medium">
                {author.name.charAt(0)}
              </span>
            </div>
            <div className="flex-1">
              <p className="first-letter:uppercase text-gray-900 font-medium text-xs transition-colors duration-300 group-hover:text-gray-700">
                {author.name}
              </p>
              <p className="text-gray-500 text-xs transition-colors duration-300 group-hover:text-gray-600">
                Jan 10, 2024 &nbsp; • &nbsp; 3 min read
              </p>
            </div>
          </div>
        )}

        <p className="first-letter:uppercase leading-relaxed mb-6 text-md md:block hidden transition-colors duration-300 group-hover:text-gray-700">
          {body}
        </p>

        <p className="first-letter:uppercase leading-relaxed mb-6 text-sm md:hidden block line-clamp-3 transition-colors duration-300 group-hover:text-gray-700">
          {body}
        </p>

        <button className="bg-red-400 cursor-pointer hover:bg-red-600 transition-all duration-300 text-white font-medium px-8 py-2 max-w-max rounded text-sm transform group-hover:scale-105 group-hover:shadow-lg hover:shadow-red-300">
          Read full article...
        </button>
      </div>
    </Link>
  )
}

export default BlogCard