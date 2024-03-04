import { useRef, useState } from 'react';
import { isEmptyString } from '../../../utils/validator';
import { ERROR } from '../../../constants/message';

export const useCheckEmail = (value: string) => {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | undefined>(
    undefined,
  );
  const [isError, setIsError] = useState<boolean>(false);

  const isValidEmailFormat = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleBlur = () => {
    if (isEmptyString(value)) {
      setIsError(true);
      setErrorMessage(ERROR.EMAIL.EMPTY);
    } else if (!isValidEmailFormat(value)) {
      setIsError(true);
      setErrorMessage(ERROR.EMAIL.FORM);
    } else {
      setIsError(false);
      setErrorMessage(undefined);
    }
  };

  return { inputRef, isError, errorMessage, handleBlur };
};
