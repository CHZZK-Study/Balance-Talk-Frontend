import useInputs from './useInputs';

interface SignupFormProps {
  email: string;
  code: string;
  nickname: string;
  password: string;
  passwordCheck: string;
}

const initialState: SignupFormProps = {
  email: '',
  code: '',
  nickname: '',
  password: '',
  passwordCheck: '',
};

export const useSignupForm = () => {
  const { form, onChange } = useInputs<SignupFormProps>(initialState);
  return { form, onChange };
};
