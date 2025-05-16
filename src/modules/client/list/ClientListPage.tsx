import React from 'react';
import { Client } from 'modules/client/models/client';
import { useClientListContext } from 'modules/client/list/ClientListProvider';
import {
    Box,
    Button,
} from '@mui/material';
import { useTranslation } from 'modules/translation/container/TranslationProvider';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import PageContainer from 'components/page-container/PageContainer';
import DataGridClient from '../components/data-grid-client/DataGridClient';

const ClientListPage: React.FC = () => {
    const {
        translate
    } = useTranslation();

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
            console.log(clientTableSelected);
            console.log('log teste commit 3');
        }
    };

    return (
        <PageContainer
            pageDescription={translate('registered_clients_list')}
            breadcrumbPageName={translate('clients')}
            breadcrumbsPages={[
                { name: 'Dashboard', url: '/d' },
            ]}
        >
            <DataGridClient
                isLoading={clientListResponse.isLoading}
                clientListResponse={clientListResponse.data ?? []}
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
                        {translate('access_client')}
                    </Button>
                </Box>
            )}
        </PageContainer>
    );
};

export default ClientListPage;