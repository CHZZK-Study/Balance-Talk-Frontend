import { useQuery } from '@tanstack/react-query';
import { getMyVote } from '@/api/mypages';
import { MyVote } from '@/types/mypages';

export const useMyVotesQuery = () => {
  const { data: myVote } = useQuery<MyVote>({
    queryKey: ['myVote'],
    queryFn: getMyVote,
  });

  return { myVote };
};
