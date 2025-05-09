import * as React from 'react';
import {
    Box,
    Typography,
    Paper,
    Divider,
    Breadcrumbs,
    Link,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';

type BreadcrumbsPages = {
    name: string;
    url: string;
};

type PageContainerProps = {
    pageName: string;
    children: React.ReactNode;
    breadcrumbPrimaryPage: string;
    breadcrumbsPages: BreadcrumbsPages[];
};

const PageContainer: React.FC<PageContainerProps> = (props: PageContainerProps) => {
    const navigate = useNavigate();

    var breadcrumbs = (
        <Breadcrumbs aria-label="breadcrumb">
            {props.breadcrumbsPages.map((item, index) => (
                <Link
                    key={index}
                    underline="hover"
                    color="inherit"
                    style={{ cursor: 'pointer' }}
                    onClick={() => navigate(item.url)}
                >
                    {item.name}
                </Link>
            ))}
            <Typography color="text.primary">{props.breadcrumbPrimaryPage}</Typography>
        </Breadcrumbs>
    );

    return (
        <Box
            sx={{
                height: '100vh',
                display: 'flex',
                flexDirection: 'column',
            }}
        >
            <Box sx={{
                paddingTop: 2,
                paddingLeft: 2,
                paddingBottom: 2,
            }}>
                {breadcrumbs}
            </Box>

            <Box
                sx={{
                    paddingLeft: 2,
                    paddingBottom: 2,
                }}
            >
                <Typography variant="h5">{props.pageName}</Typography>
            </Box>

            <Divider />

            <Box sx={{ flex: 1, padding: 2 }}>
                <Paper elevation={3} sx={{ padding: 2 }}>
                    {props.children}
                </Paper>
            </Box>

            <Divider />
        </Box>
    );
};

export default PageContainer;