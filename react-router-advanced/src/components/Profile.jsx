// src/components/Profile.jsx
import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Profile = () => {
  return (
    <div style={{ border: '1px solid #ccc', padding: '20px', borderRadius: '8px' }}>
      <h2>User Profile</h2>
      <nav style={{ marginBottom: '15px' }}>
        <ul style={{ listStyle: 'none', padding: 0, display: 'flex', borderBottom: '1px solid #eee' }}>
          <li style={{ marginRight: '15px', paddingBottom: '5px' }}><Link to="details">Details</Link></li>
          <li style={{ paddingBottom: '5px' }}><Link to="settings">Settings</Link></li>
        </ul>
      </nav>
      {/* Outlet renders the matched child route (ProfileDetails or ProfileSettings) */}
      <Outlet />
    </div>
  );
};

export default Profile;