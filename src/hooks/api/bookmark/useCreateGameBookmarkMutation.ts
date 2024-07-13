import { useMutation, useQueryClient } from '@tanstack/react-query';
import { Id } from '@/types/api';
import { postGameBookmark } from '@/api/bookmarks';
import { GameItem } from '@/types/game';

export const useCreateGameBookmarkMutation = (gameId: Id) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: () => postGameBookmark(gameId),
    onMutate: () => {
      const prevPost: GameItem | undefined = queryClient.getQueryData([
        'newGames',
        gameId,
      ]);

      queryClient.setQueryData(['newGames', gameId], {
        ...prevPost,
        myBookmark: true,
      });

      return { prevPost };
    },
    onError: (err, id, context) => {
      queryClient.setQueryData(['newGames', gameId], context?.prevPost);
    },
  });
};
