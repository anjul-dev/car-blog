"use client";

import { usePosts } from "@/hooks/usePosts";
import { useRandomImages } from "@/hooks/useRandomImages";
import { UNSPLASH_ACCESS_KEY_HOME } from "@/constant";
import ErrorComp from "@/components/Shared/ErrorComp";
import LoadingSpinner from "@/components/Shared/LoadingSpinner";
import HeroSection from "@/components/Home/HeroSection";
import LatestPosts from "@/components/Home/LatestPosts";
import NewTechnology from "@/components/Home/NewTechnology";
import AllCategory from "@/components/Home/AllCategory";
import Testimonials from "@/components/Home/Testimonials";

export default function Home() {
  const { posts, loading, error } = usePosts();

  const heroImage =
    "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?q=80&w=1883&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
  const techImages = useRandomImages(8, {
    width: 300,
    height: 200,
    category: "car,technology",
    accessKey: UNSPLASH_ACCESS_KEY_HOME!,
  });

  const categoryImages = useRandomImages(4, {
    width: 300,
    height: 200,
    category: "car categories",
    accessKey: UNSPLASH_ACCESS_KEY_HOME!,
  });

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

  if (posts.length === 0) {
    return (
      <div className="px-4 py-20 text-center">
        <div className="text-gray-400 text-6xl mb-4">📝</div>
        <h2 className="text-2xl font-bold text-white mb-4">
          No blogs available
        </h2>
        <p className="text-gray-400">
          Check back later for new car blog posts!
        </p>
      </div>
    );
  }

  const featuredPost = posts[0];
  const trendingPosts = posts.slice(1, 5);
  const newTechPosts = [...posts].reverse().slice(0, 8);

  
  return (
    <div>
      <HeroSection heroImage={heroImage} />
      <LatestPosts featuredPost={featuredPost} trendingPosts={trendingPosts} techImages={techImages} />
      <NewTechnology posts={newTechPosts} techImages={techImages} />
      <AllCategory categoryImages={categoryImages} />
      <Testimonials />
      <NewTechnology posts={newTechPosts} techImages={techImages} imagesOffset={4} />
    </div>
  );
}
