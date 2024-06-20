/* eslint-disable react/react-in-jsx-scope */
import { ReactNode } from 'react';
import RightArrow from '@/assets/svg/RightArrow';
import {
  btnWrapper,
  descriptionStyling,
  // loadingStyling,
  textWrapper,
  titleStyling,
  highlightBtn,
  defaultBtn,
} from './ChallengeButton.style';

export interface ChallengeBtnProps {
  highlight?: boolean;
  title: ReactNode;
  description: ReactNode;
  // isLoading?: boolean;
}

const ChallengeButton = ({
  highlight,
  title,
  description,
  //   isLoading,
}: ChallengeBtnProps) => (
  <div css={[btnWrapper, highlight ? highlightBtn : defaultBtn]}>
    <div css={textWrapper}>
      <h4 css={titleStyling({ highlight })}>{title}</h4>
      <p css={descriptionStyling}>{description}</p>
    </div>
    <RightArrow />
  </div>
);

export default ChallengeButton;
