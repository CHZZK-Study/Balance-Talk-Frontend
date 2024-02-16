import React from 'react';
import Home from '../../../assets/svg/Home';
import Lock from '../../../assets/svg/Lock';
import Person from '../../../assets/svg/Person';
import { PATH } from '../../../constants/path';
import Profile from '../../Profile/Profile';
import Divider from '../../common/Divider';
import {
  sidebarContainer,
  sidebarInnerContainer,
  sidebarNavContainer,
} from './Sidebar.style';
import SidebarNav from './SidebarNav';

const Sidebar = () => {
  return (
    <section css={sidebarContainer}>
      <div css={sidebarInnerContainer}>
        <Profile />
        <nav css={sidebarNavContainer}>
          <SidebarNav url={PATH.HISTORY.POSTS} icon={<Home />}>
            활동내역
          </SidebarNav>
          <SidebarNav url={PATH.UPDATE} icon={<Person />}>
            회원정보 수정
          </SidebarNav>
          <SidebarNav url={PATH.DELETE} icon={<Lock />}>
            회원탈퇴
          </SidebarNav>
        </nav>
      </div>
      <Divider />
    </section>
  );
};

export default Sidebar;
