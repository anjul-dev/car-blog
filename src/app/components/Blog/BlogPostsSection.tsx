
"use client";

import React, { useState, useEffect, useMemo } from "react";
import { useInfiniteScroll } from "@/hooks/useInfiniteScroll";
import { useRandomImages } from "@/hooks/useRandomImages";
import { usePosts } from "@/hooks/usePosts";
import { UNSPLASH_ACCESS_KEY_BLOG } from "@/constant";
import { Button } from "../Shared/Button";
import BlogCard from "./BlogCard";
import LoadingSpinner from "../Shared/LoadingSpinner";
import ErrorComp from "../Shared/ErrorComp";

export const BlogPostsSection = () => {
  const { posts, loading, loadingMore, hasMore, error, loadMorePosts } = usePosts();
  const [searchQuery, setSearchQuery] = useState("");

  const postImages = useRandomImages(posts.length, {
    width: 400,
    height: 300,
    category: "car,supercar,showroom,automotive",
    accessKey: UNSPLASH_ACCESS_KEY_BLOG,
  });

  // Get search query from URL parameters
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const search = urlParams.get("search");
    if (search) {
      setSearchQuery(search);
    }
  }, []);

  // Filter posts based on search query
  const filteredPosts = useMemo(() => {
    if (!searchQuery.trim()) return posts;

    return posts.filter(
      (post) =>
        post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (post.author?.name &&
          post.author.name.toLowerCase().includes(searchQuery.toLowerCase()))
    );
  }, [posts, searchQuery]);

  const { targetRef, resetFetching } = useInfiniteScroll(() => {
    if (!searchQuery.trim()) {
      loadMorePosts();
      setTimeout(resetFetching, 1000);
    }
  });

  console.log('filteredPosts', filteredPosts)

  if (loading) {
    return (
      <LoadingSpinner />
    );
  }

  if (error) {
    return (
      <ErrorComp error={error} />
    );
  }

  return (
    <section className="bg-gray-50 py-16 lg:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
            {searchQuery ? `Search Results for "${searchQuery}"` : "All posts"}
          </h2>
          {searchQuery && (
            <Button
              onClick={() => {
                setSearchQuery("");
                window.history.pushState({}, "", "/blogs");
              }}
              variant="outline"
            >
              Clear Search
            </Button>
          )}
        </div>

        {filteredPosts.length === 0 ? (
          <div className="text-center py-16">
            <div className="text-gray-400 text-8xl mb-6">🔍</div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              {searchQuery ? "No results found" : "No Cars in the Garage"}
            </h3>
            <p className="text-gray-600 text-lg">
              {searchQuery
                ? "Try searching for something else or check your spelling."
                : "Check back later for new automotive adventures!"}
            </p>
          </div>
        ) : (
          <>
            <div className="space-y-8">
              {filteredPosts.map((post, index) => (
                <BlogCard
                  key={post.id}
                  id={post.id}
                  title={post.title}
                  body={post.body}
                  author={post.author}
                  imageUrl={postImages[index]}
                />
              ))}
            </div>

            {/* Infinite Scroll Trigger - only show if not searching */}
            {!searchQuery && hasMore && (
              <div ref={targetRef} className="mt-12 text-center">
                {loadingMore ? (
                  <div className="flex flex-col items-center gap-4">
                    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-red-500"></div>
                    <p className="text-gray-600">Loading more amazing stories...</p>
                  </div>
                ) : (
                  <Button
                    onClick={loadMorePosts}
                    size="lg"
                    className="bg-slate-800 hover:bg-slate-700 text-white px-12 py-4 text-lg"
                  >
                    Load More Stories
                  </Button>
                )}
              </div>
            )}

            {!searchQuery && !hasMore && posts.length > 8 && (
              <div className="mt-12 text-center">
                <p className="text-gray-600 text-lg">
                  You&#39;ve reached the end of our car stories!
                </p>
                <Button
                  className="mt-4 bg-red-500 hover:bg-red-600 text-white"
                  size="lg"
                >
                  Subscribe for More
                </Button>
              </div>
            )}
          </>
        )}
      </div>
    </section>
  );
};