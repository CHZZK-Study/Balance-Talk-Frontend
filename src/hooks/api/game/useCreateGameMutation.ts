/* eslint-disable @typescript-eslint/no-floating-promises */
import { Game } from '@/types/game';
import { postGame } from '@/api/game';
import { useMutation, useQueryClient } from '@tanstack/react-query';

export const useCreateGameMutation = (gameData: Game) => {
  const queryClient = useQueryClient();

  const { mutate: createGameMutate } = useMutation({
    mutationFn: (data: Game) => postGame({ ...data }),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['games'],
      });
    },
  });

  const handleCreateGame = () => {
    createGameMutate(gameData);
  };

  return handleCreateGame;
};
