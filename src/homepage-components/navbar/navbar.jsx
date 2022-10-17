import { AppBar, Button, Grid, Toolbar, Typography } from '@mui/material'
import React from 'react'
import Mainsidebar from '../sidebarmenu/main-sidebar';
import '../navbar/navbar.css'
const Navbar = () => {
return (
<>
<Grid>
    <AppBar   id="Nav-main">
        <Toolbar className='navbar-icons'>
            <Mainsidebar/>
        </Toolbar>
    </AppBar>
</Grid>
</>
)
}

export default Navbar