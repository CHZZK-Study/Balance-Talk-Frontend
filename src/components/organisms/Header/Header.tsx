/* eslint-disable @typescript-eslint/no-misused-promises */
/* eslint-disable no-console */
import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useLogoutMutation } from '@/hooks/api/member/useLogoutMutation';
import { useNewSelector } from '@/store';
import { useParseJwt } from '@/hooks/common/useParseJwt';
import { useMemberQuery } from '@/hooks/api/member/useMemberQuery';
import { selectAccessToken } from '@/store/auth';
import { Logo, WriteIcon, DefaultProfile } from '@/assets';
import Button from '@/components/atoms/Button/Button';
import Notification from '@/components/molecules/Notification/Notification';
import ProfileIcon from '@/components/atoms/ProfileIcon/ProfileIcon';
import { useFetchSSE } from '@/api/notifications';
import * as S from './Header.style';

const Header = () => {
  const navigate = useNavigate();
  const accessToken = useNewSelector(selectAccessToken);
  const logout = useLogoutMutation();
  const { member } = useMemberQuery(useParseJwt(accessToken)?.memberId);
  const [isNew, setIsNew] = useState(false);

  const { messages, handleMarkAsRead } = useFetchSSE({
    accessToken: accessToken || '',
    onLogout: () => {
      logout.mutate();
      navigate('/login');
    },
  });

  useEffect(() => {
    if (messages.some((message) => message.isNew)) {
      setIsNew(true);
    } else {
      setIsNew(false);
    }
  }, [messages]);

  const notifications = messages.map((message) => ({
    category: message.category,
    date: message.createdAt,
    title: message.postTitle,
    content: message.message,
    isNew: message.isNew,
    id: message.id,
  }));

  const handleLoginButton = () => {
    if (accessToken) {
      logout.mutate();
    } else {
      navigate('/login');
    }
  };

  const handleProfileIcon = () => {
    if (accessToken) {
      navigate('/mypage');
    } else {
      navigate('/login');
    }
  };

  const handleCreatePostButton = () => {
    if (accessToken) {
      navigate('/post/create');
    } else {
      navigate('/login');
    }
  };

  const handleNotificationClick = async (notificationId: number) => {
    try {
      await handleMarkAsRead(notificationId);
    } catch (error) {
      console.error('알림 클릭 에러:', error);
    }
  };

  return (
    <div css={S.containerStyle}>
      <div css={S.logoStyle}>
        <Link to="/">
          <Logo />
        </Link>
      </div>
      <div css={S.rightContainerStyle}>
        <Button
          variant="roundPrimary"
          size="medium"
          css={S.WriteButtonStyle}
          onClick={handleCreatePostButton}
        >
          <WriteIcon css={S.IconStyle} />
          톡픽쓰기
        </Button>
        <div css={S.rightContainerStyle}>
          <button
            type="button"
            onClick={handleLoginButton}
            css={S.LoginButtonStyle}
          >
            {accessToken ? '로그아웃' : '로그인'}
          </button>
          <Notification
            isNew={isNew}
            notifications={notifications}
            onClickNotification={handleNotificationClick}
          />
          <div css={S.notificationStyle}>
            {accessToken ? (
              <ProfileIcon
                interaction="settings"
                imgUrl={member?.profileImageUrl ?? DefaultProfile}
                onClick={handleProfileIcon}
              />
            ) : (
              <ProfileIcon interaction="normal" onClick={handleProfileIcon} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
