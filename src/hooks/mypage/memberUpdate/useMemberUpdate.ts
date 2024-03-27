import { ChangeEvent } from 'react';
import { useMemberImageMutation } from '@/hooks/api/useMemberImageMutation';
import { useMemberNicknameMutation } from '@/hooks/api/useMemberNicknameMutation';
import { useMemberPwMutation } from '@/hooks/api/useMemberPwMutation';
import { useActiveSubmit } from '@/hooks/common/useActiveSubmit';
import { MemberForm, MemberSuccesForm } from '@/types/member';
import useInputs from '../../common/useInputs';

interface MemberUpdateFormProps
  extends Omit<MemberForm, 'email' | 'verificationCode'> {}

interface MemberUpdateSuccessForm
  extends Omit<MemberSuccesForm, 'email' | 'verificationCode'> {}

const initialState: MemberUpdateFormProps = {
  nickname: '',
  password: '',
  passwordCheck: '',
  profilePhoto: '',
};

const successState: MemberUpdateSuccessForm = {
  nickname: false,
  password: false,
  passwordCheck: false,
};

export const useMemberUpdate = () => {
  const { form, onChange, setEach } =
    useInputs<MemberUpdateFormProps>(initialState);

  const { successForm, onSuccessChange } =
    useActiveSubmit<MemberUpdateSuccessForm>(successState);

  const changeMemberImage = useMemberImageMutation();
  const changeMemberNickname = useMemberNicknameMutation();
  const changeMemberPw = useMemberPwMutation();

  const handleSubmit = (e: ChangeEvent<HTMLFormElement>) => {
    if (successForm.nickname) {
      changeMemberNickname.mutate(form.nickname);
    }
    if (successForm.password && successForm.passwordCheck) {
      changeMemberPw.mutate(form.password);
    }
    if (form.profilePhoto !== '') {
      changeMemberImage.mutate(form.profilePhoto);
    }
    if (
      successForm.nickname ||
      (successForm.password && successForm.passwordCheck) ||
      form.profilePhoto !== ''
    ) {
      alert('회원정보 수정이 완료되었습니다.');
    } else {
      e.preventDefault();
      alert('올바른 회원정보를 입력해주세요.');
    }
  };

  return { form, onChange, onSuccessChange, setEach, handleSubmit };
};
