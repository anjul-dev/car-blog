'use client';

import React from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import CarSpecs from '@/app/components/PostDetail/CarSpecs';
import { UNSPLASH_ACCESS_KEY_DETAIL } from '@/constant';
import { useRandomImage, useRandomImages } from '@/hooks/useRandomImages';
import { usePost } from '@/hooks/usePosts';
import AllCategory from '@/app/components/Home/AllCategory';

const BlogDetail = () => {
  const params = useParams();
  const id = params?.id?.toString();

  const { post, loading, error } = usePost(id ?? '');

  const imageUrl = useRandomImage({ 
    width: 1200, 
    height: 600, 
    category: 'car,automotive', 
    seed: id,
    accessKey: UNSPLASH_ACCESS_KEY_DETAIL,
  });

  const categoryImages = useRandomImages(4, {
    width: 300,
    height: 200,
    category: "car categories",
    accessKey: UNSPLASH_ACCESS_KEY_DETAIL,
  });

  if (loading) {
    return (
      <div className="container mx-auto px-4 py-20">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-red-500 mx-auto mb-4"></div>
          <p className="text-gray-600 text-lg">Loading article...</p>
        </div>
      </div>
    );
  }

  if (error || !post) {
    return (
      <div className="container mx-auto px-4 py-20">
        <div className="text-center">
          <div className="text-red-500 text-6xl mb-4">⚠️</div>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Article not found</h2>
          <p className="text-gray-600 mb-8">{error || "The article you're looking for doesn't exist."}</p>
          <Link 
            href="/blogs" 
            className="bg-red-500 text-white px-6 py-3 rounded-lg font-medium hover:bg-red-600 transition-colors inline-block"
          >
            Back to Blogs
          </Link>
        </div>
      </div>
    );
  }

  return (
    <article className="bg-white">
      {/* Header Image */}
      <div className="w-full h-96 md:h-[500px] relative">
        {imageUrl && (
          <Image 
            src={imageUrl}
            alt={post.title}
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
        )}
        <div className="absolute inset-0 bg-black/20"></div>
      </div>

      {/* Article Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            {post.title}
          </h1>
          
          {post.author && (
            <div className="flex items-center space-x-4 mb-8">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-lg">
                  {post.author.name.charAt(0)}
                </span>
              </div>
              <div>
                <p className="text-gray-900 font-semibold">{post.author.name}</p>
                <div className="flex items-center space-x-4 text-gray-600 text-sm">
                  <span>Jan 10, 2024</span>
                  <span>•</span>
                  <span>3 Min Read</span>
                </div>
              </div>
            </div>
          )}

          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <div className="prose prose-lg max-w-none">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.
                </h2>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  {post.body}
                </p>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non blandit massa enim nec. Scelerisque viverra mauris in aliquam sem.
                </p>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.
                </h2>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non blandit massa enim nec.
                </p>
                <ul className="list-disc list-inside text-gray-700 space-y-2 mb-8">
                  <li>Lorem ipsum dolor sit amet</li>
                  <li>Non blandit massa enim nec scelerisque</li>
                  <li>Neque egestas congue quisque egestas</li>
                </ul>
              </div>
            </div>

            <div className="lg:col-span-1">
              <div className="sticky top-24 space-y-8">
                <CarSpecs />
                {post.author && (
                  <div className="bg-gray-50 rounded-xl p-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">About the Author</h3>
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                        <span className="text-white font-bold text-lg">
                          {post.author.name.charAt(0)}
                        </span>
                      </div>
                      <div>
                        <p className="text-gray-900 font-semibold">{post.author.name}</p>
                        <p className="text-gray-600 text-sm">{post.author.email}</p>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-gray-200">
            <Link 
              href="/blogs" 
              className="inline-flex items-center text-red-500 hover:text-red-600 transition-colors"
            >
              ← Back to Blogs
            </Link>
          </div>
        </div>
      </div>

      {/* All Category Section */}
      <AllCategory categoryImages={categoryImages} />
    </article>
  );
};

export default BlogDetail;
