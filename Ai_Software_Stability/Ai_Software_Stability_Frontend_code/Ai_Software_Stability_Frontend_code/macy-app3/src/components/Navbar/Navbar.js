import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import zensarlogo from '../../images/logo.png';
import './Navbar.css';


export default function ButtonAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar>
        <Toolbar>
          <img src={zensarlogo}  style={{width : "210px"}}/>

          <Typography variant="h6" className='header'>
            AI FOR SOFTWARE STABILITY
          </Typography>
          
        </Toolbar>
      </AppBar>
    </Box>
  );
}






