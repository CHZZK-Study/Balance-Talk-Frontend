/* eslint-disable react/react-in-jsx-scope */
import { ReactNode } from 'react';
import Chips from '@/components/atoms/Chips/Chips';
import {
  bannerStyling,
  bannerWrapper,
  bannerInfoWrapper,
  bannerSummary,
  bannerTitle,
  loadingStyling,
  hideInfo,
} from './TopBanner.style';

export interface TopBannerProps {
  title?: ReactNode;
  summary?: ReactNode;
  isLoading?: boolean;
}

const TopBanner = ({ title, summary, isLoading = false }: TopBannerProps) => (
  <div css={[bannerStyling, isLoading && loadingStyling]}>
    <div css={[bannerWrapper, isLoading && hideInfo]}>
      <Chips>오늘의 톡픽</Chips>
      <div css={bannerInfoWrapper}>
        <div css={bannerTitle}>{title}</div>
        <div css={bannerSummary}>{summary}</div>
      </div>
    </div>
  </div>
);

export default TopBanner;
