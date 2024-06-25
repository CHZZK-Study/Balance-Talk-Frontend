import { getFindPw, postEmailRequest } from '@/api/email';
import { AxiosErrorResponse } from '@/api/interceptor';
import { HTTP_STATUS_CODE } from '@/constants/api';
import { PATH } from '@/constants/path';
import { useMutation } from '@tanstack/react-query';
import { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ERROR, SUCCESS } from '../../../constants/message';
import { isEmptyString } from '../../../utils/validator';

export const useCheckEmail = (type: string, value: string) => {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | undefined>(
    undefined,
  );
  const [isError, setIsError] = useState<boolean>(false);

  const navigate = useNavigate();

  const isValidEmailFormat = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const emailRequest = useMutation({
    mutationFn: () => postEmailRequest(value),
    onSuccess: () => {
      setIsError(false);
      setErrorMessage(SUCCESS.EMAIL.AVAILABLE);
    },
    onError: (err: AxiosErrorResponse) => {
      if (err.status === HTTP_STATUS_CODE.CONFLICT) {
        setIsError(true);
        setErrorMessage(ERROR.EMAIL.EXIST);
      }
    },
  });

  const findPw = useMutation({
    mutationFn: () => getFindPw(value),
    onSuccess: () => {
      setIsError(false);
      navigate(`/${PATH.LOGIN}`);
      alert('임시 비밀번호가 발송되었습니다. 이메일을 확인해주세요.');
    },
    onError: (err: AxiosErrorResponse) => {
      if (err.status === HTTP_STATUS_CODE.NOT_FOUND) {
        setIsError(true);
        setErrorMessage(ERROR.EMAIL.NOT_EXIST);
      }
    },
  });

  const handleSubmit = () => {
    if (isEmptyString(value)) {
      setIsError(true);
      setErrorMessage(ERROR.EMAIL.EMPTY);
    } else if (!isValidEmailFormat(value)) {
      setIsError(true);
      setErrorMessage(ERROR.EMAIL.FORM);
    } else if (type === 'signup') {
      emailRequest.mutate();
    } else if (type === 'findPassword') {
      findPw.mutate();
    }
  };

  return { inputRef, isError, errorMessage, handleSubmit };
};
