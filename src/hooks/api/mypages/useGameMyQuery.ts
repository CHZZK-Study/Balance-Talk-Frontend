import { useInfiniteQuery } from '@tanstack/react-query';
import { fetchGameMy } from '@/api/mypages';
import { MyGame, MyInfiniteData } from '@/types/mypages';

export const useGameMyQuery = () => {
  return useInfiniteQuery<MyInfiniteData<MyGame>, Error>({
    queryKey: ['myGames'],
    queryFn: async ({ pageParam = 0 }) => {
      const size: number = 6;
      const data = await fetchGameMy(pageParam as number, size);

      return {
        pages: [
          {
            content: data.content,
            pageable: data.pageable,
            totalPages: data.totalPages,
            totalElements: data.totalElements,
            last: data.last,
            size: data.size,
            number: data.number,
            sort: data.sort,
            first: data.first,
            empty: data.empty,
          },
        ],
        pageParams: [pageParam],
      } as MyInfiniteData<MyGame>;
    },
    getNextPageParam: (lastPage) => {
      const lastPageData = lastPage.pages[lastPage.pages.length - 1];
      return lastPageData.number < lastPageData.totalPages - 1
        ? lastPageData.number + 1
        : undefined;
    },
    initialPageParam: 0,
  });
};
