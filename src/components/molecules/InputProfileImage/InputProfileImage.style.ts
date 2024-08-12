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
  '&:hover': [
    typo.Main.SemiBold,
    {
      color: color.MAIN,
    },
  ],
});

export const profileImageText = css(typo.Comment.Regular, {
  color: color.GY[1],
});
