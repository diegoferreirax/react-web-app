import React from 'react';
import { Stack, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import reactFlag from 'assets/react.png';

const AppTitle: React.FC = () => {
    const navigate = useNavigate();

    return (
        <Stack
            direction="row"
            alignItems="center"
            spacing={2}
            sx={{ cursor: 'pointer' }}
            onClick={() => navigate('/h')}>
            <img src={reactFlag} alt="React Web App" width={24} height={24} />
            <Typography variant="h6">React Web App</Typography>
        </Stack>
    );
};

export default AppTitle;