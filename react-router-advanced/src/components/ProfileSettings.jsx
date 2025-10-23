// src/components/ProfileSettings.jsx
import React from 'react';

const ProfileSettings = () => {
  return (
    <div>
      <h3>Profile Settings</h3>
      <p>Change password, update preferences, etc.</p>
      <button style={{ padding: '8px 15px', backgroundColor: '#ffc107', color: 'black', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>Edit Settings</button>
    </div>
  );
};

export default ProfileSettings;