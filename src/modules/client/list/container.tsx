import React, {
    createContext,
    useContext,
    ReactNode,
    useState,
    useEffect
} from 'react';
import { GetClients } from './service';
import { Client } from '../models/client';
import { IResponseContract } from 'configurations/response-contract/type';
import { useResponseContract } from 'configurations/response-contract/container';

interface ClientListContextProps {
    handlerGetClientListResponse: () => void;
    clientListResponse: IResponseContract<Client[]>;
    clientTableSelected: Client | undefined;
    setClientTableSelected: (client: Client | undefined) => void;
    unsetClientTableSelected: () => void;
}

const ClientListContext = createContext<ClientListContextProps | undefined>(undefined);

const ClientListProvider: React.FC<{ children: ReactNode }> = ({ children }) => {

    const [clientListResponse, setClientListResponse, resetClientListState] = useResponseContract<Client[]>();
    const [clientTableSelected, setClientTableSelected] = useState<Client | undefined>(undefined);

    const handlerGetClientListResponse = () => {
        GetClients().subscribe((clientListResponse) => {
            setClientListResponse(clientListResponse);
        });
    };

    const unsetClientTableSelected = () => {
        setClientTableSelected(undefined);
    };

    useEffect(() => {
        handlerGetClientListResponse();
    }, []);

    useEffect(() => {
        return () => {
            resetClientListState();
        };
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