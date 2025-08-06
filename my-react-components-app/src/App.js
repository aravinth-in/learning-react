import React from 'react';
import Header from './components/Header';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import UsersPage from './pages/UsersPage';
import PostsList from './components/PostsList';

const App = () => {
  return (
    <>
      <Header title="React Query Data Fetching" />
      <PostsList />
    </>
  );
};

export default App;