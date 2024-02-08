import React from 'react';
import { css } from '@emotion/react';
import { ImageInfo, PostInfo } from '../../../types/temp';
import PostItemImage from './PostItemImage';
import TagButton from '../../../components/TagButton';
import Eye from '../../../assets/svg/Eye';
import Heart from '../../../assets/svg/Heart';
import Comment from '../../../assets/svg/Comment';

type PostItemProps = {
  post: PostInfo;
};

const PostItem = ({ post }: PostItemProps) => {
  const imagesInfo: ImageInfo[] = [
    {
      optionImg: post.balanceOptions[0].optionImg,
      optionTitle: post.balanceOptions[0].optionTitle,
    },
    {
      optionImg: post.balanceOptions[1].optionImg,
      optionTitle: post.balanceOptions[1].optionTitle,
    },
  ];

  return (
    <div
      css={css({
        backgroundColor: 'orange',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        width: '500px',
        height: '400px',
        background: 'rgba(238, 238, 238, .5)',
        borderRadius: '5px',
        boxShadow: '0px 4px 4px gray',
        margin: '20px',
      })}
    >
      <div>
        <PostItemImage images={imagesInfo} />
      </div>
      <div
        css={css({
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'baseline',
          width: '400px',
          marginTop: '20px',
        })}
      >
        <div
          css={css({
            fontFamily: 'SpoqaHanSansNeo-Bold',
            fontSize: '24px',
          })}
        >
          {post.title}
        </div>
        <div
          css={css({
            fontFamily: 'SpoqaHanSansNeo-Light',
            fontSize: '16px',
          })}
        >
          D-day
        </div>
      </div>
      <div
        css={css({
          display: 'flex',
          justifyContent: 'flex-start',
          alignItems: 'baseline',
          width: '400px',
        })}
      >
        <div css={css({ marginTop: '10px', marginRight: '10px' })}>
          {post &&
            post.tags.map((tag) => {
              return <TagButton key={tag} tag={tag} />;
            })}
        </div>
      </div>

      <div
        css={css({
          display: 'flex',
          justifyContent: 'space-between',
          width: '400px',
          marginTop: '40px',
        })}
      >
        <div css={css({})}>
          <Eye />
          <span
            css={css({
              marginLeft: '5px',
              marginRight: '15px',
              position: 'relative',
              bottom: '7px',
            })}
          >
            {post.views}
          </span>
          <Comment />
          <span
            css={css({
              marginLeft: '5px',
              marginRight: '15px',
              position: 'relative',
              bottom: '7px',
            })}
          >
            {post.commentCount}
          </span>
        </div>
        <div>
          <Heart />
          <span
            css={css({
              marginLeft: '5px',
              position: 'relative',
              bottom: '7px',
            })}
          >
            {post.likeCount}
          </span>
        </div>
      </div>
    </div>
  );
};

export default PostItem;
