import { css } from '@emotion/react';
import typo from '@/styles/typo';
import color from '@/styles/color';

export const votePrototypeStyle = css({
  textAlign: 'center',
  width: '100%',
  margin: '0 auto',
});

export const buttonContainerStyle = css({
  display: 'flex',
  justifyContent: 'center',
  marginBottom: '20px',
  gap: '20px',
});

export const voteTextStyle = css(typo.Component.Bold, {
  color: color.GY[1],
  padding: '22px 42px 22px 42px',
});

export const getButtonStyle = (
  side: 'left' | 'right',
  selectedButton: 'left' | 'right' | null,
) =>
  css({
    ...(selectedButton === side && {
      backgroundColor: side === 'left' ? color.RED : color.BLUE,
      color: color.WT,
      outline: 'none',
    }),
  });
