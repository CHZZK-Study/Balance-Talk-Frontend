import React, { KeyboardEvent, MouseEvent } from 'react';
import { css } from '@emotion/react';
import useInputs from '@/hooks/common/useInputs';
import { useNavigate } from 'react-router-dom';
import SearchIcon from '../assets/svg/SearchIcon';
import TagButton from '../components/Buttons/TagButton';

const SearchBar = () => {
  const initialState = {
    searchParam: '',
  };

  const { form, onChange, onBlur } = useInputs(initialState);
  const { searchParam } = form;

  const navigate = useNavigate();

  const onClickEnter = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && e.nativeEvent.isComposing === false) {
      e.preventDefault();

      if (searchParam?.[0] === '#') {
        navigate(`/searchResult?tagName=${searchParam.slice(1)}`);
      } else {
        navigate(`/searchResult?keyword=${searchParam}`);
      }
    }
  };

  const onClickSearchHandler = () => {
    if (searchParam?.[0] === '#') {
      navigate(`/searchResult?tagName=${searchParam.slice(1)}`);
    } else {
      navigate(`/searchResult?keyword=${searchParam}`);
    }
  };

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
          onBlur={onBlur}
          name="searchParam"
          value={searchParam}
          onKeyDown={onClickEnter}
          type="search"
          onChange={onChange}
          css={css({
            width: '100%',
          })}
        />
        <div onClick={onClickSearchHandler} role="presentation">
          <SearchIcon width={20} height={20} />
        </div>
      </div>
      {/* <div css={css({ display: 'flex' })}>
        <TagButton tag="태그" />
        <TagButton tag="태그" />
        <TagButton tag="태그" />
        <TagButton tag="태그" />
      </div> */}
    </div>
  );
};

export default SearchBar;
