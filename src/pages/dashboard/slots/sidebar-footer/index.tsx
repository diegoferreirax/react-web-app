import React from 'react';
import { Typography } from '@mui/material';
import { SidebarFooterProps } from '@toolpad/core';
import Link from 'styled-components/link';

const SidebarFooter: React.FC<SidebarFooterProps> = ({ mini }: SidebarFooterProps) => {

    const handleLink = (mini: boolean) => {
        return (
            <div>
                © {!mini ? (
                    <>
                        {new Date().getFullYear()} Desenvolvido por
                    </>
                ) : <></>} <Link href="https://linkedin.com/in/diegoferreirax" target="_blank">Diego</Link>
            </div>
        );
    };

    return (
        <Typography
            variant="caption"
            sx={{ m: 1, whiteSpace: 'nowrap', overflow: 'hidden' }}
        >
            {handleLink(mini)}
        </Typography>
    );
};

export default SidebarFooter;