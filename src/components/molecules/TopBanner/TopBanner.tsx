/* eslint-disable jsx-a11y/control-has-associated-label */
import React, { useEffect, useState } from 'react';
import { TodayTalkPick } from '@/types/talk-pick';
import TodayTalkPickBanner from './TodayTalkPickBanner/TodayTalkPickBanner';
import Others from './OtherBanner/OtherBanner';
import {
  activeDotStyling,
  bannerStyling,
  bannerWrapperStyling,
  dotStyling,
  dotWrapperStyling,
  getBannerMovement,
} from './TopBanner.style';

export interface TopBannerProps {
  todayTalkPick: TodayTalkPick;
}

const TopBanner = ({ todayTalkPick }: TopBannerProps) => {
  const [currentId, setCurrentId] = useState<number>(0);
  const slides = [
    {
      id: 0,
      content: <TodayTalkPickBanner {...todayTalkPick} />,
    },
    { id: 1, content: <Others /> },
    { id: 2, content: <Others /> },
    { id: 3, content: <Others /> },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentId((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  });

  const handleSlide = (id: number) => {
    setCurrentId(id);
  };

  return (
    <div css={bannerStyling}>
      <div css={getBannerMovement(currentId)}>
        {slides.map((slide) => (
          <div key={slide.id} css={bannerWrapperStyling}>
            {slide.content}
          </div>
        ))}
      </div>
      <div css={dotWrapperStyling}>
        {slides.map((slide) => (
          <button
            type="button"
            key={slide.id}
            css={[dotStyling, slide.id === currentId && activeDotStyling]}
            onClick={() => handleSlide(slide.id)}
          />
        ))}
      </div>
    </div>
  );
};

export default TopBanner;
