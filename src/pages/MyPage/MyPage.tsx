import React, { useState, useMemo, useEffect } from 'react';
import SideBar from '@/components/organisms/SideBar/SideBar';
import OptionBar from '@/components/organisms/OptionBar/OptionBar';
import MyContentList, {
  MyContentItem,
} from '@/components/organisms/MyContentList/MyContentList';
import InfoList, { InfoItem } from '@/components/organisms/InfoList/InfoList';
import MyBalanceGameList, {
  MyBalanceGameItem,
} from '@/components/organisms/MyBalanceGameList/MyBalanceGameList';
import { OptionKeys, optionSets } from '@/constants/optionSets';
import {
  useMyVotesQuery,
  useMyCommentsQuery,
  useMyWrittensQuery,
  useMyBookmarksQuery,
  useGameBookmarksQuery,
  useGameVotesQuery,
  useGameWrittensQuery,
  useMyInfoQuery,
} from '@/hooks/api/mypages';
import { useObserver } from '@/hooks/api/mypages/useObserver';
import * as S from './MyPage.style';

const MyPage = () => {
  const { memberInfo } = useMyInfoQuery(1);

  const myBookmarksQuery = useMyBookmarksQuery();
  const myVotesQuery = useMyVotesQuery();
  const myCommentsQuery = useMyCommentsQuery();
  const myWrittensQuery = useMyWrittensQuery();
  const gameBookmarksQuery = useGameBookmarksQuery();
  const gameVotesQuery = useGameVotesQuery();
  const gameWrittensQuery = useGameWrittensQuery();

  const queries = {
    myBookmarks: useMyBookmarksQuery(),
    myVotes: useMyVotesQuery(),
    myComments: useMyCommentsQuery(),
    myWrittens: useMyWrittensQuery(),
    gameBookmarks: useGameBookmarksQuery(),
    gameVotes: useGameVotesQuery(),
    gameWrittens: useGameWrittensQuery(),
  };

  const { ref, isFetchingAnyNextPage } = useObserver(queries);

  const [selectedGroup, setSelectedGroup] = useState<OptionKeys>(
    OptionKeys.TOPIC,
  );
  const [selectedOption, setSelectedOption] = useState<string>(
    optionSets[selectedGroup][0],
  );

  useEffect(() => {
    setSelectedOption(optionSets[selectedGroup][0]);
  }, [selectedGroup]);

  const queryResult = useMemo(() => {
    if (selectedGroup === OptionKeys.TOPIC) {
      switch (selectedOption) {
        case '내가 저장한':
          return queries.myBookmarks.myBookmarks;
        case '내가 투표한':
          return queries.myVotes.myVote;
        case '내가 댓글단':
          return queries.myComments.myComments;
        case '내가 작성한':
          return queries.myWrittens.myWritten;
      }
    } else if (selectedGroup === OptionKeys.BALANCE_GAME) {
      switch (selectedOption) {
        case '내가 저장한':
          return queries.gameBookmarks.gameBookmark;
        case '내가 투표한':
          return queries.gameVotes.gameVote;
        case '내가 만든':
          return queries.gameWrittens.gameWritten;
        default:
          return null;
      }
    }
    return null;
  }, [
    selectedGroup,
    selectedOption,
    myBookmarksQuery,
    myVotesQuery,
    myCommentsQuery,
    myWrittensQuery,
    gameBookmarksQuery,
    gameVotesQuery,
    gameWrittensQuery,
  ]);

  const renderContent = () => {
    if (!queryResult) {
      return <div>표시할 페이지가 없습니다</div>;
    }

    if (selectedGroup === OptionKeys.TOPIC) {
      if (
        selectedOption === '내가 저장한' ||
        selectedOption === '내가 작성한'
      ) {
        const content = queryResult.content as MyContentItem[];
        return <MyContentList items={content} />;
      }
      if (
        selectedOption === '내가 투표한' ||
        selectedOption === '내가 댓글단'
      ) {
        const content = queryResult.content as InfoItem[];
        return <InfoList items={content} />;
      }
    } else if (selectedGroup === OptionKeys.BALANCE_GAME) {
      const content = queryResult.content as MyBalanceGameItem[];
      return <MyBalanceGameList items={content} />;
    }

    return <div>표시할 페이지가 없습니다</div>;
  };

  return (
    <div css={S.pageContainer}>
      {memberInfo && (
        <SideBar
          nickname={memberInfo.nickname}
          profileImageUrl={memberInfo.profileImageUrl}
          postsCount={memberInfo.postsCount}
          bookmarkedPostsCount={memberInfo.bookmarkedPostsCount}
        />
      )}
      <div css={S.contentWrapper}>
        <OptionBar
          selectGroupItems={[
            { label: '톡픽', value: OptionKeys.TOPIC },
            { label: '밸런스 게임', value: OptionKeys.BALANCE_GAME },
          ]}
          initialSelectedGroupValue={selectedGroup}
          selectedOption={selectedOption}
          onGroupSelect={setSelectedGroup}
          onOptionSelect={setSelectedOption}
        />
        <div css={S.contentList}>{renderContent()}</div>
        <div ref={ref} css={S.loader}>
          {isFetchingAnyNextPage && <p>Loading...</p>}
        </div>
      </div>
    </div>
  );
};

export default MyPage;
