import { useMutation, useQueryClient } from '@tanstack/react-query';
import { Id } from '@/types/api';
import { postGameBookmark } from '@/api/bookmarks';
import { GameItem } from '@/types/game';

export const useCreateGameBookmarkMutation = (gameSetId: Id, gameId: Id) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: () => postGameBookmark(gameSetId, gameId),
    onMutate: () => {
      const prevPost: GameItem | undefined = queryClient.getQueryData([
        'games',
        gameId,
      ]);

      queryClient.setQueryData(['games', gameSetId], {
        ...prevPost,
        myBookmark: true,
      });

      return { prevPost };
    },
    onError: (err, id, context) => {
      queryClient.setQueryData(['games', gameSetId], context?.prevPost);
    },
  });
};
