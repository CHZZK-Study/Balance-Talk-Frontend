import { putMemberImage } from '@/api/member';
import { useMutation } from '@tanstack/react-query';

export const useMemberImageMutation = () => {
  return useMutation({
    mutationFn: putMemberImage,
    onError: (error) => {
      console.error(error);
    },
  });
};
