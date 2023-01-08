import { Grid, Typography } from '@mui/material'
import React from 'react'
import {Link} from 'react-router-dom';

import '../heroSection/hero.css'
const Hero = () => {
return (
    <>
        <Grid id='hero-main' item md={12} sm={12}>
            <Grid>
                <img src={require('../heroSection/ISSM Logo White.png')} className='hero-logo'/>
            </Grid>
            <Grid >
                <Typography id='hero-heading' style={{fontFamily:"lato"}}>Teaching</Typography>
                <Typography id='hero-heading2' style={{fontFamily:"lato"}}>Machines</Typography>
                <Typography id='hero-line'></Typography>
                <Typography id='hero-heading3'style={{fontFamily:"lato"}}>To learn</Typography>
                <Typography id='hero-paragraph' style={{fontFamily:"lato"}}>ISSM AI  Helps Enterprises to Build Customized Machine Learning Models Through Their Own Data That Are Optimized For Their Requirements. 
                </Typography>
                <Typography id='hero-circle'>
                    <Link to='/product'><Typography className='circle-heading'>Let's work</Typography></Link>
                </Typography>
                <Typography id='hero-issm' style={{fontFamily:"lato"}}>issm.ai</Typography>
            </Grid>
        </Grid>
    </>
)
}

export default Hero