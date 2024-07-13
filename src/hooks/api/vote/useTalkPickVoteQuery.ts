import { useQuery } from '@tanstack/react-query';
import { getTalkPickVoteResult } from '@/api/vote';
import { VoteResult } from '@/types/vote';
import { Id } from '@/types/api';

export const useTalkPickVoteQuery = (talkPickId: Id) => {
  const { data: talkPickVoteResult } = useQuery<VoteResult>({
    queryKey: ['talkPickVote', talkPickId],
    queryFn: () => getTalkPickVoteResult(talkPickId),
  });
  return { talkPickVoteResult };
};
