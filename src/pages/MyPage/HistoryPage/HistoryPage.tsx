import React, { useState } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import { PATH } from '../../../constants/path';
import { historyContainer } from './HistoryPage.style';
import Tab from '../../../components/mypage/TopTab/Tab/Tab';
import TopTab from '../../../components/mypage/TopTab/TopTab';

const HistoryPage = () => {
  const tabs = [
    {
      id: 1,
      name: '작성 게시글',
      url: PATH.HISTORY.POSTS,
    },
    {
      id: 2,
      name: '작성 댓글',
      url: PATH.HISTORY.COMMENTS,
    },
    {
      id: 3,
      name: '투표한 게시글',
      url: PATH.HISTORY.VOTED_POSTS,
    },
    {
      id: 4,
      name: '북마크 게시글',
      url: PATH.HISTORY.BOOKMARKS,
    },
  ];
  const [selectedId, setSelectedId] = useState(1);
  const navigate = useNavigate();
  const onTabChange = (tabId: number) => {
    setSelectedId(tabId);
    navigate(tabs[tabId - 1].url);
  };
  return (
    <div css={historyContainer}>
      <TopTab>
        {tabs.map((tab) => {
          return (
            <Tab
              key={tab.id}
              text={tab.name}
              tabId={tab.id}
              selectedId={selectedId}
              changeSelect={onTabChange}
            />
          );
        })}
      </TopTab>

      <Outlet />
    </div>
  );
};

export default HistoryPage;
