import { Grid, Typography } from '@mui/material'
import React from 'react'
import '../research-block/research.css'
import { Items } from './researchItems'
import {Link} from 'react-router-dom';

const Research = () => {
  return (
    <>
    <Grid id='research-main'>
        <Grid item md={12} sm={12}>
          <Typography id='rea-h1'>insights &</Typography>
          <Typography  id='rea-h2'>research</Typography>
          <Typography  id='rea-h2-line'></Typography><br/>
        </Grid>
        <Grid id='main'>
          {Items.map((user) => {return(
              <Grid>
                  <Grid item md={6} sm={12} id='research-box'>
                    <Grid>
                      <Typography  id='rea-box-nm'>{user.id}</Typography>
                    </Grid>
                </Grid>
                <Grid id='content-main'>
                  <Typography id='box-h-1'>{user.title}</Typography>
                  <Typography  id='box-h-2'>{user.para}</Typography>
                  <Typography  id='box-h-3'>{user.cetagory}</Typography>
                  <Typography  id='box-h-4'>{user.skill}</Typography>
                </Grid>
              </Grid>
            )})}
      </Grid>
      <Link to='/insight'>
        <button style={{
            marginTop: '64px',
            marginLeft: '125px',
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
          }}>
          VIEW MORE
          </button>
        </Link>
    </Grid>
    
    </>
  )
}

export default Research