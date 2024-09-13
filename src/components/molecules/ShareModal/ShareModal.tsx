/* eslint-disable jsx-a11y/control-has-associated-label */
import React from 'react';
import { Copy, KakaoLogin } from '@/assets';
import Modal from '@/components/atoms/Modal/Modal';
import * as S from './ShareModal.style';

export interface ShareModalProps {
  link: string;
  isOpen?: boolean;
  onConfirm?: () => void;
  onClose?: () => void;
}

const ShareModal = ({ link, isOpen, onConfirm, onClose }: ShareModalProps) => {
  return (
    <Modal action="share" isOpen={isOpen} onClose={onClose}>
      <div css={S.shareModalStyling}>
        <div css={S.shareTextStyling}>공유하기</div>
        <div css={S.linkWrapperStyling}>
          <div css={S.linkBoxStyling}>
            <div css={S.linkTextStyling}>{link}</div>
          </div>
          <button type="button" css={S.copyBoxStyling} onClick={onConfirm}>
            <Copy />
            복사
          </button>
        </div>
        <div css={S.btnWrapperStyling}>
          <button type="button" css={S.loginButtonStyling}>
            <KakaoLogin />
          </button>
          <div css={S.btnTextStyling}>
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
