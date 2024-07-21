/* eslint-disable import/no-cycle */
import { css } from '@emotion/react';
import { ModalProps } from './Modal';

export const modalStyling = css({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  minWidth: '598px',
  padding: '34px 30px',
  backgroundColor: '#F1F1F1',
  borderRadius: '10px',
  boxShadow: '1px 2px 30px rgba(0, 0, 0, 0.15)',
});

export const getModalPadding = (action: Required<ModalProps>['action']) => css`
  ${action === 'share' && 'padding-bottom: 12px;'}
`;
