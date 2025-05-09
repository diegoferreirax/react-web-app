import * as React from 'react';
import { Client } from 'modules/client/models/client';
import { useClientListContext } from 'modules/client/list/container';
import {
    Box,
    Button,
} from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'; 
import PageContainer from 'components/page-container';
import DataGridClient from '../components/data-grid-client';

const ClientListPage: React.FC = () => {
    const { 
        clientListResponse,
        clientTableSelected,
        setClientTableSelected,
        unsetClientTableSelected,
    } = useClientListContext();

    const handleClientSelected = (client: Client | undefined) => {
        if (client) {
            setClientTableSelected(client);
        } else {
            unsetClientTableSelected();
        }
    };

    const handleClientTableSelected = () => {
        if (clientTableSelected) {
            console.log('Accessing client:', clientTableSelected);
        }
    };

    return (
        <PageContainer
            pageName='Registered clients list'
            breadcrumbPrimaryPage='Clients'
            breadcrumbsPages={[
                { name: 'Home', url: '/dashboard' },
            ]}
        >
            <DataGridClient
                clientListResponse={clientListResponse}
                handleClientSelected={handleClientSelected}
            />
            {clientTableSelected && (
                <Box sx={{ marginTop: 2 }} display={'flex'} flexDirection="column" alignItems="end">
                    <Button
                        variant="contained"
                        color="primary"
                        onClick={handleClientTableSelected}
                        sx={{ marginTop: 1 }}
                        endIcon={<ArrowForwardIcon />}
                    >
                        Access Client
                    </Button>
                </Box>
            )}
        </PageContainer>
    );
};

export default ClientListPage;