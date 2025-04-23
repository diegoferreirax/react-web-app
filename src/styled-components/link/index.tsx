import React from 'react';
import { styled } from '@mui/material/styles';

const StyledLink = styled('a')({
    textDecoration: 'none',
    '&:hover': {
        textDecoration: 'underline',
    },
});

const Link = ({ href, children, ...props }: React.AnchorHTMLAttributes<HTMLAnchorElement>) => {
    return (
        <StyledLink href={href} {...props}>
            {children}
        </StyledLink>
    );
};

export default Link;