import React, { useState } from 'react';
import { css } from '@emotion/css';
import LeftArrowButton from '../assets/svg/LeftArrowButton';
import RightArrowButton from '../assets/svg/RightArrowButton';
import Pagination from './Pagination';

type CarouselProps = {
  items: JSX.Element[];
};

const Carousel: React.FC<CarouselProps> = ({ items }) => {
  const totalIndex = items.length - 2;
  const [index, setIndex] = useState(0);

  const onRightArrowClickHandler = () => {
    setIndex((prevIndex) => (prevIndex + 1) % totalIndex);
  };

  const onLeftArrowClickHandler = () => {
    setIndex((prevIndex) => (prevIndex - 1 + totalIndex) % totalIndex);
  };

  return (
    <div>
      <div className={css({ display: 'flex', alignItems: 'center' })}>
        <div>
          <div
            onClick={onLeftArrowClickHandler}
            role="presentation"
            className={css({ cursor: 'pointer' })}
          >
            <LeftArrowButton />
          </div>
        </div>
        <div
          className={css({
            width: '1260px',
            overflow: 'hidden',
            position: 'relative',
          })}
        >
          <div
            className={css({
              display: 'flex',
              transform: `translateX(-${index * 420}px)`,
              transition: '0.3s ease-in-out',
            })}
          >
            {items.map((item) => {
              return <div className={css({ margin: '10px' })}>{item}</div>;
            })}
          </div>
        </div>
        <div>
          <div
            onClick={onRightArrowClickHandler}
            role="presentation"
            className={css({ cursor: 'pointer' })}
          >
            <RightArrowButton />
          </div>
        </div>
      </div>
      <div
        className={css({
          display: 'flex',
          justifyContent: 'center',
        })}
      >
        <Pagination count={items.length} index={index} />
      </div>
    </div>
  );
};

export default Carousel;
