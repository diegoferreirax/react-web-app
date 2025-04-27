import * as React from 'react';
import { useDemoRouter } from '@toolpad/core/internal';
import { TableComponents, TableVirtuoso } from 'react-virtuoso';
import {
    IconButton,
    TableContainer,
    Button,
    Modal,
    Typography
} from '@mui/material';
import Box from '@mui/material/Box';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

interface Data {
    id: number;
    firstName: string;
    lastName: string;
    age: number;
    phone: string;
    state: string;
    action: boolean;
}

interface ColumnData {
    dataKey: keyof Data;
    label: string;
    numeric?: boolean;
    width?: number;
    actions?: boolean;
}

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
}

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

const rows: Data[] = Array.from({ length: 200 }, (_, index) => createData(index));

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

function fixedHeaderContent() {
    return (
        <TableRow>
            {columns.map((column) => (
                <TableCell
                    key={column.dataKey}
                    variant="head"
                    align={column.numeric || false ? 'right' : 'left'}
                    style={{ width: column.width }}
                    sx={{ backgroundColor: 'background.paper' }}
                >
                    {column.label}
                </TableCell>
            ))}
        </TableRow>
    );
}

interface VirtualScrollProps {
}

const VirtualScroll: React.FC = (props: VirtualScrollProps) => {

    const router = useDemoRouter('/dashboard');
    const rootRef = React.useRef<HTMLDivElement>(null);
    const [selectedItem, setSelectedItem] = React.useState<Data | null>(null);
    const [isModalOpen, setModalOpen] = React.useState(false);

    const handleDeleteClick = (item: Data) => {
        setSelectedItem(item);
        setModalOpen(true);
        console.log('Delete clicked for item:', item);
    };

    const PageContent = ({ pathname }: { pathname: string }) => {
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
                        fixedHeaderContent={fixedHeaderContent}
                        itemContent={(_index: number, row: Data) => (
                            <React.Fragment>
                                {columns.map((column) => {
                                    const value = row[column.dataKey];

                                    return (
                                        <TableCell
                                            key={column.dataKey}
                                            align={column.numeric || false ? 'right' : 'left'}
                                            style={{ width: column.width }}
                                        >
                                            {column.actions ? (
                                                <div>
                                                    <IconButton aria-label="edit" size="small">
                                                        <EditIcon fontSize="small" />
                                                    </IconButton>
                                                    <IconButton
                                                        aria-label="delete"
                                                        size="small"
                                                        onClick={() => handleDeleteClick(row)}
                                                    >
                                                        <DeleteIcon fontSize="small" />
                                                    </IconButton>
                                                </div>
                                            ) : (
                                                value
                                            )}
                                        </TableCell>
                                    );
                                })}
                            </React.Fragment>
                        )}
                    />
                </Paper>

                <Modal
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
                </Modal>
            </Box>
        );
    }

    return (
        <PageContent pathname={router.pathname} />
    );
}

export default VirtualScroll;