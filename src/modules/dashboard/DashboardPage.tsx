import * as React from 'react';
import { createTheme } from '@mui/material/styles';
import { AppProvider } from '@toolpad/core/AppProvider';
import { DashboardLayout } from '@toolpad/core/DashboardLayout';
import { Outlet, useLocation } from 'react-router-dom';
import { useRoutesContext } from 'routes/RoutesProvider';
import AppTitle from './slots/app-title/AppTitle';
import ToolbarActions from './slots/toolbar-actions/ToolbarActions';
import SidebarFooter from './slots/sidebar-footer/SidebarFooter';

const theme = createTheme({
    cssVariables: {
        colorSchemeSelector: 'data-toolpad-color-scheme',
    },
    colorSchemes: { light: true, dark: true },
    breakpoints: {
        values: {
            xs: 0,
            sm: 600,
            md: 600,
            lg: 1200,
            xl: 1536,
        },
    },
});

interface DashboardProps {
    window?: () => Window;
}

const DashboardPage: React.FC = (props: DashboardProps) => {
    const { menu } = useRoutesContext();
    const { window } = props;
    
    const demoWindow = window !== undefined ? window() : undefined;
    const location = useLocation();
    const isRoot = location.pathname === '/h';

    const DashboarContent = () => {
        return (
            <div>
                <h1>Dashboard Content</h1>
                <p>This is the dashboard content.</p>
            </div>
        );
    };

    return (
        <AppProvider
            navigation={menu}
            theme={theme}
            window={demoWindow}
        >
            <DashboardLayout
                slots={{
                    appTitle: AppTitle,
                    toolbarActions: ToolbarActions,
                    sidebarFooter: SidebarFooter,
                }}>
                {isRoot ? <DashboarContent /> : <Outlet />}
            </DashboardLayout>
        </AppProvider>
    );
}

export default DashboardPage;