import * as React from 'react';
import { TableComponents, TableVirtuoso } from 'react-virtuoso';
import {
    TableContainer,
    Button,
    Typography,
    Dialog
} from '@mui/material';
import { ColumnData, Data } from './types';
import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import FixedHeaderContent from './fixed-header-content';
import RowContent from './row-content';

function createData(id: number): Data {
    return {
        id,
        firstName: 'chance.first()',
        lastName: 'chance.last()',
        age: id,
        phone: 'chance.phone()',
        state: 'chance.state({ full: true })',
        action: true,
    };
};

const rows: Data[] = Array.from({ length: 200 }, (_, index) => createData(index));

const columns: ColumnData[] = [
    {
        width: 100,
        label: 'First Name',
        dataKey: 'firstName',
    },
    {
        width: 100,
        label: 'Last Name',
        dataKey: 'lastName',
    },
    {
        width: 50,
        label: 'Age',
        dataKey: 'age',
        numeric: true,
    },
    {
        width: 110,
        label: 'State',
        dataKey: 'state',
    },
    {
        width: 130,
        label: 'Phone Number',
        dataKey: 'phone',
    },
    {
        width: 50,
        label: 'Actions',
        dataKey: 'action',
        actions: true,
    },
];

const VirtuosoTableComponents: TableComponents<Data> = {
    Scroller: React.forwardRef<HTMLDivElement>((props, ref) => (
        <TableContainer component={Paper} {...props} ref={ref} />
    )),
    Table: (props) => (
        <Table {...props} sx={{ borderCollapse: 'separate', tableLayout: 'fixed' }} />
    ),
    TableHead: React.forwardRef<HTMLTableSectionElement>((props, ref) => (
        <TableHead {...props} ref={ref} />
    )),
    TableRow,
    TableBody: React.forwardRef<HTMLTableSectionElement>((props, ref) => (
        <TableBody {...props} ref={ref} />
    )),
};

interface VirtualScrollProps {
}

const VirtualScroll: React.FC = (props: VirtualScrollProps) => {

    const rootRef = React.useRef<HTMLDivElement>(null);
    const [selectedItem, setSelectedItem] = React.useState<Data | null>(null);
    const [isModalOpen, setModalOpen] = React.useState(false);

    const handleDeleteClick = (item: Data) => {
        setSelectedItem(item);
        setModalOpen(true);
        console.log('Delete clicked for item:', item);
    };

    return (
        <Box
            sx={{
                height: 300,
                flexGrow: 1,
                minWidth: 300,
                transform: 'translateZ(0)',
            }}
            ref={rootRef}
        >
            <Paper style={{ height: 500, width: '100%' }}>
                <TableVirtuoso
                    data={rows}
                    components={VirtuosoTableComponents}
                    fixedHeaderContent={() => <FixedHeaderContent columns={columns} />}
                    itemContent={(_index: number, row: Data) => (
                        <RowContent
                            columns={columns}
                            row={row}
                            handleDeleteClick={() => handleDeleteClick(row)} />
                    )}
                />
            </Paper>

            <Dialog
                disablePortal
                disableEnforceFocus
                disableAutoFocus
                open={isModalOpen}
                aria-labelledby="server-modal-title"
                aria-describedby="server-modal-description"
                sx={{
                    display: 'flex',
                    p: 1,
                    alignItems: 'center',
                    justifyContent: 'center',
                }}
                container={() => rootRef.current!}
            >
                <Box
                    sx={(theme) => ({
                        position: 'relative',
                        width: 400,
                        bgcolor: 'background.paper',
                        border: '2px solid #000',
                        boxShadow: theme.shadows[5],
                        p: 4,
                    })}
                >
                    <Typography id="modal-title" variant="h6" component="h2">
                        Confirm Deletion
                    </Typography>
                    <Typography id="modal-description" sx={{ mt: 2 }}>
                        Are you sure you want to delete {selectedItem?.firstName || 'this item'}?
                    </Typography>
                    <Box sx={{ display: 'flex', justifyContent: 'flex-end', mt: 2 }}>
                        <Button onClick={() => setModalOpen(false)} color="primary">
                            Cancel
                        </Button>
                        <Button onClick={() => setModalOpen(false)} color="secondary" sx={{ ml: 2 }}>
                            Delete
                        </Button>
                    </Box>
                </Box>
            </Dialog>
        </Box>
    );
}

export default VirtualScroll;