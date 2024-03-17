import { MemberForm, MemberSuccesForm } from '@/types/member';
import { isAllTrue } from '@/utils/validator';
import { ChangeEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSignUpMutation } from '../api/useSignUpMutation';
import { useActiveSubmit } from '../common/useActiveSubmit';
import { useFocusFalse } from '../common/useFocusFalse';
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

  const { focus } = useFocusFalse<MemberSuccesForm>(successForm);

  const createNewForm = (prevForm: MemberForm) => {
    const { verificationCode, passwordCheck, ...newForm } = prevForm;
    return newForm;
  };

  const signup = useSignUpMutation();

  const navigate = useNavigate();

  const handleSubmit = (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (isAllTrue(successForm)) {
      // const newForm = createNewForm(form);
      // signup.mutate(newForm);
    } else {
      const newForm = createNewForm(form);
      signup.mutate(newForm);
      focus(e);
    }
  };

  const handleCancle = () => {
    navigate(-1);
  };

  return { form, onChange, onSuccessChange, handleSubmit, handleCancle };
};
