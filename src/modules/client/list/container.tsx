import React, { createContext, useContext, ReactNode, useState } from 'react';
import { GetClients } from './service';
import { Client } from '../client';

interface ClientListContextProps {
    handlerGetClientList: () => Promise<void>;
    clientListResponse: Client[];
}

const ClientListContext = createContext<ClientListContextProps | undefined>(undefined);

const ClientListProvider: React.FC<{ children: ReactNode }> = ({ children }) => {

    const [clientListResponse, setClientListResponse] = useState<Client[]>([]);

    const handlerGetClientList = async () => {
        setClientListResponse(await GetClients());
    };

    return (
        <ClientListContext.Provider value={{
            handlerGetClientList,
            clientListResponse,
        }}>
            {children}
        </ClientListContext.Provider>
    );
};

export const useClientListContext = (): ClientListContextProps => {
    const context = useContext(ClientListContext);
    if (!context) {
        throw new Error('useClientListContext must be used within a ClientListProvider');
    }
    return context;
};

export default ClientListProvider;