import { css } from '@emotion/react';
import color from '@/styles/color';
import typo from '@/styles/typo';

export const modalStyling = css({
  position: 'fixed',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '1526px',
  height: '710px',
  backgroundColor: color.WT,
  borderRadius: '20px',
  boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.1)',
});

export const modalHeaderStyling = css(typo.Title, {
  display: 'flex',
  alignItems: 'center',
  padding: '58px 0 57px 100px',
  backgroundColor: color.MAIN,
  color: color.WT,
  borderTopLeftRadius: '20px',
  borderTopRightRadius: '20px',
});

export const modalCloseStyling = css({
  background: 'none',
  position: 'absolute',
  top: '27.9px',
  right: '33.66px',
  border: 'none',
  color: color.WT,
  fontSize: '24px',
  cursor: 'pointer',
});

export const modalContentStyling = css(typo.Main.Medium, {
  height: '570px',
  padding: '56px 99px 134px 100px',
  color: color.GY[1],
  whiteSpace: 'pre-wrap',
  lineHeight: '25px',
});
