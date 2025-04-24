import React from 'react';
import { MenuItem, Select } from '@mui/material';
import { useTranslation } from '../../container';
import ptFlag from 'assets/pt.png';
import enFlag from 'assets/en.png';
import esFlag from 'assets/es.png';

const SelectLanguage: React.FC = () => {
    const {
        language,
        handleSetLanguage
    } = useTranslation();

    const handleLanguageChange = (lang: string) => {
        handleSetLanguage(lang);
    };

    return (
        <Select
            value={language}
            onChange={(event) => handleLanguageChange(event.target.value)}
            variant="standard"
            size="small"
            sx={{
                '& .MuiSelect-select': {
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    padding: 0,
                },
                '&:before, &:after': {
                    borderBottom: 'none',
                },
                '&:hover:not(.Mui-disabled):before': {
                    borderBottom: 'none',
                },
            }}
        >
            <MenuItem value="pt">
                <img src={ptFlag} alt="Português" width={24} height={24} />
            </MenuItem>
            <MenuItem value="en">
                <img src={enFlag} alt="English" width={24} height={24} />
            </MenuItem>
            <MenuItem value="es">
                <img src={esFlag} alt="Spanish" width={24} height={24} />
            </MenuItem>
        </Select>
    );
};

export default SelectLanguage;