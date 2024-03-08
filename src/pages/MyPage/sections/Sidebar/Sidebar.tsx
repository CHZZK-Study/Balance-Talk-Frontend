import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { PATH } from '../../../../constants/path';
import Profile from '../../../../components/common/Profile/Profile';
import Divider from '../../../../components/common/Divider';
import {
  sidebarContainer,
  sidebarInnerContainer,
  sidebarNavContainer,
} from './Sidebar.style';
import SidebarNav from './SidebarNav/SidebarNav';
import { Home, Lock, Person } from '../../../../assets';

const Sidebar = () => {
  const sidebarNavs = [
    {
      id: 1,
      url: `${PATH.HISTORY.MAIN}/${PATH.HISTORY.POSTS}`,
      icon: <Home />,
      text: '활동내역',
    },
    {
      id: 2,
      url: PATH.UPDATE,
      icon: <Person />,
      text: '회원정보 수정',
    },
    {
      id: 3,
      url: PATH.DELETE,
      icon: <Lock />,
      text: '회원탈퇴',
    },
  ];
  const [selectedId, setSelectedId] = useState(1);
  const navigate = useNavigate();
  const onTabChange = (id: number) => {
    setSelectedId(id);
    navigate(sidebarNavs[id - 1].url);
  };
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
