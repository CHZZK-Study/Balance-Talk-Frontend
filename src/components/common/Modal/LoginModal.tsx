import React, { SetStateAction, useEffect, useRef, useState } from 'react';
import Button from '@/components/design/Button/Button';
import { useNavigate } from 'react-router-dom';
import { PATH } from '@/constants/path';
import {
  LoginModalWrapper,
  btnsWrapper,
  titleWrapper,
} from './LoginModal.style';

interface LoginModalProps {
  handleModal: React.Dispatch<SetStateAction<boolean>>;
  postId: number;
}

const LoginModal = ({ handleModal, postId }: LoginModalProps) => {
  const loginModalRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const handleOutSideClick = (event: MouseEvent) => {
      if (
        loginModalRef.current &&
        !loginModalRef.current.contains(event.target as Node)
      ) {
        handleModal(false);
      }
    };

    document.addEventListener('mousedown', handleOutSideClick);

    return () => {
      document.removeEventListener('mousedown', handleOutSideClick);
    };
  }, [loginModalRef]);

  return (
    <div ref={loginModalRef} css={LoginModalWrapper}>
      <div css={titleWrapper}>로그인이 필요한 서비스입니다.</div>
      <div css={btnsWrapper}>
        <Button variant="cancel" onClick={() => handleModal(false)}>
          다음에 하기
        </Button>
        <Button onClick={() => navigate(`../${PATH.LOGIN}`, { state: postId })}>
          로그인 하기
        </Button>
      </div>
    </div>
  );
};

export default LoginModal;
