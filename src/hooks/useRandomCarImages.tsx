import { useState } from "react";

export function useRandomCarImage() {
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const fetchRandomImage = async () => {
    setLoading(true);
    setError(null);
    try {
      const UNSPLASH_API_KEY = "xxH5--k4aStcfIQ5eW2Y-9ncMkCHhH9_JIF6KDJKEe0";
      const res = await fetch(
        `https://api.unsplash.com/photos/random?query=cars&client_id=${UNSPLASH_API_KEY}`
      );

      if (!res.ok) {
        throw new Error(`Unsplash error: ${res.status}`);
      }

      const data = await res.json();
      setImageUrl(data?.urls?.regular || null);
    } catch (err: any) {
      setError(err.message || "Unknown error");
    } finally {
      setLoading(false);
    }
  };

  return { imageUrl, loading, error, fetchRandomImage };
}
