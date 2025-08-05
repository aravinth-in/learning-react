import React from 'react';
import Header from './components/Header';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import UsersPage from './pages/UsersPage';

const App = () => {
  return (
    <BrowserRouter>
      <Header title="React Router Demo" />
      
      <nav style={{ padding: '20px', borderBottom: '1px solid #ccc', backgroundColor: '#f4f4f4' }}>
        <Link to="/" style={{ margin: '0 10px', textDecoration: 'none', fontWeight: 'bold', color: '#007bff' }}>Home</Link>
        <Link to="/about" style={{ margin: '0 10px', textDecoration: 'none', fontWeight: 'bold', color: '#007bff' }}>About</Link>
        <Link to="/users" style={{ margin: '0 10px', textDecoration: 'none', fontWeight: 'bold', color: '#007bff' }}>Users</Link>
        <Link to="/users/123" style={{ margin: '0 10px', textDecoration: 'none', fontWeight: 'bold', color: '#007bff' }}>User 123</Link>
      </nav>

      <div style={{ padding: '20px' }}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          {/* A route with a dynamic parameter :userId */}
          <Route path="/users/:userId" element={<UsersPage />} />
          {/* A route for /users to show a list, for example */}
          <Route path="/users" element={<UsersPage />} /> 
          {/* A catch-all route for any undefined paths */}
          <Route path="*" element={<h2>404: Page Not Found</h2>} />
        </Routes>
      </div>

    </BrowserRouter>
  );
};

export default App;