import { css } from '@emotion/react';
import color from '@/styles/color';
import typo from '@/styles/typo';

export const buttonWrapStyle = (option: 'A' | 'B') =>
  css({
    cursor: 'pointer',
    padding: '0',
    color: color.BK,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '561px',
    backgroundColor: 'transparent',
    borderRadius: option === 'A' ? '20px 0 0 20px' : '0 20px 20px 0',
    '&:hover': {
      boxShadow:
        option === 'A'
          ? `-5px 0px 5px rgba(255, 175, 191, 0.2)`
          : `5px 0px 5px rgba(157, 183, 255, 0.3)`,
      border: 'none',
      borderTop:
        option === 'A'
          ? `2px solid ${color.PINK}`
          : `2px solid  ${color.SKYBLUE}`,
      borderRight: option === 'A' ? 'none' : `2px solid  ${color.SKYBLUE}`,
      borderBottom:
        option === 'A'
          ? `2px solid ${color.PINK}`
          : `2px solid  ${color.SKYBLUE}`,
      borderLeft: option === 'A' ? `2px solid ${color.PINK}` : 'none',
    },
    '&:active': {
      backgroundColor:
        option === 'A'
          ? `-5px 0px 15px ${color.RED}`
          : `5px 0px 15px ${color.BLUE}`,
      color: color.WT,
    },
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
      borderRadius: side === 'A' ? '0 0 0 20px' : '0 0 20px 0',
    }),
  });

export const imageStyle = (option: 'A' | 'B') =>
  css({
    width: '561px',
    height: '320px',
    objectFit: 'cover',
    borderRadius: option === 'A' ? '20px 0 0 0' : '0 20px 0 0',
  });

export const contentBoxStyle = css({
  padding: '27px 0 37px 0',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  width: '561px',
});

export const descriptionStyle = css(typo.Main.Medium, {
  width: '140px',
});

export const nameStyle = css(typo.Title, {
  width: '561px',
});
