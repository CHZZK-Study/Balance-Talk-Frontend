import { AxiosErrorResponse, axiosInstance } from '@/api/interceptor';
import { postLogin } from '@/api/member';
import { HTTP_STATUS_CODE } from '@/constants/api';
import { useNewDispatch } from '@/store';
import { tokenActions } from '@/store/auth';
import { MemberForm } from '@/types/member';
import { useMutation } from '@tanstack/react-query';
import { ChangeEvent, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ERROR } from '../../constants/message';
import { isEmptyString } from '../../utils/validator';
import useInputs from '../common/useInputs';

const initialState: Pick<MemberForm, 'email' | 'password'> = {
  email: '',
  password: '',
};

export const useLoginForm = () => {
  const { form, onChange } =
    useInputs<Pick<MemberForm, 'email' | 'password'>>(initialState);

  const [isError, setIsError] = useState<boolean>(false);
  const [loginSuccess, setLoginSuccess] = useState<boolean>(false);

  const [errorMessage, setErrorMessage] = useState<string | undefined>(
    undefined,
  );

  const navigate = useNavigate();

  const dispatch = useNewDispatch();

  const login = useMutation({
    mutationFn: postLogin,

    onSuccess: (res: string) => {
      setIsError(false);
      setErrorMessage(undefined);
      setLoginSuccess(true);

      dispatch(tokenActions.setToken(res));
      axiosInstance.defaults.headers.Authorization = `Bearer ${res}`;

      // TODO: 백엔드에서 리프레쉬 토큰 쿠키에 저장시키면, 해당 코드 제거
      localStorage.setItem('accessToken', res);
      // localStorage.setItem('rtk', 'rtk');

      setTimeout(() => {
        navigate('/');
      }, 2000);
    },

    onError: (err: AxiosErrorResponse) => {
      if (err.status === HTTP_STATUS_CODE.UNAUTHORIZED) {
        setIsError(true);
        setErrorMessage(ERROR.LOGIN.FAIL);
      }
    },
  });

  const isValidEmailFormat = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const isValidPwFormat = (pw: string): boolean => {
    const pwPattern = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d@$!%*#?&]{10,20}$/;
    return pwPattern.test(pw);
  };

  const handleSubmit = (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (isEmptyString(form.email)) {
      setIsError(true);
      setErrorMessage(ERROR.EMAIL.EMPTY);
      return;
    }
    if (!isValidEmailFormat(form.email)) {
      setIsError(true);
      setErrorMessage(ERROR.EMAIL.FORM);
      return;
    }
    if (isEmptyString(form.password)) {
      setIsError(true);
      setErrorMessage(ERROR.PW.EMPTY);
      return;
    }
    if (!isValidPwFormat(form.password)) {
      setIsError(true);
      setErrorMessage(ERROR.PW.FORM);
      return;
    }
    login.mutate(form);
  };

  return { form, onChange, isError, errorMessage, handleSubmit, loginSuccess };
};
