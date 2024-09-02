// src/components/Header.js
import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import Logo from '../assets/logo.png'; // Adjust the path if needed

const Header = () => {
  return (
    <AppBar position="fixed" sx={{ backgroundColor: '#3c3c3c' }}>
      <Toolbar>
        <img src={Logo} alt="Alpha Industries Logo" style={{ height: 50, marginRight: 8 }} />
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Alpha Industries
        </Typography>
        <Link to="/about-us"><Button sx={{ color: 'white' }}>About Us</Button></Link>
        <Link to="/equipment"><Button sx={{ color: 'white' }}>Equipment</Button></Link>
        <Link to="/contact"><Button sx={{ color: 'white' }}>Contact</Button></Link>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
