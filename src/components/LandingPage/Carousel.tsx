import React, { ReactNode, useState } from 'react';
import { css } from '@emotion/react';
import LeftArrowButton from '../../assets/svg/LeftArrowButton';
import RightArrowButton from '../../assets/svg/RightArrowButton';
import Pagination from './Pagination';

type CarouselProps<T> = {
  items?: T[];
  render: (item: T) => ReactNode;
  itemWidth?: number;
  showLength: number;
};

const Carousel = <T,>({
  items,
  render,
  itemWidth = 420,
  showLength = 3,
}: CarouselProps<T>) => {
  const totalIndex = items && items.length - (showLength - 1);
  const [index, setIndex] = useState(0);

  const onRightArrowClickHandler = () => {
    setIndex((prevIndex) => (prevIndex + 1) % totalIndex);
  };

  const onLeftArrowClickHandler = () => {
    setIndex((prevIndex) => (prevIndex - 1 + totalIndex) % totalIndex);
  };

  return (
    <div>
      <div css={css({ display: 'flex', alignItems: 'center' })}>
        <div
          onClick={onLeftArrowClickHandler}
          role="presentation"
          css={css({ cursor: 'pointer' })}
        >
          <LeftArrowButton />
        </div>
        <div
          css={css({
            width: `${itemWidth * showLength}px`,
            overflow: 'hidden',
          })}
        >
          <div
            css={css({
              display: 'flex',
              transform: `translateX(-${index * itemWidth}px)`,
              transition: '0.3s ease-in-out',
            })}
          >
            {items && items.map((item) => render?.(item))}
          </div>
        </div>
        <div>
          <div
            onClick={onRightArrowClickHandler}
            role="presentation"
            css={css({ cursor: 'pointer' })}
          >
            <RightArrowButton />
          </div>
        </div>
      </div>
      <div
        css={css({
          display: 'flex',
          justifyContent: 'center',
        })}
      >
        <Pagination
          count={items?.length}
          index={index}
          showLength={showLength}
        />
      </div>
    </div>
  );
};

export default Carousel;
