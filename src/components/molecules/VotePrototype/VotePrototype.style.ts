import { css } from '@emotion/react';
import typo from '@/styles/typo';
import color from '@/styles/color';

export const votePrototypeStyle = css({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '20px',
});

export const buttonContainerStyle = css({
  display: 'flex',
  justifyContent: 'space-between',
  gap: '20px',
});

export const voteTextStyle = css(typo.Component.Bold, {
  color: color.GY[1],
  padding: '22px 42px',
});

export const getButtonStyle = (
  side: 'A' | 'B',
  selectedButton: 'A' | 'B' | null,
) =>
  css({
    ...(selectedButton === side && {
      backgroundColor: side === 'A' ? color.RED : color.BLUE,
      color: color.WT,
      outline: 'none',
    }),
  });
