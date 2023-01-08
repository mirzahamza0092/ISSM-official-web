import React from 'react'
import { Grid, Typography } from '@mui/material'
import '../insightpage/insight.css'
import { Items } from './insightItems'
const Insight = () => {
return (
    <>
    <Grid id='insight-main'>
        <Grid item md={12} sm={12}>
            <Typography id='insight-h1' style={{fontFamily:"lato"}}>insights &</Typography>
            <Typography  id='insight-h2'style={{fontFamily:"lato"}}>research</Typography>
            <Typography  id='insight-h2-line'></Typography><br/>
        </Grid>
        <Grid id='insight-main2'>
        {Items.map((user) => {return(
                <Grid>
                <Grid item md={6} sm={12} id='insight-box'
                style={{ backgroundImage:`url(${user.image})`,backgroundRepeat:"no-repeat",backgroundSize:"cover" }}
                >
                    <Grid>
                    <Typography  id='insight-box-nm' style={{fontFamily:"lato"}}>{user.id}</Typography>
                    </Grid>
                </Grid>
                <Grid id='insight-content-main'>
                    <Typography id='insight-box-h-1' textTransform='uppercase' style={{fontFamily:"lato"}}>{user.title}</Typography>
                    <Typography  id='insight-box-h-2' style={{fontFamily:"lato"}}>{user.para}
                    
                    </Typography>
                    <a href={user.link} id='insight-box-h-2' style={{fontFamily:"lato", textAlign:"left"}} target='_blank'>
                        Read More
                    </a>
                    <br />
                    <br />
                    <Typography  id='insight-box-h-3' textTransform='uppercase' style={{fontFamily:"lato"}}>{user.cetagory}</Typography>
                    <Typography  id='insight-box-h-4' textTransform='uppercase' style={{fontFamily:"lato"}}>{user.skill}</Typography>
                </Grid>
            </Grid>
            )})}
    </Grid>
    </Grid>
    
    </>
)
}

export default Insight