import { deleteFile } from '@/api/file';
import { useMutation, useQueryClient } from '@tanstack/react-query';

export const useDeleteFileMutation = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (storedName: string) => deleteFile(storedName),
    onSuccess: async () => {
      await queryClient.invalidateQueries({
        queryKey: ['deleteFiles'],
      });
    },
  });
};
