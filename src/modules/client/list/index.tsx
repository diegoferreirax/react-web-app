import React, { useEffect } from 'react';
import { useClientListContext } from './container';

const ClientList: React.FC = () => {
    const {
        handlerGetClientList,
        clientListResponse,
    } = useClientListContext();

    useEffect(() => {
        handlerGetClientList();
    }, []);

    return (
        <div>{clientListResponse && clientListResponse.length > 0 && clientListResponse.map((client, index) => (
            <div key={index}>
                <p>Name: {client.name}</p>
                <p>Surname: {client.surname}</p>
                <p>Age: {client.age}</p>
                <p>State: {client.state}</p>
                <p>Phone Number: {client.phoneNumber}</p>
            </div>
        ))
        }</div>
    );
}

export default ClientList;