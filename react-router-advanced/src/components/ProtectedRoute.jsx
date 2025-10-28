import React from 'react';
import {Navigate, useNavigate } from 'react-router-dom';
import { AuthContext } from '../App';

const ProtectedRoute = ({ children }) => {
    const { isAuthenticated } = React.useContext(AuthContext);

    const navigate = useNavigate();

    if (!isAuthenticated) {
        return <Navigate to="/login" replace />;
    }

    return children;
};

export default ProtectedRoute;