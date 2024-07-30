/* eslint-disable jsx-a11y/control-has-associated-label */
import React from 'react';
import { Copy, KakaoLogin } from '@/assets';
import Modal from '@/components/atoms/Modal/Modal';
import {
  btnTextStyling,
  btnWrapperStyling,
  copyBoxStyling,
  linkBoxStyling,
  linkTextStyling,
  linkWrapperStyling,
  loginButtonStyling,
  shareModalStyling,
  shareTextStyling,
} from './ShareModal.style';

export interface ShareModalProps {
  link: string;
  isOpen?: boolean;
  onClose?: () => void;
}

const ShareModal = ({ link, isOpen, onClose }: ShareModalProps) => {
  return (
    <Modal action="share" isOpen={isOpen} onClose={onClose}>
      <div css={shareModalStyling}>
        <div css={shareTextStyling}>공유하기</div>
        <div css={linkWrapperStyling}>
          <div css={linkBoxStyling}>
            <div css={linkTextStyling}>{link}</div>
          </div>
          <button type="button" css={copyBoxStyling}>
            <Copy />
            복사
          </button>
        </div>
        <div css={btnWrapperStyling}>
          <button type="button" css={loginButtonStyling}>
            <KakaoLogin />
          </button>
          <div css={btnTextStyling}>
            카카오톡으로
            <br />
            공유하기
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default ShareModal;
