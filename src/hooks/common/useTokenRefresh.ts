import { axiosInstance } from '@/api/interceptor';
import { getRefreshToken } from '@/api/member/auth';
import { useNewDispatch, useNewSelector } from '@/store';
import { selectAccessToken, tokenActions } from '@/store/auth';
import { useEffect } from 'react';

export const useTokenRefresh = () => {
  const accessToken = useNewSelector(selectAccessToken);
  // TODO: 백엔드에서 리프레쉬 토큰 쿠키에 저장시키면, 아래 코드 변경
  const refreshToken = localStorage.getItem('rtk');
  const localstorageAccessToken = localStorage.getItem('accessToken');
  const dispatch = useNewDispatch();

  useEffect(() => {
    console.log(accessToken, refreshToken);
    const tokenRefresh = () => {
      if (!accessToken && refreshToken) {
        console.log('토큰 리프레시');
        dispatch(tokenActions.setToken(localstorageAccessToken));
        axiosInstance.defaults.headers.Authorization = `Bearer ${localstorageAccessToken}`;
        // getRefreshToken()
        //   .then((res) => {
        //     console.log(res);
        //     dispatch(tokenActions.setToken(res));
        //     axiosInstance.defaults.headers.Authorization = `Bearer ${res}`;
        //   })
        //   .catch((err) => {
        //     console.error(err);
        //   });
      }
    };
    tokenRefresh();
  }, [accessToken, refreshToken, dispatch]);
};
