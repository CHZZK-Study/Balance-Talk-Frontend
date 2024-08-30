import { useInfiniteQuery } from '@tanstack/react-query';
import { fetchMyVotes } from '@/api/mypages';
import { MyVote, MyInfiniteData } from '@/types/mypages';

export const useMyVotesQuery = () => {
  return useInfiniteQuery<MyInfiniteData<MyVote>, Error>({
    queryKey: ['myVotes'],
    queryFn: async ({ pageParam = 0 }) => {
      const size: number = 6;
      const data = await fetchMyVotes(pageParam as number, size);

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
      } as MyInfiniteData<MyVote>;
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
