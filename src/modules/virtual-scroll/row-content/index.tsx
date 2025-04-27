import * as React from 'react';
import { ColumnData, Data } from '../types';
import {
    IconButton,
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import TableCell from '@mui/material/TableCell';

interface RowContentProps {
    row: Data;
    columns: ColumnData[];
    handleDeleteClick: (item: Data) => void;
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
                    >
                        {column.actions ? (
                            <div>
                                <IconButton aria-label="edit" size="small">
                                    <EditIcon fontSize="small" />
                                </IconButton>
                                <IconButton
                                    aria-label="delete"
                                    size="small"
                                    onClick={() => props.handleDeleteClick(props.row)}
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
    );
}

export default RowContent;