import React from 'react';
import { css } from '@emotion/react';
import { Profile, More, Report, Like, Plus } from '../assets';

export interface UserCommentProps {
  id: number;
  isMyComment: boolean;
  imgUrl?: string;
  name: string;
  content: string;
  createdAt: string;
  likeCount: number;
  replyList?: UserCommentProps[];
}

const UserComment = ({
  id,
  isMyComment,
  name,
  content,
  createdAt,
  likeCount,
  replyList,
}: UserCommentProps) => {
  return (
    <div
      css={css({
        display: 'flex',
        flexDirection: 'column',
        gap: '20px',
        backgroundColor: `${isMyComment ? '#FFD369' : '#FFFFFF'}`,
        borderRadius: '8px',
        padding: '1rem',
      })}
    >
      <div
        css={css({
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        })}
      >
        <div
          css={css({
            display: 'flex',
            alignItems: 'center',
            gap: '2rem',
          })}
        >
          <Profile />
          <div
            css={css({
              display: 'flex',
              flexDirection: 'column',
              gap: '1rem',
            })}
          >
            <div
              css={css({
                display: 'flex',
                alignItems: 'center',
                gap: '1rem',
              })}
            >
              <div
                css={css({
                  fontStyle: 'italic',
                  fontFamily: 'SpoqaHanSansNeo-medium',
                  fontWeight: '500',
                  fontSize: '1rem',
                })}
              >
                {name}
              </div>
              <div
                css={css({
                  fontFamily: 'SpoqaHanSansNeo-thin',
                  fontWeight: '300',
                  fontSize: '0.8rem',
                })}
              >
                {createdAt}
              </div>
            </div>

            <div
              css={css({
                fontFamily: 'SpoqaHanSansNeo-regular',
                fontSize: '1rem',
              })}
            >
              {content}
            </div>
          </div>
        </div>

        <div
          css={css({
            display: 'flex',
            gap: '0.5rem',
          })}
        >
          <div
            css={css({
              display: 'flex',
              flexDirection: 'column',
              gap: '0.3rem',
            })}
          >
            <Like />
            <span>{likeCount}</span>
          </div>
          <div>
            <More />
          </div>
          <div>
            <Report />
          </div>
        </div>
      </div>
      <div
        css={css({
          display: 'flex',
          alignItems: 'flex-end',
          gap: '8px',
          fontSize: '14px',
        })}
      >
        <div>
          <Plus />
        </div>
        <span>
          {replyList?.length !== 0
            ? `${replyList?.length}개의 답글`
            : '답글달기'}
        </span>
      </div>
    </div>
  );
};

export default UserComment;
