import React from 'react';
import { css } from '@emotion/css';
import LikeIcon from '../assets/svg/LikeIcon';
import MoreIcon from '../assets/svg/MoreIcon';
import ReportIcon from '../assets/svg/ReportIcon';

interface UserCommentProps {
  isMyComment?: boolean;
}

const UserComment = ({ isMyComment }: UserCommentProps) => {
  return (
    <div
      className={css({
        display: 'flex',
        alignItems: 'center',
        gap: '2rem',
        padding: '1rem 2rem',
        backgroundColor: `${isMyComment ? '#FFD369' : '#FFFFFF'}`,
      })}
    >
      <div>
        {/* 이미지 들어갈 자리 */}
        <div
          className={css({
            width: '50px',
            height: '50px',
            backgroundColor: '#D9D9D9',
            borderRadius: '50%',
          })}
        />
      </div>
      <div
        className={css({
          display: 'flex',
          flexDirection: 'column',
          gap: '1rem',
        })}
      >
        <div
          className={css({
            display: 'flex',
            alignItems: 'center',
            gap: '1rem',
          })}
        >
          <div
            className={css({
              fontStyle: 'italic',
              fontFamily: 'SpoqaHanSansNeo-medium',
              fontWeight: '500',
              fontSize: '1rem',
            })}
          >
            Username1
          </div>
          <div
            className={css({
              fontFamily: 'SpoqaHanSansNeo-thin',
              fontWeight: '300',
              fontSize: '0.8rem',
            })}
          >
            3일 전
          </div>
        </div>

        <div
          className={css({
            fontFamily: 'SpoqaHanSansNeo-regular',
            fontSize: '1rem',
          })}
        >
          밸런스톡 메인페이지 작업
        </div>
      </div>
      <div
        className={css({
          display: 'flex',
          gap: '0.5rem',
        })}
      >
        <div
          className={css({
            display: 'flex',
            flexDirection: 'column',
            gap: '0.3rem',
          })}
        >
          <LikeIcon />
          <span>100</span>
        </div>
        <div>
          <MoreIcon />
        </div>
        <div>
          <ReportIcon />
        </div>
      </div>
    </div>
  );
};

export default UserComment;
