import React from 'react';
import { Outlet } from 'react-router-dom';

const ProtectedRoutes: React.FC = () => {
    // const isAuthenticated = true;
    // const redirectPath = '/login';
    // if (!isAuthenticated) {
    //     return <Navigate to={redirectPath} replace />;
    // }
    return <Outlet />;
};

export default ProtectedRoutes;
