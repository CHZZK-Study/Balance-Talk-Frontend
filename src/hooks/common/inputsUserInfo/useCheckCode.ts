import { useRef, useState } from 'react';
import { isEmptyString } from '../../../utils/validator';
import { ERROR } from '../../../constants/message';

export const useCheckCode = (value: string) => {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | undefined>(
    undefined,
  );
  const [isError, setIsError] = useState<boolean>(false);

  const handleBlur = () => {
    if (isEmptyString(value)) {
      setIsError(true);
      setErrorMessage(ERROR.CODE.EMPTY);
    } else {
      setIsError(false);
      setErrorMessage(undefined);
    }
  };

  return { inputRef, isError, errorMessage, handleBlur };
};
