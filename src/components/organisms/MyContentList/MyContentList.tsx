import React from 'react';
import MyContentBox from '@/components/molecules/MyContentBox/MyContentBox';
import { MyContentListProps, MyContentItem } from '@/types/organisms';
import * as S from './MyContentList.style';

const MyContentList = ({ items }: MyContentListProps) => {
  const groupedItems = items.reduce(
    (acc, item) => {
      if (!acc[item.editedAt]) {
        acc[item.editedAt] = [];
      }
      acc[item.editedAt].push(item);
      return acc;
    },
    {} as Record<string, MyContentItem[]>,
  );

  return (
    <div css={S.container}>
      {Object.keys(groupedItems).map((date) => (
        <div key={date} css={S.dateWrapper}>
          <span css={S.dateLabel}>{date}</span>
          <ul css={S.contentList}>
            {groupedItems[date].map((contentItem, index) => (
              <li key={index} css={S.contentItem}>
                <MyContentBox
                  title={contentItem.title}
                  commentCount={contentItem.commentCount}
                  bookmarks={contentItem.bookmarks}
                  showBookmark={contentItem.showBookmark}
                  bookmarkState={contentItem.bookmarkState}
                />
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default MyContentList;
