import * as React from 'react';
import ClientListProvider from './list/container';
import ClientListPage from './list/page';

const Client: React.FC = () => {
    return (
        <ClientListProvider>
            <ClientListPage />
        </ClientListProvider>
    );
}

export default Client;