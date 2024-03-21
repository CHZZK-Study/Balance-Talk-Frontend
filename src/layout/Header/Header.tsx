import React from 'react';
import { useNewSelector } from '@/store';
import { selectAccessToken } from '@/store/auth';
import { Hearts } from '../../assets';
import {
  headerBtnContainer,
  headerContainer,
  logoContainer,
  logoNameContainer,
} from './Header.style';
import Login from './Login/Login';
import Logout from './Logout/Logout';

const Header = () => {
  const accessToken = useNewSelector(selectAccessToken);
  // TODO: token 콘솔 제거
  console.log('token:', accessToken);
  return (
    <div css={headerContainer}>
      <div css={logoContainer}>
        {/* 로고가 들어갈 부분 */}
        <Hearts />
      </div>
      <div css={logoNameContainer}>Balance Talk</div>
      <div css={headerBtnContainer}>{accessToken ? <Login /> : <Logout />}</div>
    </div>
  );
};

export default Header;
