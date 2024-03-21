import { AxiosErrorResponse, axiosInstance } from '@/api/interceptor';
import { LoginResponseData, postLogin } from '@/api/member/auth';
import { HTTP_STATUS_CODE } from '@/constants/api';
import { PATH } from '@/constants/path';
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

  const [isError, setIsError] = useState(false);

  const [errorMessage, setErrorMessage] = useState<string | undefined>(
    undefined,
  );

  const navigate = useNavigate();

  const dispatch = useNewDispatch();

  const login = useMutation({
    mutationFn: postLogin,

    onSuccess: (res: LoginResponseData) => {
      setIsError(false);
      setErrorMessage(undefined);

      alert('로그인에 성공했습니다😀');

      dispatch(tokenActions.setToken(res.accessToken));
      axiosInstance.defaults.headers.Authorization = `Bearer ${res.accessToken}`;

      // TODO: 백엔드에서 리프레쉬 토큰 쿠키에 저장시키면, 해당 코드 제거
      localStorage.setItem('accessToken', res.accessToken);
      localStorage.setItem('refreshToken', res.refreshToken);

      navigate(`/${PATH.MYPAGE}/${PATH.HISTORY.MAIN}/${PATH.HISTORY.POSTS}`);
    },

    onError: (err: AxiosErrorResponse) => {
      if (err.status === HTTP_STATUS_CODE.UNAUTHORIZED) {
        setIsError(true);
        setErrorMessage(ERROR.LOGIN.FAIL);
      }
    },
  });

  const handleSubmit = (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (isEmptyString(form.email)) {
      setIsError(true);
      setErrorMessage(ERROR.EMAIL.EMPTY);
      return;
    }
    if (isEmptyString(form.password)) {
      setIsError(true);
      setErrorMessage(ERROR.PW.EMPTY);
      return;
    }
    login.mutate(form);
  };

  return { form, onChange, isError, errorMessage, handleSubmit };
};
