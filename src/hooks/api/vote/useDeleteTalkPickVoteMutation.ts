import { Id } from '@/types/api';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { deleteTalkPickVote } from '@/api/vote';
import { TalkPickDetail } from '@/types/talk-pick';

export const useDeleteTalkPickVoteMutation = (talkPickId: Id) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: () => deleteTalkPickVote(talkPickId),
    onMutate: () => {
      const prevPost: TalkPickDetail | undefined = queryClient.getQueryData([
        'talkPick',
        talkPickId,
      ]);

      if (prevPost) {
        const { votedOption, votesCountOfOptionA, votesCountOfOptionB } =
          prevPost;

        queryClient.setQueryData(['talkPick', talkPickId], {
          ...prevPost,
          votedOption: null,
          votesCountOfOptionA:
            votedOption === 'A' ? votesCountOfOptionA - 1 : votesCountOfOptionA,
          votesCountOfOptionB:
            votedOption === 'B' ? votesCountOfOptionB - 1 : votesCountOfOptionB,
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
