import { css } from '@emotion/react';
import React from 'react';
import TagButton from '../../../components/TagButton';
import Eye from '../../../assets/svg/Eye';
import { Hearts } from '../../../assets';
import BalanceOptionCard from '../../../components/BalacneOptionCard';
import { Post } from '../../../types/post';

export type BalanceOptionCardsSectionProps = Pick<
  Post,
  'title' | 'views' | 'likeCount' | 'tags' | 'balanceOptions'
>;

const BalanceOptionCardsSection = ({
  title,
  views,
  likeCount,
  tags,
  balanceOptions,
}: BalanceOptionCardsSectionProps) => {
  return (
    <>
      <div
        css={css({
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: '0.5rem 1rem',
        })}
      >
        <div
          css={css({
            display: 'flex',
            padding: '0.5rem',
            gap: '2rem',
          })}
        >
          <div
            css={css({
              fontFamily: 'SpoqaHanSansNeo-medium',
              fontSize: '3rem',
            })}
          >
            {title}
          </div>
          <ul
            css={css({
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
            })}
          >
            {tags.map((tag) => (
              <TagButton tag={tag} key={tag} />
            ))}
          </ul>
        </div>
        <div
          css={css({
            display: 'flex',
            alignItems: 'center',
            gap: '1rem',
            fontFamily: 'SpoqaHanSansNeo-Regular',
            fontSize: '1.5rem',
          })}
        >
          <div
            css={css({
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
            })}
          >
            <Eye />
            <span>{views}</span>
          </div>
          <div
            css={css({
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
            })}
          >
            <Hearts />
            {likeCount}
          </div>
        </div>
      </div>

      <div
        css={css({
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          padding: '1rem',
          backgroundColor: '#EEEEEE',
        })}
      >
        <BalanceOptionCard {...balanceOptions[0]} />
        <div
          css={css({
            fontFamily: 'SpoqaHanSansNeo-medium',
            fontSize: '3rem',
          })}
        >
          VS
        </div>
        <BalanceOptionCard {...balanceOptions[1]} />
      </div>
    </>
  );
};

export default BalanceOptionCardsSection;
