import React from 'react';
import InfoBox from '@/components/molecules/InfoBox/InfoBox';
import { InfoListProps, InfoItem } from '@/types/organisms';
import * as S from './InfoList.style';

const InfoList = ({ items = [] }: InfoListProps) => {
  const groupedItems = items.reduce(
    (acc, item) => {
      if (!acc[item.editedAt]) {
        acc[item.editedAt] = [];
      }
      acc[item.editedAt].push(item);
      return acc;
    },
    {} as Record<string, InfoItem[]>,
  );

  return (
    <div css={S.container}>
      {Object.keys(groupedItems).map((editedAt) => (
        <div key={editedAt} css={S.dateWrapper}>
          <span css={S.dateLabel}>{editedAt}</span>
          <ul css={S.infoList}>
            {groupedItems[editedAt].map((infoItem) => (
              <li key={infoItem.id} css={S.infoItem}>
                <InfoBox
                  title={infoItem.title}
                  prefix={infoItem.prefix}
                  commentContent={infoItem.commentContent}
                  commentCount={infoItem.commentCount}
                  bookmarks={infoItem.bookmarks}
                />
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default InfoList;
