import { Grid, Typography } from '@mui/material'
import React from 'react'
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
                <Typography id='hero-paragraph'>ISSM AI is a company founded with the goal to have every node in our infrastructure as a machine learning model.</Typography>
                <Typography id='hero-circle'>
                <Typography style={{marginLeft:'30px',fontSize:'14px',marginTop:'50px'}}>Let's work</Typography>
                </Typography>
                <Typography id='hero-issm'>issm.ai</Typography>
            </Grid>
        </Grid>
    </>
)
}

export default Hero