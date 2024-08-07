import React, { useState } from 'react';
import NotificationItem, {
  NotificationItemProps,
} from '@/components/atoms/NotificationItem/NotificationItem';
import { NotificationBell, NotificationBellWithDot } from '@/assets';
import {
  iconContainerStyle,
  buttonStyle,
  notificationContainerStyle,
  notificationStyle,
  titleStyle,
  notificationContentStyle,
  notificationItemStyle,
} from './Notification.style';

export interface NotificationListProps {
  isNew?: boolean;
  notifications: NotificationItemProps[];
}

const Notification = ({
  isNew = false,
  notifications,
}: NotificationListProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleNotification = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div css={iconContainerStyle}>
      {isNew ? (
        <NotificationBellWithDot
          css={buttonStyle}
          onClick={handleNotification}
        />
      ) : (
        <NotificationBell css={buttonStyle} onClick={handleNotification} />
      )}
      {isOpen ? (
        <div css={notificationContainerStyle}>
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
        </div>
      ) : null}
    </div>
  );
};

export default Notification;
