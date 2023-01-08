import { Box, Grid,Typography } from '@mui/material'
import React,{useEffect} from 'react'
import Aos from 'aos';
import 'aos/dist/aos.css';
import {Link} from 'react-router-dom'
import '../product/products.css'
import pdf from '../product/XIVA White paper - -3.pdf'
const Product = () => {
    useEffect(()=>{
        Aos.init({duration:2000});
    },[]);
return (
    
    <Grid id='product-main'>
        <Grid item md={12} sm={12}>
            <Typography id='product-h1' style={{fontFamily:"lato"}}>our </Typography>
            <Typography  id='product-h2'style={{fontFamily:"lato"}}>products</Typography>
            <Typography  id='product-h2-line'></Typography><br/>
        </Grid>
        <Grid id='product-main2'>
            <Grid item md={10} sm={12} id='products-list'>
                    <Grid id="produtcs">
                        <Typography id="products-numb"  data-aos='fade-right' style={{fontFamily:"lato"}}>01</Typography>
                        <Typography id="productsname"  data-aos='fade-right' style={{fontFamily:"lato"}}>XIVA</Typography>
                    </Grid>
                    <Typography id='product-para'  data-aos='fade-right' style={{fontFamily:"lato"}}>
                        ISSM brings to the market, XIVA! The Omni Channel is composed of a complex microservices architecture, where each node of its architecture is a machine learning node. <br/>XIVA Comes with
                        <ul>
                            <li>AI first CRM</li>
                            <li>The Omni Stratum</li>
                            <li>The Conversation AI Assistant</li>
                            <li>Odyssey - The Data Analytics of the future</li>
                        </ul>  
                        Our state of the art Conversational AI assistant, not only responds to your consumers, but also understands customer behaviours to detect data patterns and highlight these in its data visualisation module for complete end to end visibility of your Customer journey Cycle. 
                        <br />
                        <br />
                        Regardless of the incoming platform, XIVA- The Omni Stratum ensures that each and every one of your consumers has a seamless experience regardless of the nature of the query and the emotions of the user. 
                        <br />
                        <br />
                        With our extensive Machine Learning modules, we challenge some of the biggest names in the industry by providing our clients with the highest benchmark for accuracy set at 96%. Watson and IBM product offers 80% accuracy whilst supporting only one language. 
                    </Typography>
                    
                </Grid>
                {/* <Grid md={2} sm={12}>
                    <img src={require('../product/XIVA.PNG')} id='productviewmore'/>
                    <a href={pdf} id='product-link' target='_blank'  data-aos='fade-right'>Click Here And Read The Document</a>
                </Grid> */}
            </Grid>
            <Box 
                sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    flexWrap: 'wrap',
                    justifyContent: 'center',
                    marginRight:"8%"
                }}
                data-aos='fade-right'
            >
                <Box id='product-box-content'>
                    <Typography style={{
                        fontWeight:'bold',
                        textAlign:'center   ',
                        marginTop:'45px',
                        fontFamily: 'lato',
                        fontSize:'20px',
                        textTransform:'uppercase'
                        }}>
                            XIVA - CONVERSATIONAL AI
                    </Typography>
                    <Typography style={{fontSize:'18px',paddingLeft:'20%',paddingRight:"20%", paddingTop:"10%", paddingBottom:"23%", fontFamily:"lato"}}>
                    The Conversational AI module of XIVA
                    is a Virtual Assistant that is capable of understanding, assisting, and charming your audiences. It works in multiple languages such as English, and Urdu. <br />
                    <br/>It can share documents, validate CNICs, take retail orders, conduct financial transactions and as well as assist your consumers with all their needs. 
                    </Typography>
                </Box>
                <Box id='product-box-content'>
                    <Typography style={{
                        fontWeight:'bold',
                        textAlign:'center',
                        marginTop:'45px',
                        fontFamily:"lato",
                        fontSize:'20px',
                        textTransform:'uppercase'
                        }}>
                            XIVA - THE CRM
                    </Typography>
                    <Typography style={{fontSize:'18px',paddingLeft:'20%',paddingRight:"20%", paddingTop:"10%", paddingBottom:"23%",fontFamily:"lato"}}>
                    An end-to-end Machine Learning based CRM module by ISSM redefines the standards of the industry.
                    <br />
                    <br />
                    An extensive in-built smart reporting and analytics module provides businesses the visibility to ensure maximum productivity and conversion rates based on existing consumer data summed with the real-time evaluation of all incoming data.
                    </Typography>
                </Box>
                <Box id='product-box-content'>
                    <Typography style={{
                        fontWeight:'bold',
                        textAlign:'center',
                        marginTop:'45px',
                        fontFamily: 'lato',
                        fontSize:'20px',
                        textTransform:'uppercase'
                        }}>
                            XIVA - THE BUILDER
                    </Typography>
                    <Typography style={{fontSize:'18px',fontFamily: 'lato',paddingLeft:'20%',paddingRight:"20%", paddingTop:"10%", paddingBottom:"10%"}}>
                    The Bot Builder is a great ad on to the Conversational AI module. It assists businesses in defining and building new real-time changes to their existing conversational AI via the front end. To ensure accurate information is readily available to its consumers.
<br /><br />
The builder comes with an intuitive UI/UX design, that keeps in mind the end-users experience, ease, and comfort, along with efficiency and ease of use.
                    </Typography>
                </Box>

            </Box>

    <Grid id='second-main'>
    <Grid item md={10} sm={12} id='products-list'>
        <Grid id="produtcs2">
            <Typography id="products-numbers2" style={{fontFamily:"lato"}}>02</Typography>
        <Link to='/iverify' id="products-name2" style={{fontFamily:"lato"}}>i-verify</Link>
        </Grid>
        <Grid id="produtcs2">
            <Typography id="products-numbers2" style={{fontFamily:"lato"}}>03</Typography>
            <Link to='/odin'  id="products-name2" style={{fontFamily:"lato"}}>ODIN</Link>
        </Grid>
        <Grid id="produtcs2">
            <Typography id="products-numbers2" style={{fontFamily:"lato"}}>04</Typography>
            <Link to='/digital' id="products-name2" style={{fontFamily:"lato"}}>Digital eye</Link>
        </Grid>
    </Grid>

</Grid>
    
    </Grid>
)
}

export default Product;