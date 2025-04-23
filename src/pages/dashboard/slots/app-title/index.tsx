import React from 'react';
import { Stack, Typography } from '@mui/material';
import reactFlag from 'assets/react.png';

const AppTitle: React.FC = () => {
    return (
        <Stack direction="row" alignItems="center" spacing={2}>
            <img src={reactFlag} alt="Português" width={24} height={24} />
            <Typography variant="h6">React Web App</Typography>
        </Stack>
    );
};

export default AppTitle;