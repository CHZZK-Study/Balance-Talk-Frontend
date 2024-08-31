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
// import {
//   MyWritten,
//   MyBookmark,
//   MyVote,
//   MyComment,
//   GameBookmark,
//   GameVote,
//   GameWritten,
// } from '@/types/mypages';
import { InfoItem, MyBalanceGameItem, MyContentItem } from '@/types/organisms';
import * as S from './MyPage.style';

const MyPage = () => {
  const { memberInfo } = useMyInfoQuery(1);
  const { myBookmark: bookmarksData } = useMyBookmarksQuery();
  const { myVote: myVotesData } = useMyVotesQuery();
  const { myComment: myCommentsData } = useMyCommentsQuery();
  const { myWritten: myWrittenData } = useMyWrittensQuery();
  const { gameBookmark: gameBookmarksData } = useGameBookmarksQuery();
  const { gameVote: gameVotesData } = useGameVotesQuery();
  const { gameWritten: gameWrittenData } = useGameWrittensQuery();

  console.log('memberInfo:', memberInfo);
  console.log('bookmarksData:', bookmarksData);
  console.log('myVotesData:', myVotesData);
  console.log('myCommentsData:', myCommentsData);
  console.log('myWrittenData:', myWrittenData);
  console.log('gameBookmarksData:', gameBookmarksData);
  console.log('gameVotesData:', gameVotesData);
  console.log('gameWrittenData:', gameWrittenData);

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
          return {
            ...bookmarksData,
            content: bookmarksData?.content.map((item: MyContentItem) => ({
              ...item,
              showBookmark: true,
            })),
          };
        case '내가 투표한':
          return {
            ...myVotesData,
            content: myVotesData?.content.map((item: InfoItem) => ({
              ...item,
              prefix: '내 선택',
            })),
          };
        case '내가 댓글단':
          return {
            ...myCommentsData,
            content: myCommentsData?.content.map((item: InfoItem) => ({
              ...item,
              prefix: '내 댓글',
            })),
          };
        case '내가 작성한':
          return {
            ...myWrittenData,
            content: myWrittenData?.content.map((item: MyContentItem) => ({
              ...item,
              showBookmark: false,
            })),
          };
        default:
          return null;
      }
    } else if (selectedGroup === OptionKeys.BALANCE_GAME) {
      switch (selectedOption) {
        case '내가 저장한':
          return {
            ...gameBookmarksData,
            content: gameBookmarksData?.content.map(
              (item: MyBalanceGameItem) => ({
                ...item,
                showBookmark: true,
              }),
            ),
          };
        case '내가 투표한':
          return {
            ...gameVotesData,
            content: gameVotesData?.content.map((item: MyBalanceGameItem) => ({
              ...item,
              showBookmark: false,
            })),
          };
        case '내가 만든':
          return {
            ...gameWrittenData,
            content: gameWrittenData?.content.map(
              (item: MyBalanceGameItem) => ({
                ...item,
                showBookmark: false,
              }),
            ),
          };
        default:
          return null;
      }
    }
    return null;
  }, [
    selectedGroup,
    selectedOption,
    bookmarksData,
    myVotesData,
    myCommentsData,
    myWrittenData,
    gameBookmarksData,
    gameVotesData,
    gameWrittenData,
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
      </div>
    </div>
  );
};

export default MyPage;
