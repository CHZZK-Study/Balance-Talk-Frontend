import { useQuery } from '@tanstack/react-query';
import { getMyBookmark } from '@/api/mypages';
import { MyBookmark } from '@/types/mypages';
import { MyContentItem } from '@/types/organisms';
import { useState, useEffect, useCallback } from 'react';

// Hook to manage bookmarks data with infinite scrolling
export const useMyBookmarksQuery = () => {
  const [bookmarksData, setBookmarksData] = useState<MyContentItem[]>([]);
  const [page, setPage] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);

  // Initial data fetch
  const { data: initialBookmarksData, isLoading: isInitialLoading } =
    useQuery<MyBookmark>({
      queryKey: ['myBookmark', 0, 20],
      queryFn: () => getMyBookmark(0, 20),
    });

  // useEffect to handle side effects of data fetching
  useEffect(() => {
    if (initialBookmarksData) {
      setBookmarksData(initialBookmarksData.content);
      setHasMore(!initialBookmarksData.last);
    }
  }, [initialBookmarksData]);

  const fetchNextPage = useCallback(async () => {
    if (isLoading || !hasMore) return;

    setIsLoading(true);
    try {
      const newPage = page + 1;
      const response = await getMyBookmark(newPage, 20);
      setBookmarksData((prevData) => [...prevData, ...response.content]);
      setHasMore(!response.last);
      setPage(newPage);
    } catch (error) {
      console.error('Failed to fetch bookmarks:', error);
    } finally {
      setIsLoading(false);
    }
  }, [isLoading, hasMore, page]);

  return {
    bookmarksData,
    fetchNextPage,
    hasMore,
    isLoading: isInitialLoading || isLoading,
  };
};
