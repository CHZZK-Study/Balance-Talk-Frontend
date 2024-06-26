import React from 'react';
import Heading from '@/components/common/Heading/Heading';
import { v4 as uuidv4 } from 'uuid';
import {
  loadingStyling,
  cardWrapper,
  backgroundContainer,
  textWrapper,
  descriptionStyling,
  titleStyling,
  imgContainer,
} from './GameCard.style';

export interface GameCardProps {
  imgUrl?: string[];
  title?: string;
  description?: string;
  isLoading?: boolean;
}

const renderImg = (imgUrl: Required<GameCardProps>['imgUrl']) => {
  return (
    <div css={backgroundContainer}>
      {imgUrl.map((url, index) => (
        <div css={imgContainer}>
          <img key={uuidv4()} src={url} alt={`GameCard ${index + 1}`} />
        </div>
      ))}
    </div>
  );
};

const GameCard = ({ imgUrl, title, description, isLoading }: GameCardProps) => {
  return (
    <div css={[cardWrapper, isLoading && loadingStyling]}>
      {Array.isArray(imgUrl) && renderImg(imgUrl)}
      <div css={textWrapper}>
        <Heading type="4" css={titleStyling}>
          {title}
        </Heading>
        <p css={descriptionStyling}>{description}</p>
      </div>
    </div>
  );
};

export default GameCard;
