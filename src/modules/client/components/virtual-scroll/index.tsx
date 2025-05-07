import * as React from 'react';
import { Box, Paper } from '@mui/material';
import { Client } from 'modules/client/client';
import { TableVirtuoso } from 'react-virtuoso';
import { columns } from './types';
import VirtuosoTableComponents from './table-components';
import FixedHeaderContent from './fixed-header-content';
import RowContent from './row-content';

type VirtualScrollClientProps = {
    clientListResponse: Client[];
    handleClientSelected: (client: Client) => void;
};

const VirtualScrollClient: React.FC<VirtualScrollClientProps> = (props: VirtualScrollClientProps) => {
    const rootRef = React.useRef<HTMLDivElement>(null);

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
                    data={props.clientListResponse}
                    components={VirtuosoTableComponents({ totalItems: props.clientListResponse.length })}
                    fixedHeaderContent={() => <FixedHeaderContent columns={columns} />}
                    itemContent={(_index: number, row: Client) => (
                        <RowContent
                            columns={columns}
                            row={row}
                            handleClientSelected={() => props.handleClientSelected(row)} />
                    )}
                />
            </Paper>
        </Box>
    );
}

export default VirtualScrollClient;