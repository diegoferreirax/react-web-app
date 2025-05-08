import React, { createContext, useContext, ReactNode, useState, useEffect } from 'react';
import { GetClients } from './service';
import { Client } from '../models/client';

interface ClientListContextProps {
    handlerGetClientList: () => Promise<void>;
    clientListResponse: Client[];
}

const ClientListContext = createContext<ClientListContextProps | undefined>(undefined);

const ClientListProvider: React.FC<{ children: ReactNode }> = ({ children }) => {

    const [clientListResponse, setClientListResponse] = useState<Client[]>([]);

    const handlerGetClientList = async () => {
        const response = await GetClients();
        setClientListResponse(response.result);
    };

    useEffect(() => {
        handlerGetClientList();
    }, []);

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