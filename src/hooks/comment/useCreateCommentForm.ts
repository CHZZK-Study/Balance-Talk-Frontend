import useInputs from '../common/useInputs';

interface CreateCommentFormProps {
  content: string;
}

const initialState: CreateCommentFormProps = {
  content: '',
};

export const useCreateCommentForm = () => {
  const { form, onChange, reset } =
    useInputs<CreateCommentFormProps>(initialState);
  return { form, onChange, reset };
};
