import { useRef, useState } from 'react';
import { isEmptyString } from '../../../utils/validator';
import { ERROR } from '../../../constants/message';

export const useCheckNickname = (value: string) => {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | undefined>(
    undefined,
  );
  const [isError, setIsError] = useState<boolean>(false);

  function isValidNickname(nickname: string): boolean {
    return nickname.length >= 2 && nickname.length <= 10;
  }

  const handleBlur = () => {
    if (isEmptyString(value)) {
      setIsError(true);
      setErrorMessage(ERROR.NICKNAME.EMPTY);
    } else if (!isValidNickname(value)) {
      setIsError(true);
      setErrorMessage(ERROR.NICKNAME.FORM);
    } else {
      setIsError(false);
      setErrorMessage(undefined);
    }
  };

  return { inputRef, isError, errorMessage, handleBlur };
};
