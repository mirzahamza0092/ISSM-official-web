import React from 'react'
import { Grid, Typography } from '@mui/material'
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import InstagramIcon from '@mui/icons-material/Instagram';
import '../../src/icons/icons.css'
const Icons = () => {
  return (
    <>
    <Grid id='icons-maincontainer'>
      <Grid className='main-icons'>
        <Typography fontSize={16} marginRight={4} fontWeight='bold' letterSpacing={2} className='connect'>
        CONNECT WITH US
        </Typography>
        <Typography marginRight={1}  className='icon-cursor'><FacebookOutlinedIcon/></Typography>
        <Typography marginRight={1} className='icon-cursor'><TwitterIcon/></Typography>
        <Typography  marginRight={1} className='icon-cursor'><YouTubeIcon/></Typography>
        <Typography  marginRight={1} className='icon-cursor'><InstagramIcon/></Typography>
      </Grid>
    </Grid>
</>
  )
}

export default Icons