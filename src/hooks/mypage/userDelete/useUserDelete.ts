import { ChangeEvent } from 'react';
import useInputs from '../../common/useInputs';

interface UserDeleteFormProps {
  email: string;
  password: string;
}

const initialState: UserDeleteFormProps = {
  email: '',
  password: '',
};

export const useUserDeleteForm = () => {
  const { form, onChange } = useInputs<UserDeleteFormProps>(initialState);

  const handleSubmit = (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert('회원탈퇴가 완료되었습니다.');
  };

  return { form, onChange, handleSubmit };
};
