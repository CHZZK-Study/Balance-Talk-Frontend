import { axiosInstance } from '@/api/interceptor';
import { useNewDispatch, useNewSelector } from '@/store';
import { selectAccessToken, tokenActions } from '@/store/auth';
import { useEffect } from 'react';

export const useTokenRefresh = () => {
  const accessToken = useNewSelector(selectAccessToken);
  // TODO: 백엔드에서 리프레쉬 토큰 쿠키에 저장시키면, 아래 코드 변경
  const refreshToken = localStorage.getItem('refreshToken');
  const localstorageAccessToken = localStorage.getItem('accessToken');
  const dispatch = useNewDispatch();

  useEffect(() => {
    const tokenRefresh = () => {
      if (!accessToken && refreshToken) {
        // TODO: 토큰 재발급 api 만들어지면, 아래 코드 변경
        dispatch(tokenActions.setToken(localstorageAccessToken));
        axiosInstance.defaults.headers.Authorization = `Bearer ${localstorageAccessToken}`;
      }
    };
    tokenRefresh();
  }, [accessToken, refreshToken]);
};
