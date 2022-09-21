import { Grid,Typography } from '@mui/material'
import React from 'react'
import {Link} from 'react-router-dom';
import '../../product/products.css'
import pdf from '../i-verify-product/iVerify - Whitepaper.pdf'
const Iverify = () => {
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
                        <Typography id="products-numb">02</Typography>
                        <Typography id="productsname">i-verify</Typography>
                    </Grid>
                    <Typography id='product-para'>User Authentication tool that offers fraud detection
                    on behavioural patterns <br/>
                        <br/>User authentication platforms include contactless biometric, facial
                        authentication, document verification, and voice biometrics. All of these
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
                <Grid md={2} sm={12}>
                <img src={require('../odin-product/odin.PNG')} id='product-viewmore2'/>
                    <a href={pdf} className='product-link'>Click Here And Read The Document</a>
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
            <Typography id="products-numbers2">03</Typography>
            <Link to='/odin'  id="products-name2">odin</Link>
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

export default Iverify;