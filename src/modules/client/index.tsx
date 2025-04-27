import * as React from 'react';
import ClientListProvider from './list/container';
import ClientList from './list';

const Client: React.FC = () => {
    return (
        <ClientListProvider>
            <ClientList />
        </ClientListProvider>
    );
}

export default Client;