import { useNavigate } from 'react-router-dom';
import { AxiosErrorResponse } from '@/api/interceptor';
import { postMember } from '@/api/member/member';
import { useMutation } from '@tanstack/react-query';
import { PATH } from '@/constants/path';

export const useSignUpMutation = () => {
  const navigate = useNavigate();
  return useMutation({
    mutationFn: postMember,
    onSuccess: () => {
      navigate(`/${PATH.LOGIN}`);
      alert('회원가입에 성공했습니다😀');
    },
    onError: (err: AxiosErrorResponse) => {
      console.error(err);
    },
  });
};
