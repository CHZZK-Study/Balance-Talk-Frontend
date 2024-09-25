import React from 'react';
import * as S from './InteractionButton.style';

interface InteractionButtonProps {
  buttonLabel: string;
  icon: React.ReactNode;
  iconLabel: string;
  onClick: () => void;
}

const InteractionButton = ({
  buttonLabel,
  icon,
  iconLabel,
  onClick,
}: InteractionButtonProps) => {
  return (
    <button type="button" css={S.buttonStyle} onClick={onClick}>
      <span css={S.buttonLabelStyle}>{buttonLabel}</span>
      <div css={S.iconWrapper}>
        <div css={S.iconStyle}>{icon}</div>
        <span css={S.iconLabelStyle}>{iconLabel}</span>
      </div>
    </button>
  );
};

export default InteractionButton;
