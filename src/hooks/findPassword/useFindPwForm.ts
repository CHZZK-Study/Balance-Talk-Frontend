import useInputs from '../common/useInputs';

interface FindPwFormProps {
  email: string;
}

const initialState: FindPwFormProps = {
  email: '',
};

export const useFindPwForm = () => {
  const { form, onChange } = useInputs<FindPwFormProps>(initialState);
  return { form, onChange };
};
