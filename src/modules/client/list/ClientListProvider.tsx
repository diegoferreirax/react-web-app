import React, {
    createContext,
    useContext,
    ReactNode,
    useState,
    useEffect,
    useCallback
} from 'react';
import { GetClients } from './ClientListService';
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

    const handlerGetClientListResponse = useCallback(() => {
        GetClients().subscribe((clientListResponse) => {
            setClientListResponse(clientListResponse);
        });
    }, [setClientListResponse]);

    const unsetClientTableSelected = () => {
        setClientTableSelected(undefined);
    };

    useEffect(() => {
        handlerGetClientListResponse();
    }, [handlerGetClientListResponse]);

    useEffect(() => {
        return () => {
            resetClientListState();
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
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