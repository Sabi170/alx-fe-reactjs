// src/components/Profile.jsx
import React from 'react';
import { Link, Routes, Route, useResolvedPath } from 'react-router-dom';

const Profile = () => {

    const resolvedPath = useResolvedPath('');
 return (
    <div style={{ border: '1px solid #ccc', padding: '20px', borderRadius: '8px' }}>
      <h2>User Profile</h2>
      <nav style={{ marginBottom: '15px' }}>
        <ul style={{ listStyle: 'none', padding: 0, display: 'flex', borderBottom: '1px solid #eee' }}>
          {/* Use resolvedPath.pathname for relative links */}
          <li style={{ marginRight: '15px', paddingBottom: '5px' }}><Link to={`${resolvedPath.pathname}/details`}>Details</Link></li>
          <li style={{ paddingBottom: '5px' }}><Link to={`${resolvedPath.pathname}/settings`}>Settings</Link></li>
        </ul>
      </nav>

      {/* !!! IMPORTANT: Move Routes and Route definitions here !!! */}
      <Routes>
        <Route index element={<ProfileDetails />} /> {/* Default child route for /profile */}
        <Route path="details" element={<ProfileDetails />} />
        <Route path="settings" element={<ProfileSettings />} />
      </Routes>
      {/* No need for <Outlet /> here anymore, as Routes component renders children directly */}
    </div>
  );
};

export default Profile;