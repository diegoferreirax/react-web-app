import * as React from 'react';
import { createTheme } from '@mui/material/styles';
import { AppProvider, type Navigation } from '@toolpad/core/AppProvider';
import { DashboardLayout } from '@toolpad/core/DashboardLayout';
import { useDemoRouter } from '@toolpad/core/internal';
import { useTranslation } from 'modules/translation/container';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import PeopleIcon from '@mui/icons-material/People';
import InfoIcon from '@mui/icons-material/Info';
import AppTitle from './slots/app-title';
import ToolbarActions from './slots/toolbar-actions';
import SidebarFooter from './slots/sidebar-footer';

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

function PageContent({ pathname }: { pathname: string }) {
    return (
        <Box
            sx={{
                py: 4,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                textAlign: 'center',
            }}
        >
            <Typography>Dashboard content for {pathname}</Typography>
        </Box>
    );
}

interface DashboardProps {
    window?: () => Window;
}

const Dashboard: React.FC = (props: DashboardProps) => {
    const { window } = props;
    const { translate } = useTranslation();

    const router = useDemoRouter('/dashboard');
    const demoWindow = window !== undefined ? window() : undefined;

    const navigation: Navigation = [
        {
            kind: 'header',
            title: translate('main_menu'),
        },
        {
            segment: 'clients',
            title: translate('clients'),
            icon: <PeopleIcon />,
        },
        {
            segment: 'about',
            title: translate('about'),
            icon: <InfoIcon />,
        },
        {
            kind: 'divider',
        },
    ];

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
                <PageContent pathname={router.pathname} />
            </DashboardLayout>
        </AppProvider>
    );
}

export default Dashboard;