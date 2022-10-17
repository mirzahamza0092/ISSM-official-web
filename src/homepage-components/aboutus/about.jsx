import React,{useEffect} from 'react'
import { Grid, Typography,Divider } from '@mui/material'
import Aos from 'aos';
import 'aos/dist/aos.css';
import {Link} from 'react-router-dom';
import './about.css'
const About = () => {
    useEffect(()=>{
        Aos.init({duration:1000});
    },[]);
return (
    <>
    <Grid>
        <Grid id='about-main'>
            <Typography id='about-content' data-aos='zoom-in-up'>We Are Building  <br/>
            The infrastructure<br/>
            For Deep Learning 
            </Typography>
            <Link to='/contact'>
                <button style={{
                borderRadius: '38px',
                backgroundColor: 'transparent',
                color: 'white',
                borderColor:'white',
                fontFamily:'Calibri',
                cursor:'pointer'
                }} id='about-btn'>Contact Us
                </button>
            </Link>
        </Grid>
    </Grid>

    </>
)
}

export default About