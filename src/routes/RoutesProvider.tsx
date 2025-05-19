import React, { createContext, useContext, ReactNode } from 'react';
import { useTranslation } from 'modules/translation/container/TranslationProvider';
import { type Navigation } from '@toolpad/core/AppProvider';
import PeopleIcon from '@mui/icons-material/People';
import InfoIcon from '@mui/icons-material/Info';

interface RoutesContextProps {
    menu: Navigation;
}

const RoutesContext = createContext<RoutesContextProps | undefined>(undefined);

const RoutesProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const { translate } = useTranslation();

    const menu: Navigation = [
        {
            kind: 'header',
            title: translate('main_menu'),
        },
        {
            segment: '#/h/clients',
            title: translate('clients'),
            icon: <PeopleIcon />,
        },
        {
            segment: '#/h/about',
            title: translate('about'),
            icon: <InfoIcon />,
        },
        {
            kind: 'divider',
        },
    ];

    return (
        <RoutesContext.Provider value={{
            menu,
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