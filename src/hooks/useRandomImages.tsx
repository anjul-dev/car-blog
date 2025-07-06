import { useEffect, useState } from "react";

interface UseRandomImageOptions {
  width?: number;
  height?: number;
  category?: string;
  seed?: string | number;
  accessKey: string; // required
}

// Hook: Single random image
export const useRandomImage = (options: UseRandomImageOptions) => {
  const {
    category = "car",
    accessKey,
  } = options;

  const [imageUrl, setImageUrl] = useState<string | null>(null);

  useEffect(() => {
    const fetchImage = async () => {
      try {
        const res = await fetch(
          `https://api.unsplash.com/photos/random?query=${encodeURIComponent(category)}`,
          {
            headers: {
              Authorization: `Client-ID ${accessKey}`,
            },
          }
        );
        const data = await res.json();
        setImageUrl(data?.urls?.regular || null);
      } catch (error) {
        console.error("Failed to fetch image from Unsplash", error);
        setImageUrl(null);
      }
    };

    fetchImage();
  }, [category, accessKey]);

  return imageUrl;
};

// Hook: Multiple random images
export const useRandomImages = (
  count: number,
  options: UseRandomImageOptions
) => {
  const {
    category = "car",
    accessKey,
  } = options;

  const [images, setImages] = useState<string[]>([]);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const res = await fetch(
          `https://api.unsplash.com/photos/random?query=${encodeURIComponent(
            category
          )}&count=${count}`,
          {
            headers: {
              Authorization: `Client-ID ${accessKey}`,
            },
          }
        );
        const data = await res.json();
        const urls = Array.isArray(data)
          ? data.map((img) => img.urls?.regular).filter(Boolean)
          : [];
        setImages(urls);
      } catch (error) {
        console.error("Failed to fetch images from Unsplash", error);
        setImages([]);
      }
    };

    fetchImages();
  }, [count, category, accessKey]);

  return images;
};
