import React from 'react';
import { Outlet, Route, Routes } from 'react-router-dom';
import { css } from '@emotion/react';
import Header from './layout/Header';
import SearchBar from './layout/SearchBar';
// import Footer from './layout/Footer';
import CreatePostPage from './pages/CreatePostPage/CreatePostPage';
import FindPasswordPage from './pages/FindPasswordPage/FindPasswordPage';
import LandingPage from './pages/LandingPage/LandingPage';
import LoginPage from './pages/LoginPage/LoginPage';
import PostList from './pages/PostListPage/PostListPage';
import PostPage from './pages/PostPage/PostPage';
import SignUpPage from './pages/SignUpPage/SignUpPage';
import { PATH } from './constants/path';

const Layout = () => {
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

const LayoutNoSearch = () => {
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

const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<LandingPage />} />
        <Route path="posts" element={<PostList />} />
        <Route path="post/create" element={<CreatePostPage />} />
        <Route path="posts/:id" element={<PostPage />} />
      </Route>

      <Route element={<LayoutNoSearch />}>
        <Route path={PATH.LOGIN} element={<LoginPage />} />
        <Route path={PATH.PW} element={<FindPasswordPage />} />
        <Route path={PATH.SIGN_UP} element={<SignUpPage />} />
      </Route>
    </Routes>
  );
};

export default App;
