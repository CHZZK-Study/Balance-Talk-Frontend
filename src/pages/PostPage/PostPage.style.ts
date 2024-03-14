import { css } from '@emotion/react';
import { Theme } from '@/styles/Theme';

export const PostPageWrapper = css({
  display: 'flex',
  flexDirection: 'column',
  width: '100vw',
  maxWidth: '1000px',
  margin: '0 auto',
});

export const UserSectionWrapper = css({
  display: 'flex',
  justifyContent: 'space-between',
});

export const ButtonSectionWrapper = css({
  padding: '1rem 0',
});

export const ButtonStyleWrapper = css({
  width: '100%',
  fontSize: `${Theme.text.medium.fontSize}`,
  lineHeight: `${Theme.text.medium.lineHeight}`,
  border: `1px solid ${Theme.color.colorHunt_black}`,
  color: `${Theme.color.colorHunt_black}`,
  borderRadius: '1rem',
  padding: '0.5rem',
});
