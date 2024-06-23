import React from 'react';
import RightArrow from '@/assets/svg/RightArrow';
import {
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
  title: string;
  description: string;
}

const ChallengeButton = ({
  highlight = false,
  title,
  description,
}: ChallengeBtnProps) => (
  <div css={[btnWrapper, highlight ? highlightBtn : defaultBtn]}>
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
