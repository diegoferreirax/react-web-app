import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { useTranslation } from 'modules/translation/container/TranslationProvider';
import ClientPage from 'modules/client/ClientPage';
import ProtectedRoutes from './protected-router/ProtectedRoutes';
import About from 'modules/about/About';
import DashboardPage from 'modules/dashboard/DashboardPage';

const RoutesApp: React.FC = () => {
    const {
        translate
    } = useTranslation();

    return (
        <Routes>
            <Route path="/" element={<Navigate to="h" />} />

            <Route element={<ProtectedRoutes />}>
                <Route path="h" element={
                    <DashboardPage />
                }>
                    <Route path="clients" element={<ClientPage />} />
                    <Route path="about" element={<About />} />
                </Route>
            </Route>

            <Route path="*" element={translate('page_not_found')} />
        </Routes>
    );
};

export default RoutesApp;
