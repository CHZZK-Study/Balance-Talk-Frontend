import React from 'react';
import NotificationItem, {
  NotificationItemProps,
} from '@/components/atoms/NotificationItem/NotificationItem';
import {
  notificationStyle,
  titleStyle,
  notificationContentStyle,
  notificationItemStyle,
} from './Notification.style';

export interface NotificationListProps {
  notifications: NotificationItemProps[];
}
const Notification = ({ notifications }: NotificationListProps) => (
  <div css={notificationStyle}>
    <div css={titleStyle}>알림</div>
    <div css={notificationContentStyle}>
      {notifications.map((notification) => (
        <div css={notificationItemStyle}>
          <NotificationItem
            category={notification.category}
            date={notification.date}
            title={notification.title}
            content={notification.content}
            isNew={notification.isNew}
          />
        </div>
      ))}
    </div>
  </div>
);

export default Notification;
