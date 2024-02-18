import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { PATH } from './constants/path';
import { Layout, LayoutMypage, LayoutNoSearch } from './layout/layout';
import CreatePostPage from './pages/CreatePostPage/CreatePostPage';
import FindPasswordPage from './pages/FindPasswordPage/FindPasswordPage';
import LandingPage from './pages/LandingPage/LandingPage';
import LoginPage from './pages/LoginPage/LoginPage';
import PostList from './pages/PostListPage/PostListPage';
import PostPage from './pages/PostPage/PostPage';
import SignUpPage from './pages/SignUpPage/SignUpPage';
import ReactQueryProvider from './providers/ReactQueryProvider';
import UpdatePage from './pages/MyPage/UpdatePage/UpdatePage';
import DeletePage from './pages/MyPage/DeletePage/DeletePage';

const App: React.FC = () => {
  return (
    <ReactQueryProvider>
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

        <Route path={PATH.MYPAGE} element={<LayoutMypage />}>
          <Route path={PATH.HISTORY.POSTS} />
          <Route path={PATH.HISTORY.COMMENTS} />
          <Route path={PATH.HISTORY.VOTED_POSTS} />
          <Route path={PATH.HISTORY.BOOKMARKS} />
          <Route path={PATH.UPDATE} element={<UpdatePage />} />
          <Route path={PATH.DELETE} element={<DeletePage />} />
        </Route>
      </Routes>
    </ReactQueryProvider>
  );
};

export default App;
