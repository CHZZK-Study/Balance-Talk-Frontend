import React, { useRef, useEffect, ReactNode } from 'react';
import { NewNotification } from '@/assets';
import {
  notificationItemStyle,
  headerStyle,
  categoryStyle,
  dateStyle,
  titleStyle,
  contentStyle,
  NewNotificationStyle,
} from './NotificationItem.style';

export interface NotificationItemProps {
  category: string;
  date: string;
  title: string;
  content: string;
  isNew?: boolean;
}

const NotificationItem = ({
  category,
  date,
  title,
  content,
  isNew,
}: NotificationItemProps) => {
  return (
    <div css={notificationItemStyle}>
      {isNew ? <NewNotification css={NewNotificationStyle} /> : null}
      <div css={headerStyle}>
        <div css={categoryStyle}>{category}</div>
        <div css={dateStyle}>{date}</div>
      </div>
      <div css={titleStyle}>{title}</div>
      <div css={contentStyle}>{content}</div>
    </div>
  );
};

export default NotificationItem;
