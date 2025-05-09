import React, { createContext, useContext, ReactNode } from 'react';
import { useDemoRouter } from '@toolpad/core/internal';
import { useTranslation } from 'modules/translation/container';
import { Router, type Navigation } from '@toolpad/core/AppProvider';
import PeopleIcon from '@mui/icons-material/People';
import InfoIcon from '@mui/icons-material/Info';

interface RoutesContextProps {
    navigation: Navigation;
    router: Router;
}

const RoutesContext = createContext<RoutesContextProps | undefined>(undefined);

const RoutesProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const { translate } = useTranslation();
    const router = useDemoRouter('/dashboard');

    const navigation: Navigation = [
        {
            kind: 'header',
            title: translate('main_menu'),
        },
        {
            segment: 'dashboard/clients',
            title: translate('clients'),
            icon: <PeopleIcon />,
        },
        {
            segment: 'dashboard/about',
            title: translate('about'),
            icon: <InfoIcon />,
        },
        {
            kind: 'divider',
        },
    ];

    return (
        <RoutesContext.Provider value={{
            navigation,
            router,
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