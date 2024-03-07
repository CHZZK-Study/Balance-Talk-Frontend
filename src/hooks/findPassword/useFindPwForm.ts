import useInputs from '../common/useInputs';

interface FindPwFormProps {
  email: string;
  code: string;
}

const initialState: FindPwFormProps = {
  email: '',
  code: '',
};

export const useFindPwForm = () => {
  const { form, onChange } = useInputs<FindPwFormProps>(initialState);
  return { form, onChange };
};
