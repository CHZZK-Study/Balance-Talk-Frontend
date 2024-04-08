import { css } from '@emotion/react';

export const balanceOptionCardsSectionWrapper = css({
  position: 'relative',
  display: 'flex',
  flexDirection: 'column',
  gap: '1rem',
  justifyContent: 'center',
});

export const closedImageWrapper = css({
  position: 'absolute',
  top: '-5px',
  left: '-20px',
  zIndex: '300',
});
export const balanceOptionCardsWrapper = css({
  position: 'relative',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  padding: '1rem',
  backgroundColor: '#EEEEEE',
  boxShadow: '0 4px 4px gray',
});

export const versusTextwrapper = css({
  position: 'absolute',
  fontFamily: 'SpoqaHanSansNeo-Bold',
  fontSize: '50px',
  zIndex: 1,
  top: 230,
  WebkitTextStroke: '1px white',
  textShadow: '0px 4px 4px gray',
});
