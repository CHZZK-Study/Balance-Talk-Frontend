import { css } from '@emotion/react';
import color from '@/styles/color';
import typo from '@/styles/typo';

export const shareModalStyling = css({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
});

export const shareTextStyling = css(typo.SubTitle, {
  color: color.BK,
});

export const linkWrapperStyling = css({
  display: 'flex',
  marginTop: '55px',
  marginBottom: '27px',
});

export const linkBoxStyling = css({
  display: 'flex',
  width: '429px',
  height: '65px',
  alignItems: 'center',
  padding: '0 20px',
  backgroundColor: color.WT,
  borderTopLeftRadius: '10px',
  borderBottomLeftRadius: '10px',
  outline: `1px solid ${color.GY[2]}`,
});

export const linkTextStyling = css(typo.SubTitle, {
  whiteSpace: 'nowrap',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  color: '#6389F3',
});

export const copyBoxStyling = css(typo.SubTitle, {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: '110px',
  height: '65px',
  gap: '5px',
  color: color.GY[1],
  backgroundColor: color.GY[2],
  borderTopRightRadius: '10px',
  borderBottomRightRadius: '10px',
  outline: `1px solid ${color.GY[2]}`,
  cursor: 'pointer',
});

export const btnWrapperStyling = css({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '10px',
});

export const loginButtonStyling = css({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: '83px',
  height: '83px',
  borderRadius: '50%',
  backgroundColor: color.WT,
  outline: `1px solid ${color.GY[2]}`,
  cursor: 'pointer',
});

export const btnTextStyling = css(typo.Comment.SemiBold, {
  textAlign: 'center',
  color: color.BK,
});
