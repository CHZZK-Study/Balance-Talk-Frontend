import color from '@/styles/color';
import typo from '@/styles/typo';
import { css } from '@emotion/react';

export const profileImageSelectContainer = css({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '20px',
});

export const profileImageTextContainer = css({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '10px',
});

export const profileDefaultText = css(typo.Main.Medium, {
  color: color.BK,
  textDecoration: 'underline',
  textUnderlineOffset: '5px',
  cursor: 'pointer',
  '&:hover': [
    typo.Main.SemiBold,
    {
      color: color.MAIN,
    },
  ],
});

export const profileImageText = (isError: boolean) =>
  css(typo.Comment.Regular, {
    color: isError ? color.RED : color.GY[1],
  });

export const defaultProfileModalcenterStyling = css({
  position: 'fixed',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  zIndex: '1000',
});
