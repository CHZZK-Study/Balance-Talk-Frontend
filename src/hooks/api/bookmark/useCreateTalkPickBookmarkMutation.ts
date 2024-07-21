import { useMutation, useQueryClient } from '@tanstack/react-query';
import { Id } from '@/types/api';
import { postTalkPickBookmark } from '@/api/bookmarks';
import { TalkPickDetail } from '@/types/talk-pick';

export const useCreateTalkPickBookmarkMutation = (talkPickId: Id) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: () => postTalkPickBookmark(talkPickId),
    onMutate: () => {
      const prevPost: TalkPickDetail | undefined = queryClient.getQueryData([
        'talkPick',
        talkPickId,
      ]);

      queryClient.setQueryData(['talkPick', talkPickId], {
        ...prevPost,
        myBookmark: true,
      });

      return { prevPost };
    },
    onError: (err, id, context) => {
      queryClient.setQueryData(['talkPick', talkPickId], context?.prevPost);
    },
  });
};