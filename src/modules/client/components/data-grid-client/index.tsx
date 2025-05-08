import * as React from 'react';
import { Client } from 'modules/client/models/client';

import Box from '@mui/material/Box';
import { DataGrid, GridColDef } from '@mui/x-data-grid';

const columns: GridColDef<Client>[] = [
    {
        field: 'name',
        headerName: 'First name',
        width: 180,
        editable: true,
    },
    {
        field: 'surname',
        headerName: 'Last name',
        width: 180,
        editable: true,
    },
    {
        field: 'fullName',
        headerName: 'Full name',
        description: 'This column has a value getter and is not sortable.',
        sortable: false,
        width: 160,
        valueGetter: (value, row) => `${row.name || ''} ${row.surname || ''}`,
    },
    {
        field: 'age',
        headerName: 'Age',
        type: 'number',
        width: 110,
        editable: true,
    },
    {
        field: 'phoneNumber',
        headerName: 'Phone',
        width: 150,
        editable: true,
    },
];

type DataGridClientProps = {
    clientListResponse: Client[];
    handleClientSelected: (client: Client) => void;
};

const DataGridClient: React.FC<DataGridClientProps> = (props: DataGridClientProps) => {
    return (
        <Box sx={{ height: 400, width: '100%' }}>
            <DataGrid
                rows={props.clientListResponse}
                columns={columns}
                initialState={{
                    pagination: {
                        paginationModel: {
                            pageSize: 15,
                        },
                    },
                }}
                pageSizeOptions={[5, 15, 30]}
                onRowClick={(event) => {
                    props.handleClientSelected(event.row as Client);
                }}
            />
        </Box>
    );
}

export default DataGridClient;