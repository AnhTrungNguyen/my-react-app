import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import AppleIcon from '@mui/icons-material/Apple';
import { NavLink } from 'react-router-dom';

export default function NavBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <AppleIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Chipmunk Coder
          </Typography>
          <div style={{
                    display: "flex",
                    padding: '5px 0 5px 5px',
                    fontSize: '20px'
                }}>
          <NavLink to="/" style={({ isActive }) => ({ 
                            color: isActive ? 'white' : 'white', backgroundColor: isActive ? '#72D50D' : '#1976D2', borderRadius: isActive ? '8px' : "8px" , textDecoration: 'none', marginRight: "30px" })} color="inherit">Home</NavLink>
          <NavLink to="/food" style={({ isActive }) => ({ 
                            color: isActive ? 'white' : 'white', backgroundColor: isActive ? '#72D50D' : '#1976D2', borderRadius: isActive ? '8px' : "8px" , textDecoration: 'none', marginRight: "30px" })} color="inherit">Food</NavLink>
          <NavLink to="/blog" style={({ isActive }) => ({ 
                            color: isActive ? 'white' : 'white', backgroundColor: isActive ? '#72D50D' : '#1976D2', borderRadius: isActive ? '8px' : "8px" , textDecoration: 'none', marginRight: "30px" })} color="inherit">Blog</NavLink>
          <NavLink to="/contact" style={({ isActive }) => ({ 
                            color: isActive ? 'white' : 'white', backgroundColor: isActive ? '#72D50D' : '#1976D2', borderRadius: isActive ? '8px' : "8px" , textDecoration: 'none', marginRight: "30px" })} color="inherit">Contact</NavLink>
          <NavLink to="/donate" style={({ isActive }) => ({ 
                            color: isActive ? 'white' : 'white', backgroundColor: isActive ? '#72D50D' : '#1976D2', borderRadius: isActive ? '8px' : "8px" , textDecoration: 'none', marginRight: "30px" })} color="inherit">Donate</NavLink>
          <NavLink to="/login" style={({ isActive }) => ({ 
                            color: isActive ? 'white' : 'white', backgroundColor: isActive ? '#72D50D' : '#1976D2', borderRadius: isActive ? '8px' : "8px" , textDecoration: 'none', marginRight: "30px" })} color="inherit">Login</NavLink>
          </div>
        </Toolbar>
      </AppBar>
    </Box>
  );
}