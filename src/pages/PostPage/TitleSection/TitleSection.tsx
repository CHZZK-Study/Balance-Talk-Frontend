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
} from './TitleSection.style';
import Eye from '../../../assets/svg/Eye';
import { Hearts, Vote } from '../../../assets';

export type TitleSectionProps = Pick<
  NPost,
  'title' | 'views' | 'likesCount' | 'postTags'
>;

const TitleSection = ({
  title,
  views,
  likesCount,
  postTags,
}: TitleSectionProps) => {
  return (
    <div css={titleSectionWrapper}>
      <div css={titleSectionLeftWrapper}>
        <div css={titleWrapper}>{title}</div>
        <div css={tagsWrapper}>
          {postTags.map((tag: string) => (
            <TagButton tag={tag} key={tag} />
          ))}
        </div>
      </div>
      <div css={titleSectionRightwrapper}>
        <div css={postInfoWrapper}>
          <Vote />
          <span>{1234}</span>
        </div>
        <div css={postInfoWrapper}>
          <Eye />
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
