import { Grid, Typography } from '@mui/material'
import React from 'react'
import '../blogSection/blog.css'
const Blog = () => {
return (
    <Grid>
        <Grid id='blog-main'>
            <Grid item md={12}>
                <Typography id='blog-h1' style={{fontFamily:"lato"}}>LATEST </Typography>
                <Typography id='blog-h2'style={{fontFamily:"lato"}}>Blogs </Typography>
                <Typography id='blog-h2-line'> </Typography>
            </Grid>
            <Grid  id='blog-content-main'>
            <Grid item md={8}>
                <Grid className='blog-box'></Grid>
                <Grid>
                    <Typography id='blog-box-nm' style={{fontFamily:"lato"}}>01</Typography>
                </Grid>
            </Grid>
            <Grid item md={4} id='blog-content'>
                <Typography id='blog-heading' style={{fontFamily:"lato"}}>ISSM brings to the market, XIVA! The Omni Channel microservices architecture. </Typography>
                <Typography id='blog-para' style={{fontFamily:"lato"}}>Our collaborations with latest outdoors gear for their website.</Typography>
                <Typography id='blog-date' style={{fontFamily:"lato"}}>JUNE 12, 2022</Typography>
            </Grid>
        </Grid>
        </Grid>
        <button
        style={{
            borderRadius: '38px',
            color: 'black',
            borderColor:'white',
            fontFamily:'lato',
            cursor:'pointer'
            }}
        id='blog-btn' >
            More Stories
        </button>
    </Grid>
    )
}

export default Blog