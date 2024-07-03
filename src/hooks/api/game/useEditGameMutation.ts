/* eslint-disable @typescript-eslint/no-floating-promises */
import { Game } from '@/types/game';
import { Id } from '@/types/api';
import { putGame } from '@/api/game';
import { useMutation, useQueryClient } from '@tanstack/react-query';

export const useEditGameMutation = (gameId: Id) => {
  const queryClient = useQueryClient();

  const editGameMutate = useMutation({
    mutationFn: (data: Game) => putGame(gameId, { ...data }),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['games', gameId],
      });
    },
  });

  return editGameMutate;
};
