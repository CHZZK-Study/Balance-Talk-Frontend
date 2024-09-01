import { useInfiniteQuery, InfiniteData } from '@tanstack/react-query';
import { getMyBookmark } from '@/api/mypages';
import { MyBookmark } from '@/types/mypages';
import { MyContentItem } from '@/types/organisms';

export const useMyBookmarksQuery = () => {
  const {
    data: myBookmarks,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
  } = useInfiniteQuery<MyBookmark, Error, MyBookmark, [string], number>({
    queryKey: ['myBookmarks'],
    queryFn: ({ pageParam = 0 }: { pageParam?: number }) =>
      getMyBookmark(pageParam, 20),
    getNextPageParam: (lastPage) => {
      return lastPage.last ? undefined : lastPage.number + 1;
    },
    initialPageParam: 0,
    select: (data: InfiniteData<MyBookmark>) => {
      const firstPage = data.pages[0];
      return {
        content: data.pages.flatMap((page) =>
          page.content.map((item: MyContentItem) => ({
            ...item,
            showBookmark: true,
          })),
        ),
        pageable: firstPage.pageable,
        totalPages: firstPage.totalPages,
        totalElements: firstPage.totalElements,
        last: firstPage.last,
        size: firstPage.size,
        number: firstPage.number,
        sort: firstPage.sort,
        numberOfElements: firstPage.numberOfElements,
        first: firstPage.first,
        empty: firstPage.empty,
      };
    },
  });

  return { myBookmarks, fetchNextPage, hasNextPage, isFetchingNextPage };
};
