import { postEmailRequest } from '@/api/email/email';
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

  const handleSubmit = () => {
    if (isEmptyString(value)) {
      setIsError(true);
      setErrorMessage(ERROR.EMAIL.EMPTY);
    } else if (!isValidEmailFormat(value)) {
      setIsError(true);
      setErrorMessage(ERROR.EMAIL.FORM);
    } else if (type === 'signup') {
      const res = postEmailRequest(value);
      console.log(res);
      setIsError(false);
      setErrorMessage(SUCCESS.EMAIL.AVAILABLE);
    }
  };

  return { inputRef, isError, errorMessage, handleSubmit };
};
