import React from 'react';
import { useTabChange } from '@/hooks/mypage/userHistory/useTabChange';
import { Home, Lock, Person } from '../../../../assets';
import Divider from '../../../../components/common/Divider';
import Profile from '../../../../components/common/Profile/Profile';
import { PATH } from '../../../../constants/path';
import {
  sidebarContainer,
  sidebarInnerContainer,
  sidebarTabContainer,
} from './Sidebar.style';
import SidebarTab from './SidebarTab/SidebarTab';

const Sidebar = () => {
  const Tabs = [
    {
      id: 0,
      url: `${PATH.HISTORY.MAIN}/${PATH.HISTORY.POSTS}`,
      icon: <Home />,
      text: '활동내역',
    },
    {
      id: 1,
      url: PATH.UPDATE,
      icon: <Person />,
      text: '회원정보 수정',
    },
    {
      id: 2,
      url: PATH.DELETE,
      icon: <Lock />,
      text: '회원탈퇴',
    },
  ];
  const { selectedId, onTabChange } = useTabChange(Tabs);
  return (
    <section css={sidebarContainer}>
      <div css={sidebarInnerContainer}>
        <Profile />
        <ul css={sidebarTabContainer}>
          {Tabs.map((tab) => {
            return (
              <SidebarTab
                key={tab.id}
                navId={tab.id}
                selectedId={selectedId}
                icon={tab.icon}
                text={tab.text}
                changeSelect={onTabChange}
              />
            );
          })}
        </ul>
      </div>
      <Divider />
    </section>
  );
};

export default Sidebar;
