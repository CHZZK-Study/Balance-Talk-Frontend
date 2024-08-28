import { Id } from '@/types/api';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { postTalkPickVote } from '@/api/vote';
import { VoteOption } from '@/types/vote';
import { TalkPickDetail } from '@/types/talk-pick';

export const useCreateTalkPickVoteMutation = (talkPickId: Id) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: VoteOption) => postTalkPickVote(talkPickId, data),
    onMutate: (data: VoteOption) => {
      const prevPost: TalkPickDetail | undefined = queryClient.getQueryData([
        'talkPick',
        talkPickId,
      ]);

      if (prevPost) {
        const { votesCountOfOptionA, votesCountOfOptionB } = prevPost;

        queryClient.setQueryData(['talkPick', talkPickId], {
          ...prevPost,
          votedOption: data,
          votesCountOfOptionA:
            data === 'A' ? votesCountOfOptionA + 1 : votesCountOfOptionA,
          votesCountOfOptionB:
            data === 'B' ? votesCountOfOptionB + 1 : votesCountOfOptionB,
        });
      }

      return { prevPost };
    },
    onError: (err, id, context) => {
      queryClient.setQueryData(['talkPick', talkPickId], context?.prevPost);
    },
  });
};
