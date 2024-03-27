import useInputs from '../common/useInputs';

interface EditCommentFormProps {
  content: string;
}

export const useEditCommentForm = (content: string) => {
  const { form, onChange } = useInputs<EditCommentFormProps>({
    content,
  });
  return { form, onChange };
};
