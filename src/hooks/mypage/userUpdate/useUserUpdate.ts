import useInputs from '../../common/useInputs';

interface UserUpdateFormProps {
  nickname: string;
  password: string;
  passwordCheck: string;
}

const initialState: UserUpdateFormProps = {
  nickname: '',
  password: '',
  passwordCheck: '',
};

export const useUserUpdateForm = () => {
  const { form, onChange } = useInputs<UserUpdateFormProps>(initialState);
  return { form, onChange };
};
