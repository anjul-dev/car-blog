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
  const truncatedBody = body.length > 120 ? body.substring(0, 120) + '...' : body

  return (
    <Link href={`/posts/${id}`} className="block">
      <div className="flex bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300">
        <div className="relative w-48 h-48 flex-shrink-0">
          <Image
            src={imageUrl}
            alt={title}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 192px"
            priority={false}
          />
        </div>
        <div className="flex-1 p-6">
          <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
            {title}
          </h3>

          {author && (
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                <span className="text-white text-sm font-medium">
                  {author.name.charAt(0)}
                </span>
              </div>
              <div className="flex-1">
                <p className="text-gray-900 font-medium text-sm">{author.name}</p>
                <p className="text-gray-500 text-xs">Jan 10, 2024 • 3 min read</p>
              </div>
            </div>
          )}

          <p className="text-gray-600 leading-relaxed mb-6 line-clamp-3 text-sm">
            {truncatedBody}
          </p>

          <button className="bg-red-500 hover:bg-red-600 text-white font-medium px-4 py-2 rounded text-sm">
            Read full article
          </button>
        </div>
      </div>
    </Link>
  )
}

export default BlogCard
