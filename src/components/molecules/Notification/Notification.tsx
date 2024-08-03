import React, { useState } from 'react';
import NotificationItem, {
  NotificationItemProps,
} from '@/components/atoms/NotificationItem/NotificationItem';
import { NotificationButton } from '@/assets';
import {
  containerStyle,
  buttonStyle,
  notificationStyle,
  titleStyle,
  notificationContentStyle,
  notificationItemStyle,
} from './Notification.style';

export interface NotificationListProps {
  notifications: NotificationItemProps[];
}

const Notification = ({ notifications }: NotificationListProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleNotification = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div css={containerStyle}>
      <NotificationButton css={buttonStyle} onClick={handleNotification} />
      {isOpen ? (
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
      ) : null}
    </div>
  );
};

export default Notification;
