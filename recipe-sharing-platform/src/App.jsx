import React from 'react';
import HomePage from './components/HomePage'; // Import the HomePage component
import './index.css'; // Ensure your Tailwind CSS is imported

function App() {
  return (
    <div className="bg-gray-50 min-h-screen"> {/* A light background for the whole app */}
      <HomePage />
    </div>
  );
}

export default App;