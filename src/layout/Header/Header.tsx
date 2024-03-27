import React from 'react';
import { useNewSelector } from '@/store';
import { selectAccessToken } from '@/store/auth';
import { useNavigate } from 'react-router-dom';
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

  const navigate = useNavigate();

  return (
    <div css={headerContainer}>
      <div css={logoContainer}>
        {/* 로고가 들어갈 부분 */}
        <Hearts />
      </div>
      <div
        css={logoNameContainer}
        onClick={() => navigate('/')}
        role="presentation"
      >
        Balance Talk
      </div>
      <div css={headerBtnContainer}>{accessToken ? <Login /> : <Logout />}</div>
    </div>
  );
};

export default Header;
