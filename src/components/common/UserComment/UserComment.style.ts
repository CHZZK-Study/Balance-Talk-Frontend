import { css } from '@emotion/react';
import { Theme } from '@/styles/Theme';

export const userCommentWrapper = css({
  display: 'flex',
  gap: '1rem',
  borderRadius: '8px',
  padding: '1rem',
});

export const commentMainWrapper = css({
  display: 'inline',
  flexDirection: 'column',
  width: '100%',
  backgroundColor: 'white',
});

export const commentWrapper = css({
  display: 'flex',
  alignItems: 'center',
  gap: '1rem',
});

export const commentInfoWrapper = css({
  display: 'inline-flex',
  flexDirection: 'column',
  gap: '1rem',
});

export const commentHistoryWrapper = css({
  display: 'flex',
  alignItems: 'center',
  gap: '1rem',
});

export const nameWrapper = css({
  fontStyle: 'italic',
  fontFamily: 'SpoqaHanSansNeo-medium',
  fontWeight: '500',
});

export const contentWrapper = css({
  fontFamily: 'SpoqaHanSansNeo-regular',
  fontSize: '1rem',
});

export const createdAtWrapper = css({
  fontFamily: 'SpoqaHanSansNeo-thin',
  fontWeight: '300',
  fontSize: '0.8rem',
});

export const utilityBtnsWrapper = css({
  display: 'flex',
  alignItems: 'center',
  gap: '1rem',
});

export const likeBtnWrapper = css({
  display: 'flex',
  alignItems: 'center',
  alignContent: 'center',
  gap: '0.3rem',
});

export const likeCountTextWrapper = css({
  paddingTop: '3px',
});
