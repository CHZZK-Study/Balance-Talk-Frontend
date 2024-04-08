import { css } from '@emotion/react';
import { Theme } from '@/styles/Theme';

export const titleSectionWrapper = css({
  display: 'flex',
  justifyContent: 'space-between',

  marginBottom: '0.5rem',
});

export const titleSectionLeftWrapper = css({
  display: 'flex',
  padding: '0.5rem',
  gap: '2rem',
});

export const titleSectionRightwrapper = css({
  display: 'flex',
  alignItems: 'center',
  gap: '1rem',
  paddingTop: '1rem',
  fontFamily: 'SpoqaHanSansNeo-Regular',
  fontSize: '1.5rem',
});

export const tagsWrapper = css({
  display: 'flex',
  paddingTop: '1.4rem',
  alignItems: 'center',
  gap: '0.5rem',
});

export const titleWrapper = css({
  display: 'flex',
  flexDirection: 'column',
  gap: '1rem',
  fontFamily: 'SpoqaHanSansNeo-regular',
  fontSize: '48px',
});

export const categoryWrapper = css({
  fontSize: Theme.text.small.fontSize,
  color: Theme.color.colorHunt_gray,
  fontStyle: 'italic',
});

export const postInfoWrapper = css({
  display: 'flex',
  paddingTop: '0.5rem',
  alignItems: 'center',
  gap: '0.5rem',
});
