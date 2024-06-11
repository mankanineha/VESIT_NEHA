import React from 'react';
import { useAuth } from '../Context/AuthContext';

const Home = () => {
  const { isAuthenticated, logout } = useAuth();

  return (
    <div>
      {isAuthenticated ? (
        <>
          <h1>Welcome to the Home Page!</h1>
          <p>You are logged in.</p>
          <button onClick={logout}>Logout</button>
        </>
      ) : (
        <p>Please log in to view the content.</p>
      )}
    </div>
  );
};

export default Home;
