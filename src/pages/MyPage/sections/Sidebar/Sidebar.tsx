import React from 'react';
import { useTabChange } from '@/hooks/mypage/userHistory/useTabChange';
import { Home, Lock, Person } from '../../../../assets';
import Divider from '../../../../components/common/Divider';
import Profile from '../../../../components/common/Profile/Profile';
import { PATH } from '../../../../constants/path';
import {
  sidebarContainer,
  sidebarInnerContainer,
  sidebarNavContainer,
} from './Sidebar.style';
import SidebarNav from './SidebarNav/SidebarNav';

const Sidebar = () => {
  const sidebarNavs = [
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
  const { selectedId, onTabChange } = useTabChange(sidebarNavs);
  return (
    <section css={sidebarContainer}>
      <div css={sidebarInnerContainer}>
        <Profile />
        <nav css={sidebarNavContainer}>
          {sidebarNavs.map((nav) => {
            return (
              <SidebarNav
                key={nav.id}
                navId={nav.id}
                selectedId={selectedId}
                icon={nav.icon}
                text={nav.text}
                changeSelect={onTabChange}
              />
            );
          })}
        </nav>
      </div>
      <Divider />
    </section>
  );
};

export default Sidebar;
