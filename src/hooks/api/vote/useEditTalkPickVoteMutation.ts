import { Id } from '@/types/api';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { putTalkPickVote } from '@/api/vote';
import { VoteOption } from '@/types/vote';
import { TalkPickDetail } from '@/types/talk-pick';

export const useEditTalkPickVoteMutation = (talkPickId: Id) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: VoteOption) => putTalkPickVote(talkPickId, data),
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
            data === 'A' ? votesCountOfOptionA + 1 : votesCountOfOptionA - 1,
          votesCountOfOptionB:
            data === 'B' ? votesCountOfOptionB + 1 : votesCountOfOptionB - 1,
        });
      }

      return { prevPost };
    },
    onError: (err, id, context) => {
      queryClient.setQueryData(['talkPick', talkPickId], context?.prevPost);
    },
    onSuccess: () =>
      Promise.all([
        queryClient.invalidateQueries({
          queryKey: ['talkPick', talkPickId],
        }),
      ]),
  });
};
