import * as React from 'react';
import TableCell from '@mui/material/TableCell';
import { Client } from 'modules/client/models/client';
import { ColumnData } from '../types';

interface RowContentProps {
    row: Client;
    columns: ColumnData[];
    handleClientSelected: (item: Client) => void;
}

const RowContent: React.FC<RowContentProps> = (props: RowContentProps) => {
    return (
        <React.Fragment>
            {props.columns.map((column) => {
                const value = props.row[column.dataKey];

                return (
                    <TableCell
                        key={column.dataKey}
                        align={column.numeric || false ? 'right' : 'left'}
                        style={{ width: column.width }}
                        onClick={() => props.handleClientSelected(props.row)}
                    >
                        {value}
                    </TableCell>
                );
            })}
        </React.Fragment>
    );
}

export default RowContent;