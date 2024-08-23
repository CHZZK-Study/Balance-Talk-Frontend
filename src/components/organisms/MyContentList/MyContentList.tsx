import React from 'react';
import MyContentBox from '@/components/molecules/MyContentBox/MyContentBox';
import * as S from './MyContentList.style';

interface ContentItem {
  date: string;
  title: string;
  commentCount: number;
  saveCount: number;
  showBookmark?: boolean;
  bookmarkState?: boolean;
}

interface MyContentListProps {
  items: ContentItem[];
}

const MyContentList = ({ items }: MyContentListProps) => {
  const groupedItems = items.reduce(
    (acc, item) => {
      if (!acc[item.date]) {
        acc[item.date] = [];
      }
      acc[item.date].push(item);
      return acc;
    },
    {} as Record<string, ContentItem[]>,
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
                  saveCount={contentItem.saveCount}
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
