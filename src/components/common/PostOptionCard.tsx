import React from 'react';
import { css } from '@emotion/react';
import { ImageInfo } from '../types/post';
import coffee from '../../public/coffee.jpg';
import juice from '../../public/juice.jpg';

export type BalanceOptionCardProps = ImageInfo;

const BalanceOptionCard = ({
  optionImg,
  optionTitle,
  optionDescription,
}: BalanceOptionCardProps) => {
  return (
    <div
      css={css({
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: '450px',
        gap: '1rem',
      })}
    >
      <div
        css={css({
          fontFamily: 'SpoqaHanSansNeo-Medium',
          fontSize: '2rem',
        })}
      >
        {optionTitle}
      </div>
      <div>
        <img
          css={css({
            backgroundColor: '#ADADAD',
            fontFamily: 'SpoqaHanSansNeo-Medium',
            textAlign: 'center',
            fontSize: '2rem',
          })}
          src={optionImg === 'coffee.jpg' ? coffee : juice}
          width="400px"
          height="350px"
          alt=""
        />
      </div>
      <div
        css={css({
          backgroundColor: '#D9D9D9',
          fontFamily: 'SpoqaHanSansNeo-Bold',
          fontSize: '1.5rem',
          borderRadius: '1rem',
          padding: '1.5rem 1rem',
          width: '400px',
          textAlign: 'center',
        })}
      >
        {optionDescription}
      </div>
    </div>
  );
};

export default BalanceOptionCard;
