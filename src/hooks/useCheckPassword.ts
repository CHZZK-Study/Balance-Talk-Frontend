import { useRef, useState } from 'react';
import { isEmptyString } from '../utils/validator';
import { ERROR } from '../constants/message';

export const useCheckPassword = (value: string) => {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | undefined>(
    undefined,
  );
  const [isError, setIsError] = useState<boolean>(false);

  const isValidPwFormat = (pw: string): boolean => {
    const pwRegex = /^[a-zA-Z0-9]{10,20}$/;
    return pwRegex.test(pw);
  };

  const handleBlur = () => {
    if (isEmptyString(value)) {
      setIsError(true);
      setErrorMessage(ERROR.PW.EMPTY);
    } else if (!isValidPwFormat(value)) {
      setIsError(true);
      setErrorMessage(ERROR.PW.FORM);
    } else {
      setIsError(false);
      setErrorMessage(undefined);
    }
  };

  return { inputRef, isError, errorMessage, handleBlur };
};
