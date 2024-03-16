// import { useState } from 'react';
import { MemberForm } from '@/types/member';
import useInputs from '../common/useInputs';

const initialState: MemberForm = {
  email: '',
  code: '',
  nickname: '',
  password: '',
  passwordCheck: '',
};

export const useSignupForm = () => {
  const { form, onChange } = useInputs<MemberForm>(initialState);
  // const [isSuccessForm, setIsSuccessForm] = useState({
  //   email: false,
  //   code: false,
  //   nickname: false,
  //   password: false,
  //   passwordCheck: false,
  // });
  return { form, onChange };
};
