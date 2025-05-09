import React from 'react';
import { Outlet } from 'react-router';

const ProtectedRoutes: React.FC = () => {
    // const isAuthenticated = true;
    // const redirectPath = '/login';
    // if (!isAuthenticated) {
    //     return <Navigate to={redirectPath} replace />;
    // }
    return <Outlet />;
};

export default ProtectedRoutes;
