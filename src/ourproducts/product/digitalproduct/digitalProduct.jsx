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
        <Grid id='product-main2'>
            <Grid item md={10} sm={12} id='products-list'>
                    <Grid id="produtcs">
                        <Typography id="products-numb">04</Typography>
                        <Typography id="productsname">Digital Eye</Typography>
                    </Grid>
                    <Typography id='product-para'><b>AI-Powered Monitoring and Analytics to Manage
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
                <img src={require('../digitalproduct/digital.PNG')} id='productviewmore'/>
                    <a href={pdf} id='product-link' target='_blank'>Click Here And Read The Document</a>
                </Grid>
            </Grid>
    <Grid  id='product-main-box-content'>
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
            FACIAL ATTENDANCE
            </Typography>
            <Typography style={{fontSize:'16px',fontFamily: 'Calibri',padding:'20px'}}>
            Traditional attendance systems mainly operate on
                fingerprint biometrics and involve manual personnel
                verification. As humans can be prone to error i.e they can
                forget to mark their attendance on time due to hastiness or
                other factors, we introduce a system that removes the
                human in the loop and marks attendance based on facial
                recognition. It works through a combination of AI algorithms
                including facial detection, face landmarks detection and
                facial features comparison.

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
            }}>PRIORITY CUSTOMER DETECTION
            </Typography>
            <Typography style={{fontSize:'16px',fontFamily: 'Calibri',padding:'20px'}}>Being a customer-centric institution helps to outgrow other
                businesses in the competition. Providing custom
                experiences to priority customers can lead to a better
                customer experience. Our solution identifies customers as
                soon as they enter the infrastructure premises through the
                use of facial recognition and notifies relevant personnel on
                the premises.

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
        PEOPLE TRAFFIC MONITORING 
            </Typography>
            <Typography style={{fontSize:'16px',fontFamily: 'Calibri',padding:'20px'}}>Measuring the number of people visiting a branch on a daily
                basis can lead to a better analysis of the brand footprint in a
                particular geographic area in addition to the number of
                accounts or sales being maintained in a particular branch.
                We propose a branch traffic monitoring solution that
                measures the footfall of people on specific building
                premises in order to quantify the value proposition of a
                branch location. This application can also be used for
                identifying anomalies such as the identification of days
                when the customer footfall is low.

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