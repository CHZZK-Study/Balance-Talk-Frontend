import React, { useState } from 'react';
import { Popular, Couple, Taste, Worldcup } from '@/assets';
import * as S from './CategoryBar.style';
import ButtonComponent from '../../atoms/BalanceGameCategoryButton/BalanceGameCategoryButton';

const CategoryBar: React.FC = () => {
  const [activeTab, setActiveTab] = useState<
    'Popular' | 'Couple' | 'Taste' | 'Worldcup'
  >('Popular');

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
      <ButtonComponent
        label="인기"
        icon={<Popular />}
        active={activeTab === 'Popular'}
        badgeText={getBadgeText('Popular')}
        onClick={() => setActiveTab('Popular')}
      />
      <ButtonComponent
        label="커플"
        icon={<Couple />}
        active={activeTab === 'Couple'}
        badgeText={getBadgeText('Couple')}
        onClick={() => setActiveTab('Couple')}
      />
      <ButtonComponent
        label="취향"
        icon={<Taste />}
        active={activeTab === 'Taste'}
        badgeText={getBadgeText('Taste')}
        onClick={() => setActiveTab('Taste')}
      />
      <ButtonComponent
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
