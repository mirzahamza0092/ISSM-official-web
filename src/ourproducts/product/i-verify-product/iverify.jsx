import { Box, Grid,Typography } from '@mui/material'
import React,{useEffect} from 'react'
import Aos from 'aos';
import 'aos/dist/aos.css';
import {Link} from 'react-router-dom';
import '../../product/products.css'
import pdf from '../i-verify-product/iVerify - Whitepaper.pdf'
const Iverify = () => {
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
                        <Typography id="products-numb" data-aos='fade-right' style={{fontFamily:"lato"}}>02</Typography>
                        <Typography id="productsname" data-aos='fade-right' style={{fontFamily:"lato"}}>i-verify</Typography>
                    </Grid>
                    <Typography id='product-para' data-aos='fade-right' style={{fontFamily:"lato"}}>User Authentication tool that offers fraud detection
                    on behavioural patterns <br/>
                        <br/>User authentication platforms include contactless biometric, facial
                        authentication, document verification. All of these
                        platforms although available in the marketplace but fail to provide a suite that
                        connects these individual components together and provides usage statistics
                        for fraud prevention. I-Verify enables organizations to build their own custombuilt authentication pipelines with behavioral anomalies detection to ensure a
                        secure user authentication system.
                        <br/>
                        
                        <br/> <b>How Does I-Verify Work??</b><br/>

                        I-Verify enables organisations to deploy different user authentication tools across their applications. I-verify
                        provides users simple to use workflows to manage security and tracks user behaviour to find anomalies and alert
                        any suspicious activities.<br/>
                        
                        <br/> <b>Workflows for Authentication
                        plug-in
                        </b><br/>
                        
                        Ability to deploy verification tools
                        across channels with a simple
                        plug-in
                        <br/>
                        
                        <br/><b>Behvaviourial Anlaysis</b><br/>
                        Fraud techniques in each
                        organisation is different and
                        hence behaviour analysis with
                        anomaly detection enables an
                        additional layer of security.

                        
                        <br/><b>User Authentication Tools</b><br/>
                        
                        Contactless Biometric
                        Facial Authentication
                        Document Verification
                        Voice Biometric
                        </Typography>
                    
                </Grid>
                {/* <Grid md={2} sm={12}>
                <img src={require('../odin-product/odin.PNG')} id='productviewmore'/>
                    <a href={pdf} id='product-link' target='_blank' style={{fontFamily:"lato"}}>Click Here And Read The Document</a>
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
                        textAlign:'center',
                        marginTop:'45px',
                        fontFamily: 'lato',
                        fontSize:'20px',
                        textTransform:'uppercase'
                        }}>
                            Liveness Detection
                    </Typography>
                    <Typography style={{fontSize:'18px',fontFamily: 'lato',paddingLeft:'20%',paddingRight:"20%", paddingTop:"10%", paddingBottom:"86%"}}>
                        Video information captures facial data with unique
                        markers which are used by machine learning models
                        for liveness detection
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
                            Facial Recognition
                    </Typography>
                    <Typography style={{fontSize:'18px',fontFamily: 'lato',paddingLeft:'20%',paddingRight:"20%", paddingTop:"10%", paddingBottom:"78%"}}>
                        CNIC image or live authentication used to
                        verify facial features from NADRA database.
                        This adds an additional layer of security in
                        case a fraud is detected.
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
                            Document Verification
                    </Typography>
                    <Typography style={{fontSize:'18px',fontFamily: 'lato',paddingLeft:'20%',paddingRight:"20%", paddingTop:"10%", paddingBottom:"10%"}}>
                        Document verification involves automatic data
                        extraction and context generation from documents
                        which can be used for document verification and
                        relevant information extraction. It uses computer
                        vision algorithms that intelligently identify which part
                        of the document contains the text for data extraction.
                        NLP and NLU algorithms are further used for text
                        summarization and data retrieval.
                    </Typography>
                </Box>

            </Box>

    <Grid id='second-main'>
    <Grid item md={10} sm={12} id='products-list'>
        <Grid id="produtcs2">
            <Typography id="products-numbers2" style={{fontFamily:"lato"}}>01</Typography>
            <Link to='/product'  id="products-name2" style={{fontFamily:"lato"}}>XIVA</Link>
        </Grid>
        <Grid id="produtcs2">
            <Typography id="products-numbers2" style={{fontFamily:"lato"}}>03</Typography>
            <Link to='/odin'  id="products-name2" style={{fontFamily:"lato"}}>odin</Link>
        </Grid>
        <Grid id="produtcs2">
            <Typography id="products-numbers2" style={{fontFamily:"lato"}}>04</Typography>
            <Link to='/digital' id="products-name2" style={{fontFamily:"lato"}}>digital eye</Link>
        </Grid>
        
    </Grid>


</Grid>
    
    </Grid>
)
}

export default Iverify;