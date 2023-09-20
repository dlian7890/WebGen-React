import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import './Header.css';

const Header = () => {
    return (
        <Box class='header'>
            <Typography
                sx={{ marginLeft: '2rem' }}
                variant='h4'
                component='div'
            >
                WebGen
            </Typography>
            <Button sx={{ marginRight: '1rem' }} color='inherit'>
                About
            </Button>
        </Box>
    );
};

export default Header;
