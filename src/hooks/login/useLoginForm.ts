import { ChangeEvent, useState } from 'react';
import useInputs from '../common/useInputs';
import { ERROR } from '../../constants/message';
import { isEmptyString } from '../../utils/validator';

interface LoginFormProps {
  email: string;
  password: string;
}

const initialState: LoginFormProps = {
  email: '',
  password: '',
};

export const useLoginForm = () => {
  const { form, onChange } = useInputs<LoginFormProps>(initialState);
  const [isError, setIsError] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | undefined>(
    undefined,
  );
  const handleSubmit = (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (isEmptyString(form.email)) {
      setIsError(true);
      setErrorMessage(ERROR.EMAIL.EMPTY);
    } else if (isEmptyString(form.password)) {
      setIsError(true);
      setErrorMessage(ERROR.PW.EMPTY);
    } else {
      setIsError(false);
      setErrorMessage(undefined);
    }
  };

  return { form, onChange, isError, errorMessage, handleSubmit };
};
