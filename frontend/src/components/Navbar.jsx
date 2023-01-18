import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';

export default function Navbar() {
  return (
    <div className="Navbar">
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar className="Navbar">
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          </Typography>
          <Button color="inherit"><p className="Navbar-text">Sales</p><Link href="#" underline="none">
          </Link></Button>
          <Button color="inherit"><p className="Navbar-text">Upload</p><Link href="#" underline="none">
          </Link></Button>
          <Button color="inherit"><p className="Navbar-text">Dashboard</p><Link href="#" underline="none">
          </Link></Button>
          <Button color="inherit"><p className="Navbar-text">NearbyMarkets</p><Link href="#" underline="none">
          </Link></Button>
          <Button color="inherit"><p className="Navbar-text">Guidelines</p><Link href="#" underline="none">
          </Link></Button>
        </Toolbar>
      </AppBar>
    </Box>
    </div>
  );
}
