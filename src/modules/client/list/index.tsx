import * as React from 'react';
import { Client } from 'modules/client/client';
import { useClientListContext } from 'modules/client/list/container';
import VirtualScrollClient from '../components/virtual-scroll';

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
        <VirtualScrollClient
            clientListResponse={clientListResponse}
            handleClientSelected={handleClientSelected} />
    );
}

export default ClientList;