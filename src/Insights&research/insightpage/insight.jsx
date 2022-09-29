import React from 'react'
import { Grid, Typography } from '@mui/material'
import '../insightpage/insight.css'
import { Items } from './insightItems'
const Insight = () => {
return (
    <>
    <Grid id='insight-main'>
        <Grid item md={12} sm={12}>
            <Typography id='insight-h1'>insights &</Typography>
            <Typography  id='insight-h2'>research</Typography>
            <Typography  id='insight-h2-line'></Typography><br/>
        </Grid>
        <Grid id='insight-main2'>
        {Items.map((user) => {return(
                <Grid>
                <Grid item md={6} sm={12} id='insight-box'
                style={{ backgroundImage:`url(${user.image})`,backgroundRepeat:"no-repeat",backgroundSize:"cover" }}
                >
                    <Grid>
                    <Typography  id='insight-box-nm'>{user.id}</Typography>
                    </Grid>
                </Grid>
                <Grid id='insight-content-main'>
                    <Typography id='box-h-1'>{user.title}</Typography>
                    <Typography  id='box-h-2'>{user.para}
                    <a href={user.link} id='box-h-2' target='_blank'>
                        Read More
                    </a>
                    </Typography>
                    <Typography  id='box-h-3'>{user.cetagory}</Typography>
                    <Typography  id='box-h-4'>{user.skill}</Typography>
                </Grid>
            </Grid>
            )})}
    </Grid>
    </Grid>
    
    </>
)
}

export default Insight