import * as React from 'react';
import { ColumnData } from '../types';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';

interface FixedHeaderContentProps {
    columns: ColumnData[];
}

const FixedHeaderContent: React.FC<FixedHeaderContentProps> = (props: FixedHeaderContentProps) => {
    return (
        <TableRow>
            {props.columns.map((column) => (
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

export default FixedHeaderContent;