import { Grid,Typography } from '@mui/material'
import React,{useEffect} from 'react'
import Aos from 'aos';
import 'aos/dist/aos.css';
import {Link} from 'react-router-dom';
import '../../product/products.css'
import pdf from '../odin-product/Odin Whitepaper (revised)-2.pdf'
const OdinProduct = () => {
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
        <Grid  id='product-main2'>
            <Grid item md={10} sm={12} id='products-list'>
                    <Grid id="produtcs">
                        <Typography id="products-numb">03</Typography>
                        <Typography id="productsname">odin</Typography>
                    </Grid>
                    <Typography id='product-para'>Data Orchestration tool to enable organizations to seamlessly integrate their data and deploy ML models. <br/>
                        <br/>80% of engineering hours of data science and ML engineers is wasted in managing and integrating data piplines. Odin enables teams to ingestand manage their 
                        meta-data automatically so they can focus on building valuable insights. <br/>
                        
                        <br/> <b>How Does Odin Work?</b><br/>
                        Odin was built to save countless hours of engineering teams by making meta-data, integrations, pipelines and data health management into a few clicks Additionally, Odin helps businesses build business semantics to form organisational ontologies and digital twins where they can run simulation of different scenarios.<br/>
                        
                        <br/> <b>Data Integration and Orchestration</b><br/>
                        
                        Simple to CUT where users can data from different sources and in different format one wing destination.<br/>
                        <br/><b>Workflows and ML integrations</b><br/>
                        Businesses can visualise their data, re-organise and filter it to build different workflows and use cases Additionally, they can also filter data to run M. models to generate value
                        
                        <br/><b>Digital Twin and Ontology</b><br/>
                        
                        Businesses can build ontologies and digital twin of their operations to run simulations of different scenarios by simultaneously running all ML models across business segments.
                        
                        Copyright 2122 Labeling Solution</Typography>
                    
                </Grid>
                <Grid md={2} sm={12}>
                <img src={require('../odin-product/odin.PNG')} id='productviewmore'/>
                    <a href={pdf} id='product-link' target='_blank'>Click Here And Read The Document</a>
                </Grid>
            </Grid>
    <Grid id='product-main-box-content'>
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
            <Typography style={{textAlign:'center',fontSize:'16px',fontFamily: 'Calibri',paddingTop:'20px'}}>This is the main pipeline for tracking the flow of data, starting from the source, following the nodes the data accesses, all the way to the final database where the data is stored after undergoing all transformations.

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
            <Link to='/iverify' id="products-name2">I-verify</Link>
        </Grid>
        <Grid id="produtcs2">
            <Typography id="products-numbers2">04</Typography>
            <Link to='/digital' id="products-name2">digital eye</Link>
        </Grid>
        
    </Grid>

    <Grid md={2} sm={12}>
    <Typography id='product-viewmore2'> </Typography>
    </Grid>

</Grid>
    
    </Grid>
)
}

export default OdinProduct;