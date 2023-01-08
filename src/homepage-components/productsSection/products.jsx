import React,{useEffect} from 'react'
import Aos from 'aos';
import 'aos/dist/aos.css';
import { Grid, Typography } from '@mui/material'
import {Link} from 'react-router-dom';
import '../productsSection/products.css'
const Products = () => {
    useEffect(()=>{
        Aos.init({duration:3000});
    },[]);
return (
    <>
        <Grid id='products-main'>
            <Grid item md={12}>
                <Typography id='product-h1' data-aos='fade-right' style={{fontFamily:"lato"}}>Our</Typography>
                <Typography id='product-h2' data-aos='fade-right' style={{fontFamily:"lato"}}>products</Typography>
                <Typography id='products-h2-line' ></Typography>
            </Grid>
        <Grid id='second-main-homeProduct'>
            <Grid item md={10} sm={12} id='products-list'>
                <Grid id="produtcs-1">
                    <Link to='/product' id="products-numbers" style={{fontFamily:"lato"}}>01</Link>
                    <Link to='/product'  id="products-name" style={{fontFamily:"lato"}}>XIVA</Link>
                </Grid>
                <Grid id="produtcs-1">
                    <Link  id="products-numbers" style={{fontFamily:"lato"}}>02</Link>
                    <Link to='/iverify' id="products-name" style={{fontFamily:"lato"}}>I-verify</Link>
                </Grid>
                <Grid id="produtcs-1">
                    <Link id="products-numbers" style={{fontFamily:"lato"}}>03</Link>
                    <Link to='/odin'  id="products-name" style={{fontFamily:"lato"}}>ODIN</Link>
                </Grid>
                <Grid id="produtcs-1">
                <Link id="products-numbers" style={{fontFamily:"lato"}}>04</Link>
                <Link to='/digital'  id="products-name" style={{fontFamily:"lato"}}>digital eye</Link>
                </Grid>
            </Grid>
        </Grid>
        </Grid>
    </>
)
}

export default Products