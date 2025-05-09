import * as React from 'react';
import { Client } from 'modules/client/models/client';
import './styles.css';

import Box from '@mui/material/Box';
import { DataGrid, GridColDef, GridRowSelectionModel } from '@mui/x-data-grid';

const columns: GridColDef<Client>[] = [
    {
        field: 'name',
        headerName: 'First name',
        width: 180,
    },
    {
        field: 'cpf',
        headerName: 'CPF',
        width: 150,
    },
    {
        field: 'dateOfBirth',
        headerName: 'Data de nascimento',
        width: 160,
    },
    {
        field: 'age',
        headerName: 'Age',
        type: 'number',
        width: 110,
    },
];

type DataGridClientProps = {
    clientListResponse: Client[];
    handleClientSelected: (client: Client | undefined) => void;
};

const DataGridClient: React.FC<DataGridClientProps> = (props: DataGridClientProps) => {
    return (
        <Box sx={{ height: 400, width: '100%' }}>
            <DataGrid
                rows={props.clientListResponse}
                checkboxSelection
                disableMultipleRowSelection
                hideFooterSelectedRowCount={true}
                columns={columns}
                pageSizeOptions={[5, 15, 30]}
                initialState={{
                    pagination: {
                        paginationModel: {
                            pageSize: 15,
                        },
                    },
                }}
                onRowSelectionModelChange={(ids: GridRowSelectionModel) => {
                    if (ids.ids.size === 0) {
                        props.handleClientSelected(undefined);
                    }
                }}
                onRowClick={(event) => {
                    props.handleClientSelected(event.row as Client);
                }}
            />
        </Box>
    );
}

export default DataGridClient;