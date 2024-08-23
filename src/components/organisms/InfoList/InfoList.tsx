import React from 'react';
import InfoBox from '@/components/molecules/InfoBox/InfoBox';
import * as S from './InfoList.style';

interface InfoItem {
  date: string;
  title: string;
  prefix: string;
  subtitle: string;
  commentCount: number;
  saveCount: number;
}

interface InfoListProps {
  items: InfoItem[];
}

const InfoList = ({ items }: InfoListProps) => {
  const groupedItems = items.reduce(
    (acc, item) => {
      if (!acc[item.date]) {
        acc[item.date] = [];
      }
      acc[item.date].push(item);
      return acc;
    },
    {} as Record<string, InfoItem[]>,
  );

  return (
    <div css={S.container}>
      {Object.keys(groupedItems).map((date) => (
        <div key={date} css={S.dateWrapper}>
          <span css={S.dateLabel}>{date}</span>
          <ul css={S.infoList}>
            {groupedItems[date].map((infoItem, index) => (
              <li key={index} css={S.infoItem}>
                <InfoBox
                  title={infoItem.title}
                  prefix={infoItem.prefix}
                  subtitle={infoItem.subtitle}
                  commentCount={infoItem.commentCount}
                  saveCount={infoItem.saveCount}
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
