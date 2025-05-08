import * as React from 'react';
import { Paper, Table, TableBody, TableCell, TableContainer, TableFooter, TableHead } from '@mui/material';
import { Client } from 'modules/client/models/client';
import { TableComponents } from 'react-virtuoso';
import TableRow from '@mui/material/TableRow';
import { columns } from '../types';

interface VirtuosoTableComponentsProps {
    totalItems: number;
}

const VirtuosoTableComponents = ({ totalItems }: VirtuosoTableComponentsProps): TableComponents<Client> => ({
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
    TableFoot: React.forwardRef<HTMLTableSectionElement>((props, ref) => (
        <TableFooter {...props} ref={ref}>
            <TableRow>
                <TableCell colSpan={columns.length} align="center">
                    Total Items: {totalItems}
                </TableCell>
            </TableRow>
        </TableFooter>
    )),
});

export default VirtuosoTableComponents;