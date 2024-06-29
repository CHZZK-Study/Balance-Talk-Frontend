/* eslint-disable @typescript-eslint/no-floating-promises */
import { Game } from '@/types/game';
import { Id } from '@/types/api';
import { patchGame } from '@/api/game';
import { useMutation, useQueryClient } from '@tanstack/react-query';

export const useEditGameMutation = (postId: Id) => {
  const queryClient = useQueryClient();

  const editGameMutate = useMutation({
    mutationFn: (data: Game) => patchGame(postId, { ...data }),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['games', postId],
      });
    },
  });

  return editGameMutate;
};
