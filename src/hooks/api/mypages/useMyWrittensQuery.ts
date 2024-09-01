import { InfiniteData, useInfiniteQuery } from '@tanstack/react-query';
import { getMyWritten } from '@/api/mypages';
import { MyWritten } from '@/types/mypages';
import { MyContentItem } from '@/types/organisms';

export const useMyWrittensQuery = () => {
  const {
    data: myWritten,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
  } = useInfiniteQuery<MyWritten, Error, MyWritten, [string], number>({
    queryKey: ['myWritten'],
    queryFn: ({ pageParam = 0 }: { pageParam?: number }) =>
      getMyWritten(pageParam, 20),
    getNextPageParam: (lastPage) => {
      return lastPage.last ? undefined : lastPage.number + 1;
    },
    initialPageParam: 0,
    select: (data: InfiniteData<MyWritten>) => {
      const firstPage = data.pages[0];
      return {
        content: data.pages.flatMap((page) =>
          page.content.map((item: MyContentItem) => ({
            ...item,
            showBookmark: false,
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

  return { myWritten, fetchNextPage, hasNextPage, isFetchingNextPage };
};
