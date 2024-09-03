import { css } from '@emotion/react';
import typo from '@/styles/typo';
import color from '@/styles/color';

export const defaultProfileModalStyling = css({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  width: '100%',
  gap: '17px',
});

export const imageWrapperStyling = css({
  display: 'grid',
  gridTemplateColumns: 'repeat(2, 1fr)',
  gridRowGap: '8px',
  gridColumnGap: '13px',
});

export const imageButtonStyling = css({
  all: 'unset',
  width: '141px',
  height: '141px',
  borderRadius: '5px',
  position: 'relative',
  overflow: 'hidden',
  cursor: 'pointer',

  '&:hover': {
    boxShadow: `0px 0px 15px ${color.MAIN}`,
  },
});

export const profileImage = css({
  width: '100%',
  height: '100%',
  objectFit: 'cover',
});

export const selectedImageStyling = css({
  '&::before': {
    content: '""',
    position: 'absolute',
    top: '0',
    left: '0',
    right: '0',
    bottom: '0',
    border: `8px solid ${color.MAIN}`,
    borderRadius: '5px',
  },
});

export const selectTextStyling = css(typo.Main.Medium, {
  color: color.MAIN,
});

export const selectButtonStyling = css({
  width: '136px',
});
