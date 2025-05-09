import React, {
    createContext,
    useContext,
    ReactNode,
    useState,
    useEffect
} from 'react';
import { GetClients } from './service';
import { Client } from '../models/client';

interface ClientListContextProps {
    handlerGetClientListResponse: () => Promise<void>;
    clientListResponse: Client[];
    clientTableSelected: Client | undefined;
    setClientTableSelected: (client: Client | undefined) => void;
    unsetClientTableSelected: () => void;
}

const ClientListContext = createContext<ClientListContextProps | undefined>(undefined);

const ClientListProvider: React.FC<{ children: ReactNode }> = ({ children }) => {

    const [clientListResponse, setClientListResponse] = useState<Client[]>([]);
    const [clientTableSelected, setClientTableSelected] = useState<Client | undefined>(undefined);

    const handlerGetClientListResponse = async () => {
        const response = await GetClients();
        setClientListResponse(response.result);
    };

    const unsetClientTableSelected = () => {
        setClientTableSelected(undefined)
    };

    useEffect(() => {
        handlerGetClientListResponse();
    }, []);

    return (
        <ClientListContext.Provider value={{
            handlerGetClientListResponse,
            clientListResponse,
            clientTableSelected,
            setClientTableSelected,
            unsetClientTableSelected,
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