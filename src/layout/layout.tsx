import React from 'react';
import { css } from '@emotion/react';
import { Outlet } from 'react-router-dom';
import Header from './Header';
import SearchBar from './SearchBar';
import Sidebar from '../components/Mypage/Sidebar/Sidebar';

export const Layout = () => {
  return (
    <>
      <Header />
      <SearchBar />
      <main>
        <Outlet />
      </main>
      {/* <Footer /> */}
    </>
  );
};

export const LayoutNoSearch = () => {
  return (
    <>
      <Header />
      <main
        css={css({
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100vh',
        })}
      >
        <Outlet />
      </main>
      {/* <Footer /> */}
    </>
  );
};

export const LayoutMypage = () => {
  return (
    <>
      <Header />
      <div css={css({ display: 'flex', height: '100%' })}>
        <Sidebar />
        <main
          css={css({
            display: 'flex',
            justifyContent: 'center',
            width: '100%',
          })}
        >
          <Outlet />
          {/* <Footer/> */}
        </main>
      </div>
    </>
  );
};
