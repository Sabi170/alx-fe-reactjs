// src/components/NotFound.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h2>404 - Page Not Found</h2>
      <p>The page you are looking for does not exist.</p>
      <Link to="/" style={{ textDecoration: 'none', color: '#007bff', fontWeight: 'bold' }}>Go to Home</Link>
    </div>
  );
};

export default NotFound;