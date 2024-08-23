import React from 'react';
import ActionButton from '@/components/atoms/ActionButton/ActionButton';
import { actionBoxContainer } from './ActionBox.style';

const ActionBox = () => {
  return (
    <div css={actionBoxContainer}>
      <ActionButton label="활동 내역" iconType="activity" />
      <ActionButton label="회원정보 수정" iconType="edit" />
      <ActionButton label="회원탈퇴" iconType="withdraw" />
    </div>
  );
};

export default ActionBox;
