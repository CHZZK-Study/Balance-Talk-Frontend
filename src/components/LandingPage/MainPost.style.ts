import { css } from '@emotion/react';

export const mainPostInfoWrapper = css({
  marginLeft: '4vw',
  display: 'flex',
  flexDirection: 'column',
  marginTop: '100px',
});

export const mainPostTitleWrapper = css({
  display: 'flex',
  marginBottom: '10px',
});

export const TagButtonWrapper = css({
  marginTop: '10px',
  marginLeft: '10px',
});

export const mainPostTitle = css({
  fontFamily: 'SpoqaHanSansNeo-Bold',
  fontSize: '48px',
  textShadow: '0px 4px 4px gray',
});

export const voteCount = css({
  fontFamily: 'SpoqaHanSansNeo-Regular',
  fontSize: '24px',
  marginBottom: '20px',
});

export const voteButtonWrapper = css({
  display: 'flex',
  justifyContent: 'center',
  flex: 1,
});

export const etcButtonWrapper = css({
  display: 'flex',
  justifyContent: 'space-between',
  height: '38px',
  alignItems: 'center',
});

export const etcButtonText = css({
  marginLeft: '5px',
  marginRight: '5px',
  position: 'relative',
  bottom: '7px',
  fontFamily: 'SpoqaHanSansNeo-Regular',
});
