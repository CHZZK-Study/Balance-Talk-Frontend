import { MemberForm, MemberSuccesForm } from '@/types/member';
import { isAllTrue } from '@/utils/validator';
import { ChangeEvent } from 'react';
import { useActiveSubmit } from '../common/useActiveSubmit';
import useInputs from '../common/useInputs';
import { useFocusFalse } from '../common/useFocusFalse';
import { useSignUpMutation } from '../api/useSignUpMutation';

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

  const { focus } = useFocusFalse<MemberSuccesForm>(successForm);

  const createNewForm = (prevForm: MemberForm) => {
    const { verificationCode, passwordCheck, ...newForm } = prevForm;
    return newForm;
  };

  const signup = useSignUpMutation();

  const handleSubmit = (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (isAllTrue(successForm)) {
      const newForm = createNewForm(form);
      signup.mutate(newForm);
    } else {
      focus(e);
    }
  };

  return { form, onChange, onSuccessChange, handleSubmit };
};
