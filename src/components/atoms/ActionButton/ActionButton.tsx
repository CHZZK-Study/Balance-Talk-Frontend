import React, { useState } from 'react';
import type { ComponentPropsWithoutRef } from 'react';
import { ActivityInfo, EditProfile, Withdraw } from '@/assets';
import {
  actionButtonContainer,
  actionButtonLabel,
  actionButtonImage,
} from './ActionButton.style';

export interface ActionButtonProps extends ComponentPropsWithoutRef<'button'> {
  label: string;
  iconType?: 'activity' | 'edit' | 'withdraw';
}

const ActionButton = ({
  label,
  iconType = 'activity',
  ...attributes
}: ActionButtonProps) => {
  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    setIsActive(!isActive);
  };

  const renderIcon = () => {
    switch (iconType) {
      case 'activity':
        return <ActivityInfo />;
      case 'edit':
        return <EditProfile />;
      case 'withdraw':
        return <Withdraw />;
      default:
        return null;
    }
  };

  return (
    <button
      css={actionButtonContainer(isActive)}
      onClick={handleClick}
      {...attributes}
    >
      <div css={actionButtonImage}>{renderIcon()}</div>
      <span css={actionButtonLabel(isActive)}>{label}</span>
    </button>
  );
};

export default ActionButton;
