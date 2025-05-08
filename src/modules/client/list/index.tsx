import * as React from 'react';
import { Client } from 'modules/client/models/client';
import { useClientListContext } from 'modules/client/list/container';
import { Box } from '@mui/material';
import DataGridClient from '../components/data-grid-client';

const ClientList: React.FC = () => {

    // const [selectedItem, setSelectedItem] = React.useState<Client | null>(null);
    // const [isModalOpen, setModalOpen] = React.useState(false);

    const {
        clientListResponse,
    } = useClientListContext();

    const handleClientSelected = (client: Client) => {
        // setSelectedItem(item);
        // setModalOpen(true);
        console.log(client);
    };

    return (
        <Box sx={{ height: 400, width: '100%' }}>
            <DataGridClient
                clientListResponse={clientListResponse}
                handleClientSelected={handleClientSelected}
            />
        </Box>
    );
}

export default ClientList;