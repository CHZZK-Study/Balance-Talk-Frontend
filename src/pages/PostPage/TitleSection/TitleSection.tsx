import React from 'react';
import { NPost } from '../../../types/post';
import TagButton from '../../../components/Buttons/TagButton';
import {
  titleSectionWrapper,
  tagsWrapper,
  titleWrapper,
  titleSectionLeftWrapper,
  titleSectionRightwrapper,
  postInfoWrapper,
  categoryWrapper,
} from './TitleSection.style';
import { Hearts, Vote } from '../../../assets';

export type TitleSectionProps = Pick<
  NPost,
  'title' | 'views' | 'likesCount' | 'postTags' | 'totalVotesCount' | 'category'
>;

const TitleSection = ({
  title,
  views,
  likesCount,
  postTags,
  totalVotesCount,
  category,
}: TitleSectionProps) => {
  return (
    <div css={titleSectionWrapper}>
      <div css={titleSectionLeftWrapper}>
        <div css={titleWrapper}>
          <div css={categoryWrapper}>
            {category === 'CASUAL' ? '캐쥬얼' : '토론'}
          </div>
          <div>{title}</div>
        </div>
        <div css={tagsWrapper}>
          {postTags.map((tag: { tagName: string }) => (
            <TagButton tag={tag.tagName} key={tag.tagName} />
          ))}
        </div>
      </div>
      <div css={titleSectionRightwrapper}>
        <div css={postInfoWrapper}>
          <Vote />
          <span>{totalVotesCount}</span>
        </div>
        <div css={postInfoWrapper}>
          <span>{views}</span>
        </div>
        <div css={postInfoWrapper}>
          <Hearts />
          {likesCount}
        </div>
      </div>
    </div>
  );
};

export default TitleSection;
