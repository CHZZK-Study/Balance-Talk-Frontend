/* eslint-disable @typescript-eslint/no-floating-promises */
import { deleteGame } from '@/api/game';
import { Id } from '@/types/api';
import { useMutation, useQueryClient } from '@tanstack/react-query';

export const useDeleteGameMutation = (gameId: Id) => {
  const queryClient = useQueryClient();

  const { mutate: deleteGameMutate } = useMutation({
    mutationFn: () => deleteGame(gameId),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['games', gameId],
      });
    },
  });

  const handleDeleteGame = () => {
    deleteGameMutate();
  };

  return handleDeleteGame;
};
