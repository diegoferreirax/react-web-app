import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { useTranslation } from 'modules/translation/container';
import Client from 'modules/client';
import Dashboard from 'modules/dashboard';
import ProtectedRoutes from './protected-router';
import About from 'modules/about';

const RoutesApp: React.FC = () => {
    const {
        translate
    } = useTranslation();

    return (
        <Routes>
            <Route path="/" element={<Navigate to="/d" />} />

            <Route element={<ProtectedRoutes />}>
                <Route path="/d" element={
                    <Dashboard />
                }>
                    <Route path="/d/clients" element={<Client />} />
                    <Route path="/d/about" element={<About />} />
                </Route>
            </Route>

            <Route path="*" element={translate('page_not_found')} />
        </Routes>
    );
};

export default RoutesApp;
