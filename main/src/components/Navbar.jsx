import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import { NavLink } from 'react-router-dom'

export default function Navbar({setLogin}) {
  const navitems = [
    {name: "sales", link:"/sales"},
    {name: "upload", link:"/upload"},
    {name: "dashboard", link:"/dashboard"},
    {name: "nearby markets", link:"/nearby"},
    {name: "guidlines", link:"/guidlines"},
    {name: "logout", link:"/login"}
  ]
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
          
          {navitems.map(e => {
            if (e.name === "logout") setLogin(false)
            return(
              <Button color="inherit">
                <NavLink to={e.link} underline="none" style={{"textDecoration":"none"}}>
                  <p className="Navbar-text">{e.name}</p>
                </NavLink>
              </Button>
            )
          })}
        </Toolbar>
      </AppBar>
    </Box>
    </div>
  );
}
