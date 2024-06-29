/* eslint-disable @typescript-eslint/no-floating-promises */
import { deleteGame } from '@/api/game';
import { useMutation, useQueryClient } from '@tanstack/react-query';

export const useDeleteGameMutation = (postId: number) => {
  const queryClient = useQueryClient();

  const { mutate: deleteGameMutate } = useMutation({
    mutationFn: () => deleteGame(postId),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['games', postId],
      });
    },
  });

  const handleDeleteGame = () => {
    deleteGameMutate();
  };

  return handleDeleteGame;
};
