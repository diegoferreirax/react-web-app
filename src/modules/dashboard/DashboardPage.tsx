import * as React from 'react';
import { createTheme } from '@mui/material/styles';
import { AppProvider } from '@toolpad/core/AppProvider';
import { DashboardLayout } from '@toolpad/core/DashboardLayout';
import { Navigate, Outlet } from 'react-router-dom';
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

const Dashboard: React.FC = (props: DashboardProps) => {
    const { window } = props;
    const { navigation, router } = useRoutesContext();
    const demoWindow = window !== undefined ? window() : undefined;

    return (
        <AppProvider
            navigation={navigation}
            router={router}
            theme={theme}
            window={demoWindow}
        >
            <DashboardLayout
                slots={{
                    appTitle: AppTitle,
                    toolbarActions: ToolbarActions,
                    sidebarFooter: SidebarFooter,
                }}>
                <Navigate to={router.pathname} />
                <Outlet />
            </DashboardLayout>
        </AppProvider>
    );
}

export default Dashboard;