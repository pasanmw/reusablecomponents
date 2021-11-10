import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Link, NavLink } from 'react-router-dom'




const Header = () => {

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>

          <Typography variant="h2" component="div" sx={{ flexGrow: 1 }}>
            <Button color="inherit" ><h2><Link style={{ color: "white", textDecoration: "none" }} to="/">Home</Link>
            </h2></Button>
            <Button color="inherit"><h2><Link style={{ color: "white", textDecoration: "none" }} to="/about">About</Link> </h2></Button>
          </Typography>

        </Toolbar>
      </AppBar>
    </Box>
  )
}

export default Header
