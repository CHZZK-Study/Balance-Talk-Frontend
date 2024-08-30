import React, { useState, useEffect } from 'react';
import SideBar from '@/components/organisms/SideBar/SideBar';
import OptionBar from '@/components/organisms/OptionBar/OptionBar';
import MyContentList from '@/components/organisms/MyContentList/MyContentList';
import InfoList from '@/components/organisms/InfoList/InfoList';
import MyBalanceGameList from '@/components/organisms/MyBalanceGameList/MyBalanceGameList';
import { OptionKeys, optionSets } from '@/constants/optionSets';
import {
  useMyVotesQuery,
  useMyCommentsQuery,
  useMyTalksQuery,
  useBookmarksQuery,
  useGameBookmarksQuery,
  useGameVotesQuery,
  useGameMyQuery,
  useMyInfoQuery,
} from '@/hooks/api/mypages';
import {
  Bookmark,
  MyTalk,
  MyVote,
  MyComment,
  GameBookmark,
  GameVote,
  MyGame,
  // TopicQueryKeys,
  // BalanceGameQueryKeys,
  MyInfiniteData,
} from '@/types/mypages';
import { InfiniteData } from '@tanstack/react-query';
import * as S from './MyPage.style';

// type TopicQueryKeys = (typeof optionSets)[OptionKeys.TOPIC][number];
// type BalanceGameQueryKeys =
//   (typeof optionSets)[OptionKeys.BALANCE_GAME][number];

const MyPage = () => {
  const [selectedGroup, setSelectedGroup] = useState<OptionKeys>(
    OptionKeys.TOPIC,
  );
  const [selectedOption, setSelectedOption] = useState<string>(
    optionSets[selectedGroup][0],
  );

  const { memberInfo, isLoading } = useMyInfoQuery(1);

  const bookmarksQuery = useBookmarksQuery();
  const myVotesQuery = useMyVotesQuery();
  const myCommentsQuery = useMyCommentsQuery();
  const myTalksQuery = useMyTalksQuery();

  const gameBookmarksQuery = useGameBookmarksQuery();
  const gameVotesQuery = useGameVotesQuery();
  const gameMyQuery = useGameMyQuery();

  const [topicContentQueryResult, setTopicContentQueryResult] = useState<
    InfiniteData<MyInfiniteData<Bookmark | MyTalk>> | undefined
  >();
  const [topicInfoQueryResult, setTopicInfoQueryResult] = useState<
    InfiniteData<MyInfiniteData<MyVote | MyComment>> | undefined
  >();
  const [balanceGameQueryResult, setBalanceGameQueryResult] = useState<
    InfiniteData<MyInfiniteData<GameBookmark | GameVote | MyGame>> | undefined
  >();

  useEffect(() => {
    if (selectedGroup === OptionKeys.TOPIC) {
      // `TOPIC` 그룹에 대한 로직
      switch (selectedOption) {
        case '내가 저장한':
          setTopicContentQueryResult(bookmarksQuery.data);
          break;
        case '내가 투표한':
          setTopicInfoQueryResult(myVotesQuery.data);
          break;
        case '내가 댓글단':
          setTopicInfoQueryResult(myCommentsQuery.data);
          break;
        case '내가 작성한':
          setTopicContentQueryResult(myTalksQuery.data);
          break;
      }
    } else if (selectedGroup === OptionKeys.BALANCE_GAME) {
      // `BALANCE_GAME` 그룹에 대한 로직
      switch (selectedOption) {
        case '내가 저장한':
          setBalanceGameQueryResult(gameBookmarksQuery.data);
          break;
        case '내가 투표한':
          setBalanceGameQueryResult(gameVotesQuery.data);
          break;
        case '내가 만든':
          setBalanceGameQueryResult(gameMyQuery.data);
          break;
      }
    }
  }, [selectedGroup, selectedOption]);

  // useEffect(() => {
  //   const handleScroll = () => {
  //     if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
  //       loadMore();
  //     }
  //   };
  //
  //   window.addEventListener('scroll', handleScroll);
  //   return () => {
  //     window.removeEventListener('scroll', handleScroll);
  //   };
  // }, [loadMore]);

  const renderContent = () => {
    if (selectedGroup === OptionKeys.TOPIC) {
      if (
        selectedOption === '내가 저장한' ||
        selectedOption === '내가 작성한'
      ) {
        if (topicContentQueryResult) {
          const contentList = topicContentQueryResult.pages.flatMap((page) => {
            if ('content' in page) {
              // 'content'가 존재하는지 체크
              return page.content as (Bookmark | MyTalk)[];
            }
            return [];
          });

          return <MyContentList items={contentList} />;
        }
      } else if (
        selectedOption === '내가 투표한' ||
        selectedOption === '내가 댓글단'
      ) {
        if (topicInfoQueryResult) {
          const infoList = topicInfoQueryResult.pages.flatMap((page) => {
            if ('content' in page) {
              return page.content as (MyVote | MyComment)[];
            }
            return [];
          });

          return <InfoList items={infoList} />;
        }
      }
    } else if (selectedGroup === OptionKeys.BALANCE_GAME) {
      if (balanceGameQueryResult) {
        const gameList = balanceGameQueryResult.pages.flatMap((page) => {
          if ('content' in page) {
            return page.content as (GameBookmark | GameVote | MyGame)[];
          }
          return [];
        });

        return <MyBalanceGameList items={gameList} />;
      }
    }

    return <p>데이터를 불러오는 중...</p>;
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
          onGroupSelect={setSelectedGroup}
          onOptionSelect={setSelectedOption}
        />
        <div css={S.contentList}>{renderContent()}</div>
      </div>
    </div>
  );
};

export default MyPage;
