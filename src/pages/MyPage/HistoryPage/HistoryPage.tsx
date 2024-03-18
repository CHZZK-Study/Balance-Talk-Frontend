import React from 'react';
import { useTabChange } from '@/hooks/mypage/userHistory/useTabChange';
import { Outlet } from 'react-router-dom';
import Tab from '../../../components/mypage/TopTab/Tab/Tab';
import TopTab from '../../../components/mypage/TopTab/TopTab';
import { PATH } from '../../../constants/path';
import { historyContainer } from './HistoryPage.style';

const HistoryPage = () => {
  const tabs = [
    {
      id: 0,
      text: '작성 게시글',
      url: PATH.HISTORY.POSTS,
    },
    {
      id: 1,
      text: '작성 댓글',
      url: PATH.HISTORY.COMMENTS,
    },
    {
      id: 2,
      text: '투표한 게시글',
      url: PATH.HISTORY.VOTED_POSTS,
    },
    {
      id: 3,
      text: '북마크 게시글',
      url: PATH.HISTORY.BOOKMARKS,
    },
  ];
  const { selectedId, onTabChange } = useTabChange(tabs);
  return (
    <div css={historyContainer}>
      <TopTab>
        {tabs.map((tab) => {
          return (
            <Tab
              key={tab.id}
              text={tab.text}
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
