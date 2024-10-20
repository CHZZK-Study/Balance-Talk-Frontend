import React, { useState, useEffect } from 'react';
import { Popular, Couple, Taste, Worldcup } from '@/assets';
import * as S from './CategoryBar.style';
import BalanceGameCategoryButton from '../../atoms/BalanceGameCategoryButton/BalanceGameCategoryButton';

export interface CategoryBarProps {
  activeTab: 'Popular' | 'Couple' | 'Taste' | 'Worldcup';
}

const CategoryBar = ({ activeTab: initialActiveTab }: CategoryBarProps) => {
  const [activeTab, setActiveTab] = useState<
    'Popular' | 'Couple' | 'Taste' | 'Worldcup'
  >(initialActiveTab);

  useEffect(() => {
    setActiveTab(initialActiveTab);
  }, [initialActiveTab]);

  const getBadgeText = (tab: 'Popular' | 'Couple' | 'Taste' | 'Worldcup') => {
    switch (tab) {
      case 'Popular':
        return '화제의 중심';
      case 'Couple':
        return '알아가 볼까';
      case 'Taste':
        return '얼마나 맞나';
      case 'Worldcup':
        return '다 준비했어';
      default:
        return '';
    }
  };

  return (
    <div css={S.containerStyle}>
      <BalanceGameCategoryButton
        label="인기"
        icon={<Popular />}
        active={activeTab === 'Popular'}
        badgeText={getBadgeText('Popular')}
        onClick={() => setActiveTab('Popular')}
      />
      <BalanceGameCategoryButton
        label="커플"
        icon={<Couple />}
        active={activeTab === 'Couple'}
        badgeText={getBadgeText('Couple')}
        onClick={() => setActiveTab('Couple')}
      />
      <BalanceGameCategoryButton
        label="취향"
        icon={<Taste />}
        active={activeTab === 'Taste'}
        badgeText={getBadgeText('Taste')}
        onClick={() => setActiveTab('Taste')}
      />
      <BalanceGameCategoryButton
        label="월드컵"
        icon={<Worldcup />}
        active={activeTab === 'Worldcup'}
        badgeText={getBadgeText('Worldcup')}
        onClick={() => setActiveTab('Worldcup')}
      />
    </div>
  );
};

export default CategoryBar;
