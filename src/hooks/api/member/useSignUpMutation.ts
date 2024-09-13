import { AxiosErrorResponse } from '@/api/interceptor';
import { postMember } from '@/api/member';
import { useMutation } from '@tanstack/react-query';

export const useSignUpMutation = () => {
  return useMutation({
    mutationFn: postMember,
    onSuccess: () => {},
    onError: (err: AxiosErrorResponse) => {
      console.error(err);
    },
  });
};
