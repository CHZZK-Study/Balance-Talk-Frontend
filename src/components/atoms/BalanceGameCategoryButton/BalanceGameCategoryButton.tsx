import React from 'react';
import * as S from './BalanceGameCategoryButton.style';

interface ButtonProps {
  label: string;
  icon?: React.ReactNode;
  active: boolean;
  badgeText: string;
  onClick: () => void;
}

const BalanceGameCategoryButton = ({
  label,
  icon,
  active,
  badgeText,
  onClick,
}: ButtonProps) => {
  return (
    <button
      type="button"
      css={[S.buttonStyle, active ? S.activeStyle : S.inactiveStyle]}
      onClick={onClick}
    >
      <div css={S.buttonTitleStyle}>
        <span>{label}</span>
        {active && icon && <span css={S.iconStyle}>{icon}</span>}
      </div>
      {active ? (
        <div css={S.badgeWrapStyle}>
          <div css={S.leftLineStyle} />
          <div css={S.badgeStyle}>{badgeText}</div>
          <div css={S.rightLineStyle} />
        </div>
      ) : (
        <div css={S.inactiveBadgeWrapStyle}>
          <div css={S.inactiveLineStyle(label)} />
        </div>
      )}
    </button>
  );
};

export default BalanceGameCategoryButton;
