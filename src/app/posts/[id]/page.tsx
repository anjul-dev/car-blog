'use client';

import React from 'react';
import { useParams } from 'next/navigation';
import Image from 'next/image';
import { UNSPLASH_ACCESS_KEY_DETAIL, UNSPLASH_ACCESS_KEY_HOME } from '@/constant';
import { useRandomImage, useRandomImages } from '@/hooks/useRandomImages';
import { usePost } from '@/hooks/usePosts';
import AllCategory from '@/app/components/Home/AllCategory';
import ErrorComp from '@/app/components/Shared/ErrorComp';
import LoadingSpinner from '@/app/components/Shared/LoadingSpinner';
import ArticalContaint from '@/app/components/PostDetail/ArticalContaint';

const BlogDetail = () => {
  const params = useParams();
  const id = params?.id?.toString();

  const { post, loading, error } = usePost(id ?? '');

  const imageUrl = useRandomImage({
    width: 1200,
    height: 600,
    category: 'car',
    seed: id,
    accessKey: UNSPLASH_ACCESS_KEY_HOME,
  });

  const categoryImages = useRandomImages(4, {
    width: 300,
    height: 200,
    category: "car categories",
    accessKey: UNSPLASH_ACCESS_KEY_DETAIL,
  });

  if (loading) {
    return (
      <LoadingSpinner />
    );
  }

  if (error || !post) {
    return (
        <ErrorComp error={error} />
    );
  }

  return (
    <article className="bg-white mx-[7%]">
      {/* Header Image */}
      <div className="w-full h-60 md:h-[500px] relative">
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

      <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
        {post.title}
      </h1>

      {post.author && (
        <div className="flex items-center space-x-4 mb-8">
          <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
            {/* <span className="text-white font-bold text-lg"> */}
              {post.author.name.charAt(0)}
            {/* </span> */}
          </div>
          <div className='flex flex-wrap gap-12'>
            <p className="text-gray-900 font-bold text-xl">{post.author.name}</p>
            <div className="flex items-center flex-wrap space-x-4  text-lg">
              <span>Jan 10, 2024</span>
              <span>•</span>
              <span>3 Min Read</span>
            </div>
          </div>
        </div>
      )}

      {/* Article Content */}
      <ArticalContaint post={post} />

      {/* All Category Section */}
      <AllCategory categoryImages={categoryImages} />
    </article>
  );
};

export default BlogDetail;
