import React from 'react';
import { useNewSelector } from '@/store';
import { selectAccessToken } from '@/store/auth';
import { useNavigate } from 'react-router-dom';
import logo from '../../assets/images/logo.png';
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
        {/* <Hearts /> */}
        <img src={logo} alt="logo" width={70} height={70} />
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
