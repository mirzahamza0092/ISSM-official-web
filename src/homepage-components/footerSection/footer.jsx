import { Grid, Typography } from '@mui/material'
import React from 'react'
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import InstagramIcon from '@mui/icons-material/Instagram';
import Divider from '@mui/material/Divider';
import '../footerSection/footer.css'
const Footer = () => {
return (
<Grid id='footer-main'>
            <Grid item md={12} sm={12}>
                    <Typography id='footer-heading1'>Machine Learning Lab Working on Deep Tech to Democratize AI For The Masses. </Typography>
            </Grid>
            <Grid id='footer-contents'>
                <Grid item md={3} sm={12}>
                    <img src={require('../footerSection/footerlogo.PNG')} className='footer-logo'/>
                </Grid>
                <Grid item md={3} sm={12}>
                    <Typography id='footer-para'>ISSM AI is a company founded with the goal to have every node in our infrastructure as a machine learning model. We are considered to be experts in various Machine Learning-based technologies, for example, Conversational AI-powered Chatbots, NLP-based Sentiment Analysis dashboards, Computer Vision powered authentication tools along with our Data Visualization efforts. All of our products come in modular forms and can be used exclusively or with our state-of-the-art Omni Channel platform that brings a complete management solution to your industry.</Typography>
                </Grid>
                <Grid item md={3} sm={12}>
                    <Grid id='footer-aboutUs'>
                        <Typography fontWeight={'bold'}>VISIT US</Typography>
                        <Typography id='footer-address'>SNC Centre, 4th Floor, AK Fazal-ul-Haq Rd, Block D, Blue Area, Islamabad, ICT، Islamabad
                        <br/>+92 309 8888014
                        admin@issm.ai</Typography>
                        <Typography fontWeight={'bold'}>OPENING HOURS</Typography>
                        <Typography  id='footer-open'>Monday - Friday:<br/>
                        09:00AM - 06:00PM</Typography>
                    </Grid>
                    <Grid id='footer-contact'>
                        <Typography fontWeight={'bold'} textTransform='uppercase'>JOin the journey</Typography>
                        <Typography id='footer-para2'>Get updates on new developments in the stratosphere of Machine Learning and AI.</Typography>
                        <Typography fontWeight={'bold'} marginTop='47px'>CONTACT US</Typography>
                        <Grid style={{display:'flex'}}>
                            <Typography><FacebookOutlinedIcon/></Typography>
                            <Typography><TwitterIcon/></Typography>
                            <Typography ><YouTubeIcon/></Typography>
                            <Typography><InstagramIcon/></Typography>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
            <Divider variant="middle" style={{marginTop:'40px'}} />
            <Typography style={{textAlign:'center',marginTop:'10px',fontFamily:'Calibri',fontWeight:'bold'}}>ISSM.ai®  All Rights Reserved</Typography>
</Grid>

)
}

export default Footer