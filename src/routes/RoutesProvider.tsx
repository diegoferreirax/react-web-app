import React, { createContext, useContext, ReactNode } from 'react';
import { useTranslation } from 'modules/translation/container/TranslationProvider';
import { type Navigation } from '@toolpad/core/AppProvider';
import PeopleIcon from '@mui/icons-material/People';
import InfoIcon from '@mui/icons-material/Info';
import { useLocation } from 'react-router-dom';

interface RoutesContextProps {
    routes: Navigation;
    isRootRouter: boolean;
}

const RoutesContext = createContext<RoutesContextProps | undefined>(undefined);

const RoutesProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const { translate } = useTranslation();
    const location = useLocation();

    const githubPagesRouter = process.env.PUBLIC_URL.endsWith('react-web-app') ? true : false;
    const clientRouter = githubPagesRouter ? `react-web-app#/h/clients` : '#/h/clients';
    const aboutRouter = githubPagesRouter ? `react-web-app#/h/about` : '#/h/about';

    const isRootRouter = location.hash.endsWith('#/h') || location.pathname.endsWith('/h') || location.pathname.endsWith('/h/');

    const routes: Navigation = [
        {
            kind: 'header',
            title: translate('main_menu'),
        },
        {
            segment: clientRouter,
            title: translate('clients'),
            icon: <PeopleIcon />,
        },
        {
            segment: aboutRouter,
            title: translate('about'),
            icon: <InfoIcon />,
        },
        {
            kind: 'divider',
        },
    ];

    return (
        <RoutesContext.Provider value={{
            routes,
            isRootRouter,
        }}>
            {children}
        </RoutesContext.Provider>
    );
};

export const useRoutesContext = (): RoutesContextProps => {
    const context = useContext(RoutesContext);
    if (!context) {
        throw new Error('useRoutesContext must be used within a RoutesProvider');
    }
    return context;
};

export default RoutesProvider;