import React from 'react';
import { Routes, Route, Outlet } from 'react-router-dom';
import Header from './layout/Header';
import SearchBar from './layout/SearchBar';
import Footer from './layout/Footer';
import LandingPage from './pages/LandingPage/LandingPage';
import LoginPage from './pages/LoginPage/LoginPage';

const Layout = () => {
  return (
    <>
      <Header />
      <SearchBar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<LandingPage />} />
        <Route path="login" element={<LoginPage />} />
      </Route>
    </Routes>
  );
};

export default App;
