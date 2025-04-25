import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import Client from 'modules/client';
import Dashboard from 'modules/dashboard';
import VirtualScroll from 'modules/virtual-scroll';
import ProtectedRoutes from './protected-router';
import About from 'modules/about';

const RoutesApp: React.FC = () => {
    return (
        <Routes>
            <Route path="/" element={<Navigate to="/dashboard" />} />

            <Route element={<ProtectedRoutes />}>
                <Route path="/dashboard" element={
                    <Dashboard />
                }>

                    <Route path="/dashboard/clients" element={<Client />} />
                    <Route path="/dashboard/about" element={<About />} />
                    <Route path="/dashboard/virtual-scroll" element={<VirtualScroll />} />

                </Route>
            </Route>

            <Route path="*" element={<div>404 - Página não encontrada</div>} />
        </Routes>
    );
};

export default RoutesApp;
