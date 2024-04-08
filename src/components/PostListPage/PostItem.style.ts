import { css } from '@emotion/react';

export const postItemContainer = css({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  width: '500px',
  height: '400px',
  background: 'rgba(238, 238, 238, .5)',
  borderRadius: '5px',
  boxShadow: '0px 4px 4px gray',
  margin: '20px',
  cursor: 'pointer',
});

export const postItemTitleWrapper = css({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'baseline',
  width: '400px',
  marginTop: '20px',
});

export const postItemTitle = css({
  fontFamily: 'SpoqaHanSansNeo-Bold',
  fontSize: '24px',
});

export const postItemDday = css({
  fontFamily: 'SpoqaHanSansNeo-Light',
  fontSize: '16px',
});

export const tagWrapper = css({
  display: 'flex',
  justifyContent: 'flex-start',
  alignItems: 'baseline',
  width: '80%',
  marginTop: '10px',
  marginRight: '10px',
});

export const etcButtonWrapper = css({
  display: 'flex',
  justifyContent: 'space-between',
  width: '80%',
  marginTop: '40px',
  height: '38px',
  alignItems: 'center',
});

export const etcButtonText = css({
  marginLeft: '5px',
  marginRight: '15px',
  position: 'relative',
  bottom: '7px',
  fontFamily: 'SpoqaHanSansNeo-Regular',
});
