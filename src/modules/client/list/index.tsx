import React from 'react';
import { useClientListContext } from './container';

const ClientList: React.FC = () => {
    const {
        clientListResponse,
    } = useClientListContext();

    return (
        <div>{clientListResponse && clientListResponse.length > 0 && clientListResponse.map((client, index) => (
            <div key={index}>
                <p>Name: {client.name}</p>
                <p>Surname: {client.surname}</p>
                <p>Age: {client.age}</p>
                <p>State: {client.state}</p>
                <p>Phone Number: {client.phonenumber}</p>
            </div>
        ))
        }</div>
    );
}

export default ClientList;