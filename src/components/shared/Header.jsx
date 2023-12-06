import React from 'react';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import './Header.css';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <div class='header'>
            <div className='header-container'>
                <NavLink to='/' className='nav-link'>
                    <Typography
                        sx={{ marginLeft: '2rem' }}
                        variant='h4'
                        component='div'
                    >
                        WebGen
                    </Typography>
                </NavLink>
                <NavLink to='/about' className='nav-link'>
                    <Button sx={{ marginRight: '1rem' }} color='inherit'>
                        About
                    </Button>
                </NavLink>
            </div>
        </div>
    );
};

export default Header;
