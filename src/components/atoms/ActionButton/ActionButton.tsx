import React from 'react';
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
  isActive?: boolean;
}

const ActionButton = ({
  label,
  iconType = 'activity',
  isActive = false,
  ...attributes
}: ActionButtonProps) => {
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
    <button css={actionButtonContainer(isActive)} {...attributes}>
      <div css={actionButtonImage}>{renderIcon()}</div>
      <span css={actionButtonLabel(isActive)}>{label}</span>
    </button>
  );
};

export default ActionButton;
