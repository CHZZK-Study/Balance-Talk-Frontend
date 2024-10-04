import { useMutation, useQueryClient } from '@tanstack/react-query';
import { Id } from '@/types/api';
import { deleteGameBookmark } from '@/api/bookmarks';
import { GameItem } from '@/types/game';

export const useDeleteGameBookmarkMutation = (gameSetId: Id) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: () => deleteGameBookmark(gameSetId),
    onMutate: () => {
      const prevPost: GameItem | undefined = queryClient.getQueryData([
        'games',
        gameSetId,
      ]);
      queryClient.setQueryData(['games', gameSetId], {
        ...prevPost,
        myBookmark: false,
      });
      return { prevPost };
    },
    onError: (error, id, context) => {
      queryClient.setQueryData(['games', gameSetId], context?.prevPost);
    },
  });
};
