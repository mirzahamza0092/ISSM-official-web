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
                <Typography id='hero-heading'>Teaching</Typography>
                <Typography id='hero-heading2'>Machines</Typography>
                <Typography id='hero-line'></Typography>
                <Typography id='hero-heading3'>To learn</Typography>
                <Typography id='hero-paragraph'>ISSM.ai  Helps Enterprises to Build Customized Machine Learning Models Through Their Own Data That Are Optimized For Their Requirements. 
                </Typography>
                <Typography id='hero-circle'>
                <Link to='/contact'><Typography className='circle-heading' >Let's work</Typography></Link>
                </Typography>
                <Typography id='hero-issm'>issm.ai</Typography>
            </Grid>
        </Grid>
    </>
)
}

export default Hero