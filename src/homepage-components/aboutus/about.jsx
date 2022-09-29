import React,{useEffect} from 'react'
import { Grid, Typography,Divider } from '@mui/material'
import Aos from 'aos';
import 'aos/dist/aos.css';
import {Link} from 'react-router-dom';
import './about.css'
const About = () => {
    useEffect(()=>{
        Aos.init({duration:2000});
    },[]);
return (
    <>
    <Grid>
        <Grid id='about-main'>
            <Typography id='about-content' data-aos='zoom-in-up'>WE BUILD IMMERSIVE <br/>
            tech &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp;  &nbsp; &nbsp;  for<br/>
            YOUR INNOVATIVE BRANDS</Typography>
            <Typography id='about-mid-text' data-aos='fade-down'>solution</Typography>
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