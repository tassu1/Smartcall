import React from 'react';
import { AppBar, Toolbar, Link } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import '../styles/navbar.css';

const Navbar = () => {
    return (
        <AppBar position="static" className='navbar'>
            <Toolbar>
                <Link component={RouterLink} to="/" color="inherit" sx={{ marginRight: 2 }}>
                    Home
                </Link>
                <Link component={RouterLink} to="/about" color="inherit" sx={{ marginRight: 2 }}>
                    About
                </Link>
                <Link component={RouterLink} to="/guest" color="inherit">
                    Join as Guest
                </Link>
            </Toolbar>
        </AppBar>
    );
};

export default Navbar;