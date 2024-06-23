import React, { ReactNode } from 'react';
import RightArrow from '@/assets/svg/RightArrow';
import {
  loadingStyling,
  btnWrapper,
  textWrapper,
  titleStyling,
  descriptionStyling,
  highlightBtn,
  defaultBtn,
} from './ChallengeButton.style';
import Heading from '../Heading/Heading';

export interface ChallengeBtnProps {
  highlight?: boolean;
  title: ReactNode;
  description: ReactNode;
  isLoading?: boolean;
}

const ChallengeButton = ({
  highlight = false,
  title,
  description,
  isLoading,
}: ChallengeBtnProps) => (
  <div
    css={[
      btnWrapper,
      highlight ? highlightBtn : defaultBtn,
      isLoading && loadingStyling,
    ]}
  >
    <div css={textWrapper}>
      <Heading type="4" css={titleStyling(highlight)}>
        {title}
      </Heading>
      <p css={descriptionStyling}>{description}</p>
    </div>
    <RightArrow />
  </div>
);

export default ChallengeButton;
