import { Grid, Typography } from '@mui/material'
import React,{useState} from 'react'
import '../contactForm/contactform.css'
const ContactForm = () => {
    const [name,setName]=useState();
    const [email,setEmail]=useState();
    const [message,setMessage]=useState();
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
            <form action="https://formsubmit.co/5f4681c76e8fd2fb254b9c1651397a39" method="POST">
                <label>
                    Name : 
                    <br/>
                    <input type="text" name="name" className='form-text-lable' value={name}
                    onChange={(event)=>setName(event.target.value)}
                    placeholder='Enter Your Name'
                    required
                    />
                </label>
                    <br/>
                        <label>
                            Email :
                            <br/>
                            <input type="email" name="email" className='form-text-lable' value={email}
                            onChange={(event)=>setEmail(event.target.value)}
                            placeholder='example@issm.ai.com'
                            required />
                        </label><br/>
                <label>
                    Message :
                    <br/>
                    <textarea name="message" className='form-Message-lable'
                    value={message}
                    onChange={(event)=>setMessage(event.target.value)}
                    required
                    placeholder='Enter something '
                    />
                </label>
                    <input type="hidden" name="_captcha" value="false"/>
                    <input type="hidden" name="_next" value='https://issm.ai/'/>         
                <button style={{
                        width: '135px',
                        fontSize: '15px',
                        height:' 59px',
                        borderRadius: '38px',
                        backgroundColor: 'white',
                        borderColor:'white',
                        marginBottom:'200px'
                    }}
                    type='submit'
                    id='contact-btn'>Submit
                    </button>
            </form>
            
        </Grid>
</Grid>
)
}

export default ContactForm