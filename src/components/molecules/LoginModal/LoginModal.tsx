/* eslint-disable jsx-a11y/control-has-associated-label */
import React from 'react';
import { Envelope, Lock, KakaoLogin, GoogleLogin, NaverLogin } from '@/assets';
import Modal from '@/components/atoms/Modal/Modal';
import Button from '@/components/atoms/Button/Button';
import Input from '@/components/atoms/Input/Input';
import Divider from '@/components/atoms/Divider/Divider';
import {
  btnWrapperMargin,
  btnWrapperStyling,
  loginModalStyling,
  loginButtonStyling,
  loginTextStyling,
  signInTextStyling,
  textWrapperStyling,
  textStyling,
  loginFormWrapper,
  loginBtnStyling,
} from './LoginModal.style';

export interface LoginModalProps {
  withSignInText?: boolean;
  isOpen?: boolean;
  onClose?: () => void;
}

const LoginModal = ({ withSignInText, isOpen, onClose }: LoginModalProps) => {
  return (
    <Modal action="default" isOpen={isOpen} onClose={onClose}>
      <div css={loginModalStyling}>
        <div css={loginTextStyling}>LOGIN</div>
        <div css={loginFormWrapper}>
          <Input
            icon={<Envelope />}
            placeholder="이메일"
            style={{ width: '450px' }}
          />
          <Input
            icon={<Lock />}
            placeholder="비밀번호"
            style={{ width: '450px' }}
          />
          <Button size="large" variant="roundPrimary" css={loginBtnStyling}>
            로그인
          </Button>
        </div>
        <div css={textWrapperStyling}>
          <div css={textStyling}>회원가입</div>
          <Divider orientation="height" length={14} />
          <div css={textStyling}>비밀번호 찾기</div>
        </div>
        <Divider orientation="width" length={522} />
        {withSignInText && (
          <div css={signInTextStyling}>3초만에 회원가입하고 PICK-O 즐기기!</div>
        )}
        <div css={[btnWrapperStyling, withSignInText && btnWrapperMargin]}>
          <button type="button" css={loginButtonStyling}>
            <KakaoLogin />
          </button>
          <button type="button" css={loginButtonStyling}>
            <GoogleLogin />
          </button>
          <button type="button" css={loginButtonStyling}>
            <NaverLogin />
          </button>
        </div>
      </div>
    </Modal>
  );
};

export default LoginModal;
