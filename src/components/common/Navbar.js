import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <AppBar position="static">
    <Toolbar>
      <Typography variant="h6" sx={{ flexGrow: 1 }}>
        Software House
      </Typography>
      <Button color="inherit" component={Link} to="/">
        Home
      </Button>
      <Button color="inherit" component={Link} to="/about">
        About Us
      </Button>
      <Button color="inherit" component={Link} to="/team">
        Team
      </Button>
    </Toolbar>
  </AppBar>
);

export default Navbar;
