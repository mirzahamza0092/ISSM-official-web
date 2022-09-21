import { AppBar, Button, Grid, Toolbar, Typography } from '@mui/material'
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import InstagramIcon from '@mui/icons-material/Instagram';
import React from 'react'
import Mainsidebar from '../sidebarmenu/main-sidebar';
import '../navbar/navbar.css'
const Navbar = () => {
return (
<>
<Grid>
    <AppBar   id="Nav-main">
        <Toolbar className='navbar-icons'>
            <Typography fontSize={14} marginRight={5} fontWeight='bold' letterSpacing={2}>
            CONNECT WITH US
            </Typography>
            <Typography marginRight={1} className='icon-cursor'><FacebookOutlinedIcon/></Typography>
            <Typography marginRight={1} className='icon-cursor'><TwitterIcon/></Typography>
            <Typography  marginRight={1} className='icon-cursor'><YouTubeIcon/></Typography>
            <Typography  marginRight={1} className='icon-cursor'><InstagramIcon/></Typography>
            <Mainsidebar/>
        </Toolbar>
    </AppBar>
</Grid>
</>
)
}

export default Navbar