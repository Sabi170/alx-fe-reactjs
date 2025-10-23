// src/components/Dashboard.jsx
import React from 'react';

const Dashboard = () => {
  return (
    <div>
      <h2>User Dashboard</h2>
      <p>Welcome to your protected dashboard! Only authenticated users can see this content.</p>
      <ul>
        <li>View analytics</li>
        <li>Manage subscriptions</li>
        <li>Access exclusive content</li>
      </ul>
    </div>
  );
};

export default Dashboard;