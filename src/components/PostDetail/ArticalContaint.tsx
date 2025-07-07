import { PostWithAuthor } from "@/hooks/usePosts";
import Link from "next/link";
import CarSpecs from "./CarSpecs";

export default function ArticalContaint ({post}: {post: PostWithAuthor}) {
    return (
        <div className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto">
          <div className=" gap-12">
            <div className="lg:col-span-2">
              <div className="prose prose-lg max-w-none">
                <h2 className="text-4xl font-bold text-gray-900 mb-4">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.
                </h2>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  {post.body}
                </p>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non blandit massa enim nec. Scelerisque viverra mauris in aliquam sem.
                </p>
                <h2 className="text-4xl font-bold text-gray-900 mb-4">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.
                </h2>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non blandit massa enim nec.
                </p>
                <ul className="list-disc list-inside text-gray-700 space-y-2 mb-8 text-2xl font-bold">
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

          <div className="mt-12 pt-8">
            <Link
              href="/blogs"
              className="inline-flex items-center text-red-500 hover:text-red-600 transition-colors"
            >
              ← Back to Blogs
            </Link>
          </div>
        </div>
      </div>
    )
}