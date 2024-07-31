import { css } from '@emotion/react';
import color from '@/styles/color';
import typo from '@/styles/typo';

export const notificationStyle = css({
  display: 'flex',
  flexDirection: 'column',
  backgroundColor: color.GY[3],
  border: `1px solid ${color.GY[2]}`,
  width: '435px',
  height: '602px',
  borderRadius: '10px',
});

export const titleStyle = css(typo.SubTitle, {
  color: color.BK,
  padding: '30px 0 18px 23px',
});

export const notificationContentStyle = css({
  flex: 1,
  overflowY: 'auto',
  padding: '0 0 30px 23px',
});

export const notificationItemStyle = css({
  '&:not(:last-child)': {
    padding: '0 20px 10px 0',
  },
});
