import { Grid, Typography } from '@mui/material'
import React from 'react'
import '../blogSection/blog.css'
const Blog = () => {
return (
    <Grid>
        <Grid id='blog-main'>
            <Grid item md={12}>
                <Typography id='blog-h1'>LATEST </Typography>
                <Typography id='blog-h2'>Blogs </Typography>
                <Typography id='blog-h2-line'> </Typography>
            </Grid>
            <Grid  id='blog-content-main'>
            <Grid item md={8}>
                <Grid className='blog-box'></Grid>
                <Grid>
                    <Typography id='blog-box-nm'>01</Typography>
                </Grid>
            </Grid>
            <Grid item md={4} id='blog-content'>
                <Typography id='blog-heading'>ISSM brings to the market, XIVA! The Omni Channel microservices architecture. </Typography>
                <Typography id='blog-para'>Our collaborations with latest outdoors gear for their website.</Typography>
                <Typography id='blog-date'>JUNE 12, 2022</Typography>
            </Grid>
        </Grid>
        </Grid>
        <button style={{
            marginTop: '-200px',
            marginLeft: '110px',
            width: '135px',
            fontSize: '15px',
            height:' 59px',
            borderRadius: '38px',
            backgroundColor: 'white',
            borderColor:'white',
            fontFamily:'Calibri',
            marginBottom:'75px',
            fontWeight:'bold'
            }}>
            More Stories
        </button>
    </Grid>
    )
}

export default Blog