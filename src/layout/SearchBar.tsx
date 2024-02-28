import React from 'react';
import { css } from '@emotion/react';
import SearchIcon from '../assets/svg/SearchIcon';
import TagButton from '../components/Buttons/TagButton';

const SearchBar = () => {
  return (
    <div
      css={css({
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: 'auto',
        padding: '1rem 0',
        gap: '1.5rem',
      })}
    >
      <div
        css={css({
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          width: '500px',
          padding: '0.7rem 1rem',
          border: '2px solid black',
          borderRadius: '1.2rem',
          gap: '1rem',
        })}
      >
        <input
          type="text"
          css={css({
            width: '100%',
          })}
        />
        <SearchIcon width={20} height={20} />
      </div>
      <div css={css({ display: 'flex' })}>
        <TagButton tag="태그" />
        <TagButton tag="태그" />
        <TagButton tag="태그" />
        <TagButton tag="태그" />
      </div>
    </div>
  );
};

export default SearchBar;
