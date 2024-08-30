import { useInfiniteQuery } from '@tanstack/react-query';
import { fetchMyComments } from '@/api/mypages';
import { MyComment, MyInfiniteData } from '@/types/mypages';

export const useMyCommentsQuery = () => {
  return useInfiniteQuery<MyInfiniteData<MyComment>, Error>({
    queryKey: ['myComments'],
    queryFn: async ({ pageParam = 0 }) => {
      const size: number = 6;
      const data = await fetchMyComments(pageParam as number, size);

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
      } as MyInfiniteData<MyComment>;
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
