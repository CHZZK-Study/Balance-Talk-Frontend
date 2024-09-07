import React from 'react';
import MyContentBox, {
  MyContentBoxProps,
} from '@/components/molecules/MyContentBox/MyContentBox';
import * as S from './MyContentList.style';

export interface MyContentItem {
  id: number;
  editedAt: string;
  title: MyContentBoxProps['title'];
  commentCount: MyContentBoxProps['commentCount'];
  bookmarks: MyContentBoxProps['bookmarks'];
  showBookmark?: MyContentBoxProps['showBookmark'];
  bookmarked?: MyContentBoxProps['bookmarked'];
}

export interface MyContentListProps {
  items: MyContentItem[];
}

const MyContentList = ({ items = [] }: MyContentListProps) => {
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
            {groupedItems[date].map((contentItem) => (
              <li key={contentItem.id} css={S.contentItem}>
                <MyContentBox
                  title={contentItem.title}
                  commentCount={contentItem.commentCount}
                  bookmarks={contentItem.bookmarks}
                  showBookmark={contentItem.showBookmark}
                  bookmarked={contentItem.bookmarked}
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
