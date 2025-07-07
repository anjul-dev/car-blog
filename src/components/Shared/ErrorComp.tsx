import Link from "next/link";
import React from "react";

interface Error {
  error: string | null
}

export default function ErrorComp( {error}: Error) {
  return (
    <div className="container mx-auto px-4 py-20">
      <div className="text-center">
        <div className="text-red-500 text-6xl mb-4">⚠️</div>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          Some Error...
        </h2>
        <p className="text-gray-600 mb-8">
          {error || "The article you're looking for doesn't exist."}
        </p>
        <Link
          href="/"
          className="bg-red-500 text-white px-6 py-3 rounded-lg font-medium hover:bg-red-600 transition-colors inline-block"
        >
          Go Home
        </Link>
      </div>
    </div>
  );
};
