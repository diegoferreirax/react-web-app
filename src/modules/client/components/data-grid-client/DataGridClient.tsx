import * as React from 'react';
import { Client } from 'modules/client/models/client';
import { DataGrid, GridColDef, GridRowSelectionModel } from '@mui/x-data-grid';
import { useTranslation } from 'modules/translation/container/TranslationProvider';
import Box from '@mui/material/Box';
import './styles.css';

type DataGridClientProps = {
    isLoading: boolean;
    clientListResponse: Client[];
    handleClientSelected: (client: Client | undefined) => void;
};

const DataGridClient: React.FC<DataGridClientProps> = (props: DataGridClientProps) => {
    const {
        translate
    } = useTranslation();

    const columns: GridColDef<Client>[] = [
        {
            field: 'name',
            headerName: translate('name'),
            width: 180,
        },
        {
            field: 'cpf',
            headerName: 'CPF',
            width: 150,
        },
        {
            field: 'dateOfBirth',
            headerName: translate('date_of_birth'),
            width: 160,
        },
        {
            field: 'age',
            headerName: translate('age'),
            type: 'number',
            width: 110,
        },
    ];

    return (
        <Box sx={{ height: 400, width: '100%' }}>
            <DataGrid
                rows={props.clientListResponse}
                checkboxSelection
                disableMultipleRowSelection
                hideFooterSelectedRowCount={true}
                columns={columns}
                pageSizeOptions={[5, 15, 30]}
                loading={props.isLoading}
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
                localeText={{
                    paginationRowsPerPage: translate('rows_per_page'),
                    noRowsLabel: translate('no_data'),
                    columnMenuSortAsc: translate('column_menu_sort_asc'),
                    columnMenuSortDesc: translate('column_menu_sort_desc'),
                    columnMenuUnsort: translate('column_menu_unsort'),
                    columnMenuFilter: translate('column_menu_filter'),
                    columnMenuHideColumn: translate('column_menu_hide_column'),
                    columnMenuManageColumns: translate('column_menu_manage_columns'),
                    columnMenuLabel: translate('column_menu_label'),
                    columnHeaderSortIconLabel: translate('column_header_sort_icon_label'),
                }}
            />
        </Box>
    );
}

export default DataGridClient;