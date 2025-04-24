import React from 'react';
import { Stack } from '@mui/material';
import { ThemeSwitcher } from '@toolpad/core';
import SelectLanguage from 'modules/translation/components/select-language';

const ToolbarActions: React.FC = () => {
    return (
        <Stack direction="row" spacing={2} alignItems="center">
            <ThemeSwitcher />
            <SelectLanguage />
        </Stack>
    );
};

export default ToolbarActions;