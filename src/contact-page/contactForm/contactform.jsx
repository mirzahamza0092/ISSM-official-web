import { Grid, Typography } from '@mui/material'
import React from 'react'
import '../contactForm/contactform.css'
const ContactForm = () => {
return (
    <Grid id="contact-main">
        <Grid item md={12}>
            <Typography id='contact-content'>WE BUILD IMMERSIVE <br/>
            tech &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp;  &nbsp; &nbsp;  for<br/>
            YOUR INNOVATIVE BRANDS</Typography>
        </Grid>
        <Typography id='contact-mid-text'>solution</Typography>
        <Typography id='contact-solution-line'></Typography>
        <Grid>
        <form>
            <label>
                Name : 
                <br/><input type="text" name="name" className='form-text-lable'/>
            </label><br/>
            <label>
                Email :
                <br/><input type="text" name="name" className='form-text-lable'/>
            </label><br/>
            <label>
                Message :
                <br/><input type="text" name="name" className='form-Message-lable'/>
            </label>
            <button style={{
                marginTop: '35px',
                marginLeft: '160px',
                width: '135px',
                fontSize: '15px',
                height:' 59px',
                borderRadius: '38px',
                backgroundColor: 'white',
                borderColor:'white'
                }}>Submit</button>
        </form>
        </Grid>
</Grid>
)
}

export default ContactForm