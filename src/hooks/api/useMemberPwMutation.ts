import { putMemberPw } from '@/api/member';
import { useMutation } from '@tanstack/react-query';

export const useMemberPwMutation = () => {
  return useMutation({
    mutationFn: putMemberPw,

    onError: (error) => {
      console.error(error);
    },
  });
};
