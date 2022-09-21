import React from 'react'
import { Grid, Typography,Divider } from '@mui/material'
import {Link} from 'react-router-dom';

import './about.css'
const About = () => {
return (
    <>
    <Grid>
        <Grid id='about-main'>
            <Typography id='about-content'>WE BUILD IMMERSIVE <br/>
            tech &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp;  &nbsp; &nbsp;  for<br/>
            YOUR INNOVATIVE BRANDS</Typography>
            <Typography id='about-mid-text'>solution</Typography>
            <Typography id='about-solution-line'></Typography>
            <Link to='/contact'>
                <button style={{
                marginTop: '500px',
                marginLeft: '201px',
                width: '135px',
                fontSize: '15px',
                height:' 59px',
                borderRadius: '38px',
                backgroundColor: 'transparent',
                color: 'white',
                borderColor:'white',
                fontFamily:'Calibri',
                cursor:'pointer'
                }}>Contact Us
                </button>
            </Link>
        </Grid>
    </Grid>

    </>
)
}

export default About