import React, { useState, useMemo, useEffect } from 'react';
import SideBar from '@/components/organisms/SideBar/SideBar';
import OptionBar from '@/components/organisms/OptionBar/OptionBar';
import MyContentList from '@/components/organisms/MyContentList/MyContentList';
import InfoList from '@/components/organisms/InfoList/InfoList';
import MyBalanceGameList from '@/components/organisms/MyBalanceGameList/MyBalanceGameList';
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
import { InfoItem, MyBalanceGameItem, MyContentItem } from '@/types/organisms';
import { useInView } from 'react-intersection-observer';
import * as S from './MyPage.style';

const MyPage = () => {
  const { memberInfo } = useMyInfoQuery(1);
  const {
    myBookmarks,
    fetchNextPage: fetchNextBookmarksPage,
    hasNextPage: hasNextBookmarksPage,
    isFetchingNextPage: isFetchingNextBookmarksPage,
  } = useMyBookmarksQuery();
  const {
    myVote,
    fetchNextPage: fetchNextVotesPage,
    hasNextPage: hasNextVotesPage,
    isFetchingNextPage: isFetchingNextVotesPage,
  } = useMyVotesQuery();
  const {
    myComments,
    fetchNextPage: fetchNextCommentsPage,
    hasNextPage: hasNextCommentsPage,
    isFetchingNextPage: isFetchingNextCommentsPage,
  } = useMyCommentsQuery();
  const {
    myWritten,
    fetchNextPage: fetchNextWrittensPage,
    hasNextPage: hasNextWrittensPage,
    isFetchingNextPage: isFetchingNextWrittensPage,
  } = useMyWrittensQuery();
  const {
    gameBookmark,
    fetchNextPage: fetchNextGameBookmarksPage,
    hasNextPage: hasNextGameBookmarksPage,
    isFetchingNextPage: isFetchingNextGameBookmarksPage,
  } = useGameBookmarksQuery();
  const {
    gameVote,
    fetchNextPage: fetchNextGameVotesPage,
    hasNextPage: hasNextGameVotesPage,
    isFetchingNextPage: isFetchingNextGameVotesPage,
  } = useGameVotesQuery();
  const {
    gameWritten,
    fetchNextPage: fetchNextGameWrittensPage,
    hasNextPage: hasNextGameWrittensPage,
    isFetchingNextPage: isFetchingNextGameWrittensPage,
  } = useGameWrittensQuery();

  const [selectedGroup, setSelectedGroup] = useState<OptionKeys>(
    OptionKeys.TOPIC,
  );
  const [selectedOption, setSelectedOption] = useState<string>(
    optionSets[selectedGroup][0],
  );

  const { ref, inView } = useInView({
    threshold: 1.0,
  });

  useEffect(() => {
    setSelectedOption(optionSets[selectedGroup][0]);
  }, [selectedGroup]);

  useEffect(() => {
    if (inView) {
      if (hasNextBookmarksPage && !isFetchingNextBookmarksPage) {
        fetchNextBookmarksPage();
      }
      if (hasNextWrittensPage && !isFetchingNextWrittensPage) {
        fetchNextWrittensPage();
      }
      if (hasNextVotesPage && !isFetchingNextVotesPage) {
        fetchNextVotesPage();
      }
      if (hasNextCommentsPage && !isFetchingNextCommentsPage) {
        fetchNextCommentsPage();
      }
      if (hasNextGameBookmarksPage && !isFetchingNextGameBookmarksPage) {
        fetchNextGameBookmarksPage();
      }
      if (hasNextGameVotesPage && !isFetchingNextGameVotesPage) {
        fetchNextGameVotesPage();
      }
      if (hasNextGameWrittensPage && !isFetchingNextGameWrittensPage) {
        fetchNextGameWrittensPage();
      }
    }
  }, [
    inView,
    hasNextBookmarksPage,
    isFetchingNextBookmarksPage,
    fetchNextBookmarksPage,
    hasNextWrittensPage,
    isFetchingNextWrittensPage,
    fetchNextWrittensPage,
    hasNextVotesPage,
    isFetchingNextVotesPage,
    fetchNextVotesPage,
    hasNextCommentsPage,
    isFetchingNextCommentsPage,
    fetchNextCommentsPage,
    hasNextGameBookmarksPage,
    isFetchingNextGameBookmarksPage,
    fetchNextGameBookmarksPage,
    hasNextGameVotesPage,
    isFetchingNextGameVotesPage,
    fetchNextGameVotesPage,
    hasNextGameWrittensPage,
    isFetchingNextGameWrittensPage,
    fetchNextGameWrittensPage,
  ]);

  const queryResult = useMemo(() => {
    if (selectedGroup === OptionKeys.TOPIC) {
      switch (selectedOption) {
        case '내가 저장한':
          return myBookmarks;
        case '내가 투표한':
          return myVote;
        case '내가 댓글단':
          return myComments;
        case '내가 작성한':
          return myWritten;
      }
    } else if (selectedGroup === OptionKeys.BALANCE_GAME) {
      switch (selectedOption) {
        case '내가 저장한':
          return gameBookmark;
        case '내가 투표한':
          return gameVote;
        case '내가 만든':
          return gameWritten;
        default:
          return null;
      }
    }
    return null;
  }, [
    selectedGroup,
    selectedOption,
    myBookmarks,
    myVote,
    myComments,
    myWritten,
    gameBookmark,
    gameVote,
    gameWritten,
  ]);

  const renderContent = () => {
    if (!queryResult) {
      return <div>No content available</div>;
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

    return <div>No content available</div>;
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
          {isFetchingNextPage && <p>Loading...</p>}
        </div>
      </div>
    </div>
  );
};

export default MyPage;
