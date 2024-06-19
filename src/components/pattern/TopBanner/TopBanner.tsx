/* eslint-disable react/react-in-jsx-scope */
import { ReactNode } from 'react';
import Chips from '@/components/common/Chips/Chips';
import {
  bannerStyling,
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
    <div css={[bannerInfoWrapper, isLoading && hideInfo]}>
      <Chips size="small">오늘의 밸런스톡</Chips>
      <div css={bannerTitle}>{title}</div>
      <div css={bannerSummary}>{summary}</div>
    </div>
  </div>
);

export default TopBanner;
