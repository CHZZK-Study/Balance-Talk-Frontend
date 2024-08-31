import React from 'react';
import ContentsButton from '@/components/molecules/ContentsButton/ContentsButton';
import { MyBalanceGameListProps, MyBalanceGameItem } from '@/types/organisms';
import * as S from './MyBalanceGameList.style';

const MyBalanceGameList = ({ items = [] }: MyBalanceGameListProps) => {
  const groupedItems = items.reduce(
    (acc, item) => {
      if (!acc[item.editedAt]) {
        acc[item.editedAt] = [];
      }
      acc[item.editedAt].push(item);
      return acc;
    },
    {} as Record<string, MyBalanceGameItem[]>,
  );

  return (
    <div css={S.container}>
      {Object.keys(groupedItems).map((date) => (
        <div key={date} css={S.dateWrapper}>
          <span css={S.dateLabel}>{date}</span>
          <ul css={S.contentList}>
            {groupedItems[date].map((balanceGameItem) => (
              <li key={balanceGameItem.id} css={S.contentItem}>
                <ContentsButton
                  optionAImg={balanceGameItem.optionAImg}
                  optionBImg={balanceGameItem.optionBImg}
                  title={balanceGameItem.title}
                  tagLabels={balanceGameItem.tagLabels}
                  bookmarked={balanceGameItem.bookmarked}
                  showBookmark={balanceGameItem.showBookmark}
                  size="small"
                />
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default MyBalanceGameList;
