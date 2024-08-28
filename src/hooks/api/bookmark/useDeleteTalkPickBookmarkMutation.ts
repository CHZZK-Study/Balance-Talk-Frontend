import { useMutation, useQueryClient } from '@tanstack/react-query';
import { Id } from '@/types/api';
import { deleteTalkPickBookmark } from '@/api/bookmarks';
import { TalkPickDetail } from '@/types/talk-pick';

export const useDeleteTalkPickBookmarkMutation = (talkPickId: Id) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: () => deleteTalkPickBookmark(talkPickId),
    onMutate: () => {
      const prevPost: TalkPickDetail | undefined = queryClient.getQueryData([
        'talkPick',
        talkPickId,
      ]);

      if (prevPost) {
        const { bookmarks } = prevPost;

        queryClient.setQueryData(['talkPick', talkPickId], {
          ...prevPost,
          bookmarks: bookmarks - 1,
          myBookmark: false,
        });
      }

      return { prevPost };
    },
    onError: (error, id, context) => {
      queryClient.setQueryData(['talkPick', talkPickId], context?.prevPost);
    },
  });
};
