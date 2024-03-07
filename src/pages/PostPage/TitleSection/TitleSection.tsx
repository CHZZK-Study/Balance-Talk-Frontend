import React from 'react';
import { Post } from '../../../types/post';
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
import { Hearts } from '../../../assets';

export type TitleSectionProps = Pick<
  Post,
  'title' | 'views' | 'likeCount' | 'tags'
>;

const TitleSection = ({ title, views, likeCount, tags }: TitleSectionProps) => {
  return (
    <div css={titleSectionWrapper}>
      <div css={titleSectionLeftWrapper}>
        <div css={titleWrapper}>{title}</div>
        <div css={tagsWrapper}>
          {tags.map((tag) => (
            <TagButton tag={tag} key={tag} />
          ))}
        </div>
      </div>
      <div css={titleSectionRightwrapper}>
        <div css={postInfoWrapper}>
          <Eye />
          <span>{views}</span>
        </div>
        <div css={postInfoWrapper}>
          <Hearts />
          {likeCount}
        </div>
      </div>
    </div>
  );
};

export default TitleSection;
