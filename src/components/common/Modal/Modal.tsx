/* eslint-disable import/no-cycle */
/* eslint-disable react/react-in-jsx-scope */
import { ReactNode } from 'react';
import { modalStyling, getModalPadding } from './Modal.style';

export interface ModalProps {
  action?: 'default' | 'share';
  children?: ReactNode;
}

const Modal = ({ action = 'default', children }: ModalProps) => (
  <div css={[modalStyling, getModalPadding(action)]}>{children}</div>
);

export default Modal;
