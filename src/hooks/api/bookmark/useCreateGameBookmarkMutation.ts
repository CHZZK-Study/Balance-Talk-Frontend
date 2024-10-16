import { useMutation, useQueryClient } from '@tanstack/react-query';
import { Id } from '@/types/api';
import { GameSet } from '@/types/game';
import { postGameBookmark } from '@/api/bookmarks';

export const useCreateGameBookmarkMutation = (gameSetId: Id, gameId: Id) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: () => postGameBookmark(gameSetId, gameId),
    onMutate: () => {
      const prevGame: GameSet | undefined = queryClient.getQueryData([
        'gameSet',
        gameSetId,
      ]);

      if (prevGame) {
        queryClient.setQueryData(['gameSet', gameSetId], {
          ...prevGame,
          gameDetailResponses: prevGame.gameDetailResponses.map((gameDetail) =>
            gameDetail.id === gameId
              ? {
                  ...gameDetail,
                  myBookmark: true,
                }
              : gameDetail,
          ),
        });
      }

      queryClient.setQueryData(['games', gameSetId], {
        ...prevGame,
        myBookmark: true,
      });

      return { prevGame };
    },
    onError: (err, id, context) => {
      queryClient.setQueryData(['games', gameSetId], context?.prevGame);
    },
  });
};
