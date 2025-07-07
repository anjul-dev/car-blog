import { useState, useEffect, useCallback } from 'react';

interface UseInfiniteScrollOptions {
  threshold?: number;
  rootMargin?: string;
}

export const useInfiniteScroll = (
  callback: () => void,
  options: UseInfiniteScrollOptions = {}
) => {
  const { threshold = 1.0, rootMargin = '0px' } = options;
  const [isFetching, setIsFetching] = useState(false);
  const [targetRef, setTargetRef] = useState<HTMLDivElement | null>(null);

  const handleIntersection = useCallback(
    (entries: IntersectionObserverEntry[]) => {
      const target = entries[0];
      if (target.isIntersecting && !isFetching) {
        setIsFetching(true);
        callback();
      }
    },
    [callback, isFetching]
  );

  useEffect(() => {
    if (!targetRef) return;

    const observer = new IntersectionObserver(handleIntersection, {
      threshold,
      rootMargin,
    });

    observer.observe(targetRef);

    return () => {
      observer.disconnect();
    };
  }, [targetRef, handleIntersection, threshold, rootMargin]);

  const resetFetching = useCallback(() => {
    setIsFetching(false);
  }, []);

  return { targetRef: setTargetRef, isFetching, resetFetching };
};
