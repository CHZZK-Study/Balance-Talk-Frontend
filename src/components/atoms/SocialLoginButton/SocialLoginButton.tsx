import React, { forwardRef } from 'react';
import type { ComponentPropsWithRef, ForwardedRef } from 'react';
import { KakaoLogin, GoogleLogin, NaverLogin, RecentLogin } from '@/assets';
import * as S from './SocialLoginButton.style';

export interface SocialLoginButtonProps
  extends ComponentPropsWithRef<'button'> {
  variant: 'kakao' | 'google' | 'naver';
  recent?: boolean;
}

const SocialLoginButton = (
  { variant, recent = false, ...props }: SocialLoginButtonProps,
  ref: ForwardedRef<HTMLButtonElement>,
) => {
  let ImageComponent;
  switch (variant) {
    case 'kakao':
      ImageComponent = KakaoLogin;
      break;
    case 'google':
      ImageComponent = GoogleLogin;
      break;
    case 'naver':
      ImageComponent = NaverLogin;
      break;
    default:
      return null;
  }

  return (
    <div css={S.socialLoginStyling}>
      <button type="button" ref={ref} css={S.loginButtonStyling} {...props}>
        <ImageComponent />
      </button>
      {recent && <RecentLogin css={S.recentLoginStyling} />}
    </div>
  );
};

export default forwardRef(SocialLoginButton);
