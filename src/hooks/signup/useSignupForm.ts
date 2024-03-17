import { MemberForm, MemberSuccesForm } from '@/types/member';
import { isAllTrue } from '@/utils/validator';
import { ChangeEvent } from 'react';
import { useActiveSubmit } from '../common/useActiveSubmit';
import useInputs from '../common/useInputs';

const initialState: MemberForm = {
  email: '',
  verificationCode: '',
  nickname: '',
  password: '',
  passwordCheck: '',
};

const successState: MemberSuccesForm = {
  email: false,
  verificationCode: false,
  nickname: false,
  password: false,
  passwordCheck: false,
};

export const useSignupForm = () => {
  const { form, onChange } = useInputs<MemberForm>(initialState);
  const { successForm, onSuccessChange } =
    useActiveSubmit<MemberSuccesForm>(successState);

  const handleSubmit = (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('회원가입 폼 제출');
    console.log('제출: ', form);
    console.log('제출: ', successForm);
    if (isAllTrue(successForm)) {
      console.log('제출 성공');
    } else {
      console.log('제출 실패');
    }
  };

  return { form, onChange, onSuccessChange, handleSubmit };
};
