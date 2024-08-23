import React, { useState } from 'react';
import ActionButton from '@/components/atoms/ActionButton/ActionButton';
import { actionBoxContainer } from './ActionBox.style';

const ActionBox = () => {
  const [activeButton, setActiveButton] = useState('activity');

  const handleButtonClick = (buttonType: string) => {
    setActiveButton(buttonType);
  };

  return (
    <div css={actionBoxContainer}>
      <ActionButton
        label="활동 내역"
        iconType="activity"
        isActive={activeButton === 'activity'}
        onClick={() => handleButtonClick('activity')}
      />
      <ActionButton
        label="회원정보 수정"
        iconType="edit"
        isActive={activeButton === 'edit'}
        onClick={() => handleButtonClick('edit')}
      />
      <ActionButton
        label="회원탈퇴"
        iconType="withdraw"
        isActive={activeButton === 'withdraw'}
        onClick={() => handleButtonClick('withdraw')}
      />
    </div>
  );
};

export default ActionBox;
