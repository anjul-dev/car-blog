import { useState, useEffect, useCallback } from 'react';

interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

interface User {
  id: number;
  name: string;
  username: string;
  email: string;
}

interface PostWithAuthor extends Post {
  author?: User;
}

const POSTS_PER_PAGE = 8;

export const usePosts = () => {
  const [allPosts, setAllPosts] = useState<PostWithAuthor[]>([]);
  const [displayedPosts, setDisplayedPosts] = useState<PostWithAuthor[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const [loadingMore, setLoadingMore] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        setLoading(true);
        console.log('Fetching posts...');
        
        const [postsResponse, usersResponse] = await Promise.all([
          fetch('https://jsonplaceholder.typicode.com/posts'),
          fetch('https://jsonplaceholder.typicode.com/users')
        ]);

        if (!postsResponse.ok || !usersResponse.ok) {
          throw new Error('Failed to fetch data');
        }

        const postsData: Post[] = await postsResponse.json();
        const usersData: User[] = await usersResponse.json();

        console.log('Posts fetched:', postsData.length);
        console.log('Users fetched:', usersData.length);

        const postsWithAuthors = postsData.map(post => ({
          ...post,
          author: usersData.find(user => user.id === post.userId)
        }));

        setAllPosts(postsWithAuthors);
        setDisplayedPosts(postsWithAuthors.slice(0, POSTS_PER_PAGE));
        setError(null);
      } catch (err) {
        console.error('Error fetching posts:', err);
        setError('Unable to fetch car blog posts. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  const loadMorePosts = useCallback(() => {
    if (loadingMore || !hasMore) return;

    setLoadingMore(true);
    console.log('Loading more posts...');

    setTimeout(() => {
      const startIndex = currentPage * POSTS_PER_PAGE;
      const endIndex = startIndex + POSTS_PER_PAGE;
      const newPosts = allPosts.slice(startIndex, endIndex);

      if (newPosts.length === 0) {
        setHasMore(false);
      } else {
        setDisplayedPosts(prev => [...prev, ...newPosts]);
        setCurrentPage(prev => prev + 1);
      }

      setLoadingMore(false);
    }, 800);
  }, [allPosts, currentPage, loadingMore, hasMore]);

  return { 
    posts: displayedPosts, 
    loading, 
    loadingMore,
    hasMore,
    error, 
    loadMorePosts 
  };
};

export const usePost = (id: string | number) => {
  const [post, setPost] = useState<PostWithAuthor | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        setLoading(true);
        console.log(`Fetching post ${id}...`);
        
        const [postResponse, usersResponse] = await Promise.all([
          fetch(`https://jsonplaceholder.typicode.com/posts/${id}`),
          fetch('https://jsonplaceholder.typicode.com/users')
        ]);

        if (!postResponse.ok || !usersResponse.ok) {
          throw new Error('Failed to fetch post data');
        }

        const postData: Post = await postResponse.json();
        const usersData: User[] = await usersResponse.json();

        console.log('Post fetched:', postData);

        const postWithAuthor = {
          ...postData,
          author: usersData.find(user => user.id === postData.userId)
        };

        setPost(postWithAuthor);
        setError(null);
      } catch (err) {
        console.error('Error fetching post:', err);
        setError('Unable to fetch blog post details. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    if (id) {
      fetchPost();
    }
  }, [id]);

  return { post, loading, error };
};
