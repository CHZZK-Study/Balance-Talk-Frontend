import { postEmailRequest } from '@/api/email/email';
import { AxiosErrorResponse } from '@/api/interceptor';
import { HTTP_STATUS_CODE } from '@/constants/api';
import { useMutation } from '@tanstack/react-query';
import { useRef, useState } from 'react';
import { ERROR, SUCCESS } from '../../../constants/message';
import { isEmptyString } from '../../../utils/validator';

export const useCheckEmail = (type: string, value: string) => {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | undefined>(
    undefined,
  );
  const [isError, setIsError] = useState<boolean>(false);

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

  const handleSubmit = () => {
    if (isEmptyString(value)) {
      setIsError(true);
      setErrorMessage(ERROR.EMAIL.EMPTY);
    } else if (!isValidEmailFormat(value)) {
      setIsError(true);
      setErrorMessage(ERROR.EMAIL.FORM);
    } else if (type === 'signup') {
      emailRequest.mutate();
    }
  };

  return { inputRef, isError, errorMessage, handleSubmit };
};
