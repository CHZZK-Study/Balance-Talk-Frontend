import React from 'react';
import { Logo, WriteIcon } from '@/assets';
import Button from '@/components/atoms/Button/Button';
import Notification from '@/components/molecules/Notification/Notification';
import ProfileIcon from '@/components/atoms/ProfileIcon/ProfileIcon';
import {
  containerStyle,
  logoStyle,
  IconStyle,
  WriteButtonStyle,
  LoginButtonStyle,
  rightContainerStyle,
  notificationStyle,
} from './Header.style';

const Header = () => {
  return (
    <div css={containerStyle}>
      <div css={logoStyle}>
        <Logo />
      </div>
      <div css={rightContainerStyle}>
        <Button variant="roundPrimary" size="medium" css={WriteButtonStyle}>
          <WriteIcon css={IconStyle} />
          톡픽쓰기
        </Button>
        <div css={rightContainerStyle}>
          <button type="button" css={LoginButtonStyle}>
            로그인
          </button>
          <Notification isNew={false} notifications={[]} />
          <div css={notificationStyle}>
            <ProfileIcon interaction="normal" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
