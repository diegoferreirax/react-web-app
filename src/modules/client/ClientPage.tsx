import * as React from 'react';
import ClientListProvider from './list/ClientListProvider';
import ClientListPage from './list/ClientListPage';

const ClientPage: React.FC = () => {
    return (
        <ClientListProvider>
            <ClientListPage />
        </ClientListProvider>
    );
}

export default ClientPage;