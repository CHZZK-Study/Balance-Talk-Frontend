import { useMutation, useQueryClient } from '@tanstack/react-query';
import { Id } from '@/types/api';
import { deleteGameBookmark } from '@/api/bookmarks';
import { GameItem } from '@/types/game';

export const useDeleteGameBookmarkMutation = (gameId: Id) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: () => deleteGameBookmark(gameId),
    onMutate: () => {
      const prevPost: GameItem | undefined = queryClient.getQueryData([
        'newGames',
        gameId,
      ]);
      queryClient.setQueryData(['newGames', gameId], {
        ...prevPost,
        myBookmark: false,
      });
      return { prevPost };
    },
    onError: (error, id, context) => {
      queryClient.setQueryData(['newGames', gameId], context?.prevPost);
    },
  });
};
