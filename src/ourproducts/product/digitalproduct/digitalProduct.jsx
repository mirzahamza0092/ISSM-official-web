import { Grid,Typography } from '@mui/material'
import React,{useEffect} from 'react'
import Aos from 'aos';
import 'aos/dist/aos.css';
import {Link} from 'react-router-dom';
import '../../product/products.css'
import pdf from '../digitalproduct/Digital Eye - Whitepaper-3.pdf'
const DigitalProduct = () => {
    useEffect(()=>{
        Aos.init({duration:2000});
    },[]);
return (
    
    <Grid id='product-main'>
        <Grid item md={12} sm={12}>
            <Typography id='product-h1'>our </Typography>
            <Typography  id='product-h2'>products</Typography>
            <Typography  id='product-h2-line'></Typography><br/>
        </Grid>
        <Grid style={{display:'flex'}}>
            <Grid item md={10} sm={12} id='products-list'>
                    <Grid id="produtcs">
                        <Typography id="products-numb" data-aos='fade-right'>04</Typography>
                        <Typography id="productsname" data-aos='fade-left'>Digital Eye</Typography>
                    </Grid>
                    <Typography id='product-para' data-aos='fade-left'><b>AI-Powered Monitoring and Analytics to Manage
                    Risk and Drive Operational Excellence</b><br/>
                        <br/>There are billions of camera systems currently deployed worldwide, including
                        drones, home surveillance systems, and CCTV cameras, to say nothing of mobile
                        phones. Many are used as passive surveillance systems for collecting and storing
                        visual data, requiring active human interaction to make use of their value.
                        But what if you could transform your underutilized video feeds with a dynamic,
                        proactive visual AI platform—using computer vision technology to identify and
                        classify objects and determine the next best actions based on what your cameras
                        “see?”
                        Now you can, with ISSM Digital Eye. Tap into your existing camera infrastructure
                        to generate actionable analytics and alerts that unlock new value for your
                        organization through visual AI advantages.
                        
                        </Typography>
                    
                </Grid>
                <Grid md={2} sm={12}>
                <img src={require('../digitalproduct/digital.PNG')} id='product-viewmore2'/>
                    <a href={pdf} className='product-link' target='_blank'>Click Here And Read The Document</a>
                </Grid>
            </Grid>
    <Grid  style={{display:'flex'}}>
        <Grid item md={4}>
            <Grid id='product-box-content'>
            <Typography style={{
                fontWeight:'bold',
                textAlign:'center',
                marginTop:'45px',
                fontFamily: 'Calibri',
                fontSize:'20px',
                textTransform:'uppercase'
            }}>
            Data Lineage
            </Typography>
            <Typography style={{textAlign:'center',fontSize:'16px',fontFamily: 'Calibri',paddingTop:'20px'}}>
            This is the main pipeline for tracking the flow of data, starting from the source, following the nodes the data accesses, all the way to the final database where the data is stored after undergoing all transformations.
            </Typography>
            </Grid>
        </Grid>
        <Grid item md={4}>
            <Grid id='product-box-content'>
            <Typography style={{
                fontWeight:'bold',
                textAlign:'center',
                marginTop:'45px',
                fontFamily: 'Calibri',
                fontSize:'20px',
                textTransform:'uppercase'
            }}>Data Integration
            </Typography>
            <Typography style={{textAlign:'center',fontSize:'16px',fontFamily: 'Calibri',paddingTop:'20px'}}>This is the secondary data ingestion layer to which additional APIs expose their data. The data extracted is then processed for basic transformation before being forwarded to other modules.
            </Typography>
            </Grid>
        </Grid>
        <Grid item md={4}>
            <Grid id='product-box-content'>
            <Typography style={{
            fontWeight:'bold',
            textAlign:'center',
            marginTop:'45px',
            fontFamily: 'Calibri',
            fontSize:'20px',
            textTransform:'uppercase'

        }}>
        Metadata Management
            </Typography>
            <Typography style={{textAlign:'center',fontSize:'16px',fontFamily: 'Calibri',paddingTop:'20px'}}>The administration of data that describes other data. It involves establishing policies and processes that ensure information can be integrated, accessed, shared, linked, analyzed and maintained effectively across the organization.
            </Typography>
            </Grid>
        </Grid>
    </Grid>


    <Grid id='second-main'>
    <Grid item md={10} sm={12} id='products-list'>
        <Grid id="produtcs2">
            <Typography id="products-numbers2">01</Typography>
            <Link to='/product'  id="products-name2">XIVA</Link>
        </Grid>
        <Grid id="produtcs2">
            <Typography id="products-numbers2">02</Typography>
            <Link to='/iverify'  id="products-name2">I-verify</Link>
        </Grid>
        <Grid id="produtcs2">
            <Typography id="products-numbers2">03</Typography>
            <Link to='/odin' id="products-name2">odin</Link>
        </Grid>
        
    </Grid>

    <Grid md={2} sm={12}>
        <Typography id='product-viewmore2'> </Typography>
    </Grid>

    </Grid>
</Grid>
)
}

export default DigitalProduct;