import React, { useState } from 'react';
import { AngleSmallDown } from '@/assets';
import ToggleGroup, {
  ToggleGroupItem,
  ToggleGroupProps,
} from '@/components/atoms/ToggleGroup/ToggleGroup';
import Button from '@/components/atoms/Button/Button';
import CategoryBar from '@/components/molecules/CategoryBar/CategoryBar';
import ContentsButton from '@/components/molecules/ContentsButton/ContentsButton';
import * as S from './BalanceGameList.style';

export interface ContentItemProps {
  optionAImg: string;
  optionBImg: string;
  id: number;
  title: string;
  mainTag: string;
  subTag: string;
  bookmarkState?: boolean;
  optionA?: string;
  optionB?: string;
}

export interface ContentListProps {
  contents: ContentItemProps[];
}

const BalanceGameList = ({ contents }: ContentListProps) => {
  const toggleItem: ToggleGroupItem[] = [
    {
      label: '인기순',
      value: 'trend',
    },
    {
      label: '최신순',
      value: 'recent',
    },
  ];
  const [selectedValue, setSelectedValue] =
    useState<ToggleGroupProps['selectedValue']>('trend');
  const [visibleItems, setVisibleItems] = useState<number>(4);

  const handleLoadMore = () => {
    setVisibleItems((prev) => Math.min(prev + 6, contents.length));
  };
  return (
    <div css={S.containerStyle}>
      <div css={S.titleWrapStyle}>
        <div>주제별 밸런스 게임</div>
        <ToggleGroup
          items={toggleItem}
          selectedValue={selectedValue}
          onClick={setSelectedValue}
        />
      </div>
      <div css={S.barStyle}>
        <CategoryBar activeTab="Popular" />
      </div>
      <div css={S.contentStyle}>
        {contents.slice(0, visibleItems).map((content) => (
          <ContentsButton
            key={content.id}
            bookmarked={content.bookmarkState || false}
            optionAImg={content.optionAImg}
            optionBImg={content.optionBImg}
            title={content.title}
            mainTag={content.mainTag}
            subTag={content.subTag}
          />
        ))}
        {visibleItems < contents.length && (
          <div css={S.loadMoreWrapperStyle}>
            <Button
              variant="outlineShadow"
              size="large"
              onClick={handleLoadMore}
              iconRight={<AngleSmallDown />}
            >
              더보기
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default BalanceGameList;
