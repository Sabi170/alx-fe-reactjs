import './App.css';
import React, { useState } from 'react';
import { BrowserRouter as Router,Routes, Route, Link, Outlet, useNavigate, Navigate  } from 'react-router-dom';

import Home from './components/Home';
import About from './components/About';
import Profile from './components/Profile';
import ProfileDetails from './components/ProfileDetails';
import ProfileSettings from './components/ProfileSettings';
import BlogPost from './components/BlogPost';
import NotFound from './components/NotFound';
import Dashboard from './components/Dashboard';

const AuthContext = React.createContext(null);

const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const login = () => setIsAuthenticated(true);
  const logout = () => setIsAuthenticated(false);

  const authContextValue = {
    isAuthenticated,
    login,
    logout,
  };

  return (
    <AuthContext.Provider value={authContextValue}>
      {children}
      </AuthContext.Provider>
  );
};

const ProtectedRoute = ({ children  }) => {
  const { isAuthenticated } = React.useContext(AuthContext);
  const navigate = useNavigate();

  if (!isAuthenticated) {

    return <Navigate to="/login" replace/>;
  }
  return children;
};

const LoginPage = () => {
  const { isAuthenticated, login } = React.useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogin = () => {
    login();
    navigate('/profile');
  };

  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <h2>Login</h2>
      {isAuthenticated ? (
        <p>You are already logged in!</p>
      ) : (
        <button onClick={handleLogin} style={{ padding: '10px 20px', backgroundColor: '#28a745',
          color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer'}}>
            Log In
            </button>
      )}
    </div>
  );
};

function App() {
  const { isAuthenticated, logout } = React.useContext(AuthContext); // Access auth state in App

  return (
    <Router>
      <div className="App">
        <nav style={{ padding: '10px 20px', backgroundColor: '#f8f9fa', borderBottom: '1px solid #e9ecef', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex' }}>
            <li style={{ marginRight: '20px' }}><Link to="/">Home</Link></li>
            <li style={{ marginRight: '20px' }}><Link to="/about">About</Link></li>
            <li style={{ marginRight: '20px' }}><Link to="/profile">Profile</Link></li>
            <li style={{ marginRight: '20px' }}><Link to="/blog/123">Dynamic Blog Post 123</Link></li>
            <li style={{ marginRight: '20px' }}><Link to="/dashboard">Dashboard (Protected)</Link></li>
          </ul>
          <div>
            {isAuthenticated ? (
              <button onClick={logout} style={{ padding: '8px 15px', backgroundColor: '#dc3545', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>
                Log Out
              </button>
            ) : (
              <Link to="/login" style={{ textDecoration: 'none', color: '#007bff' }}>
                <button style={{ padding: '8px 15px', backgroundColor: '#007bff', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>
                  Login
                </button>
              </Link>
            )}
          </div>
        </nav>

        <div style={{ padding: '20px' }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/login" element={<LoginPage />} />

            {/* Nested Routes for Profile */}
            <Route path="/profile" element={
              <ProtectedRoute>
                <Profile />
              </ProtectedRoute>
            }>
              <Route index element={<ProfileDetails />} /> {/* Default child route for /profile */}
              <Route path="details" element={<ProfileDetails />} />
              <Route path="settings" element={<ProfileSettings />} />
            </Route>

            {/* Protected Route Example */}
            <Route path="/dashboard" element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            } />

            {/* Dynamic Routing for Blog Posts */}
            <Route path="/blog/:id" element={<BlogPost />} />

            {/* Catch-all for 404 Not Found */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

// --- Root Component for AuthProvider ---
// This wrapper is needed to provide the AuthContext to App and its children.
const AppWrapper = () => (
  <AuthProvider>
    <App />
  </AuthProvider>
);

export default AppWrapper;