import * as React from 'react';
import { createTheme } from '@mui/material/styles';
import { AppProvider, type Navigation } from '@toolpad/core/AppProvider';
import { DashboardLayout } from '@toolpad/core/DashboardLayout';
import { useDemoRouter } from '@toolpad/core/internal';
import { useTranslation } from 'modules/translation/container';
import { TableComponents, TableVirtuoso } from 'react-virtuoso';
import Box from '@mui/material/Box';
import PeopleIcon from '@mui/icons-material/People';
import InfoIcon from '@mui/icons-material/Info';
import ListIcon from '@mui/icons-material/List';
import AppTitle from './slots/app-title';
import ToolbarActions from './slots/toolbar-actions';
import SidebarFooter from './slots/sidebar-footer';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { TableContainer } from '@mui/material';


interface Data {
    id: number;
    firstName: string;
    lastName: string;
    age: number;
    phone: string;
    state: string;
}

interface ColumnData {
    dataKey: keyof Data;
    label: string;
    numeric?: boolean;
    width?: number;
}

function createData(id: number): Data {
    return {
        id,
        firstName: 'chance.first()',
        lastName: 'chance.last()',
        age: id,
        phone: 'chance.phone()',
        state: 'chance.state({ full: true })',
    };
}

const columns: ColumnData[] = [
    {
        width: 100,
        label: 'First Name',
        dataKey: 'firstName',
    },
    {
        width: 100,
        label: 'Last Name',
        dataKey: 'lastName',
    },
    {
        width: 50,
        label: 'Age',
        dataKey: 'age',
        numeric: true,
    },
    {
        width: 110,
        label: 'State',
        dataKey: 'state',
    },
    {
        width: 130,
        label: 'Phone Number',
        dataKey: 'phone',
    },
];

const rows: Data[] = Array.from({ length: 200 }, (_, index) => createData(index));

const VirtuosoTableComponents: TableComponents<Data> = {
    Scroller: React.forwardRef<HTMLDivElement>((props, ref) => (
        <TableContainer component={Paper} {...props} ref={ref} />
    )),
    Table: (props) => (
        <Table {...props} sx={{ borderCollapse: 'separate', tableLayout: 'fixed' }} />
    ),
    TableHead: React.forwardRef<HTMLTableSectionElement>((props, ref) => (
        <TableHead {...props} ref={ref} />
    )),
    TableRow,
    TableBody: React.forwardRef<HTMLTableSectionElement>((props, ref) => (
        <TableBody {...props} ref={ref} />
    )),
};

function fixedHeaderContent() {
    return (
        <TableRow>
            {columns.map((column) => (
                <TableCell
                    key={column.dataKey}
                    variant="head"
                    align={column.numeric || false ? 'right' : 'left'}
                    style={{ width: column.width }}
                    sx={{ backgroundColor: 'background.paper' }}
                >
                    {column.label}
                </TableCell>
            ))}
        </TableRow>
    );
}

function rowContent(_index: number, row: Data) {
    return (
        <React.Fragment>
            {columns.map((column) => (
                <TableCell
                    key={column.dataKey}
                    align={column.numeric || false ? 'right' : 'left'}
                >
                    {row[column.dataKey]}
                </TableCell>
            ))}
        </React.Fragment>
    );
}

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
            segment: 'virtual-scroll',
            title: translate('virtual_scroll'),
            icon: <ListIcon />,
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

    const PageContent = ({ pathname }: { pathname: string }) => {
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
                {/* <Typography>Dashboard content for {pathname}</Typography> */}

                <Paper style={{ height: 400, width: '100%' }}>
                    <TableVirtuoso
                        data={rows}
                        components={VirtuosoTableComponents}
                        fixedHeaderContent={fixedHeaderContent}
                        itemContent={rowContent}
                    />
                </Paper>
            </Box>
        );
    }

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