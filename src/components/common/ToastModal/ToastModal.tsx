/* eslint-disable react/react-in-jsx-scope */
import { ReactNode } from 'react';
import { toastModalStyling, getToastModalColor } from './ToastModal.style';

export interface ToastModalProps {
  bgColor?: 'black' | 'white';
  children?: ReactNode;
}

const ToastModal = ({ bgColor = 'black', children }: ToastModalProps) => (
  <div css={[getToastModalColor(bgColor), toastModalStyling]}>{children}</div>
);

export default ToastModal;
