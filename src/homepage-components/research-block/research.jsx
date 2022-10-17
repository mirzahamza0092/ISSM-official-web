import { Grid, Typography } from '@mui/material'
import React,{useEffect} from 'react'
import Aos from 'aos';
import 'aos/dist/aos.css';
import '../research-block/research.css'
import { Items } from './researchItems'
import {Link} from 'react-router-dom';
const Research = () => {
  useEffect(()=>{
    Aos.init({duration:2000});
},[]);
  return (
    <>
    <Grid id='research-main'>
        <Grid item md={12} sm={12}>
          <Typography id='rea-heading1' data-aos='fade-right'>insights OR</Typography>
          <Typography  id='rea-heading2' data-aos='fade-right'>Our research</Typography>
          <Typography  id='rea-heading2-line'></Typography><br/>
        </Grid>
        <Grid id='main'>
          {Items.map((user) => {return(
              <Grid>
                  <Grid item md={6} sm={12} id='research-box'
                  style={{ backgroundImage:`url(${user.image})`,backgroundRepeat:"no-repeat",backgroundSize:"cover" }}
                  >
                  <Grid>
                      <Typography  id='rea-box-nm'>{user.id}</Typography>
                    </Grid>
                </Grid>
                <Grid id='content-main'>
                  <Typography id='box-h-1'>{user.title}</Typography>
                  <Typography  id='box-h-2'>{user.para}
                  <a href={user.link} id='box-h-2' target='_blank'>
                  Read More
                  </a>
                  </Typography>
                  <Typography  id='box-h-3' textTransform='uppercase'>{user.cetagory}</Typography>
                  <Typography  id='box-h-4' textTransform='uppercase'>{user.skill}</Typography>
                </Grid>
              </Grid>
            )})}
      </Grid>
      <Link to='/insight'>
        <button style={{
            
            width: '135px',
            fontSize: '15px',
            height:' 59px',
            borderRadius: '38px',
            backgroundColor: 'transparent',
            color: 'white',
            borderColor:'white',
            fontFamily:'Calibri',
            marginBottom:'75px',
            cursor:'pointer'
          }} id='research-btn'>
          VIEW MORE
          </button>
        </Link>
    </Grid>
    
    </>
  )
}

export default Research