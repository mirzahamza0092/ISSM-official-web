import { Grid,Typography } from '@mui/material'
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
            <Typography id='product-h1'>our </Typography>
            <Typography  id='product-h2'>products</Typography>
            <Typography  id='product-h2-line'></Typography><br/>
        </Grid>
        <Grid id='product-main2'>
            <Grid item md={10} sm={12} id='products-list'>
                    <Grid id="produtcs">
                        <Typography id="products-numb"  data-aos='fade-right'>01</Typography>
                        <Typography id="productsname"  data-aos='fade-right'>XIVA</Typography>
                    </Grid>
                    <Typography id='product-para'  data-aos='fade-right'>Currently, most conversational AI bots are broken, they provide
                    a ‘one-fit for all’ machine learning models that usually end up having low accuracy and usually miss out on conversational semantics which are unique to each organization. 
                    The purpose of Xiva was to address this fundamental problem, Xiva’s conversational AI is built to be customized according to the requirements of each organization by updating our pre-trained ML
                    models in accordance with conversational data from the past and the present.  
                    <br/>
                    XIVA lays the foundation for your organization to eventually automate all of its communication by learning in real-time from your human agents and replicating their responses. We like to think of XIVA, not as a chatbot, but simply as a bot. Which can scrape through your databases to fetch files, crawl through websites to generate answers it currently doesn't hold in its dialogue flow, it can do transactions or authentication of customers all by itself. Xiva’s sole purpose is to perform every function that a human agent does and improve it over time. Unlike other chatbot platforms, we offer a Bot-Builder Dashboard where our clients can build their own chatbot and dialogue flows according to themselves which the system later re-learns and improves on its own.
<br/>
                        </Typography>
                    
                </Grid>
                <Grid md={2} sm={12}>
                    <img src={require('../product/XIVA.PNG')} id='productviewmore'/>
                    <a href={pdf} id='product-link' target='_blank'  data-aos='fade-right'>Click Here And Read The Document</a>
                </Grid>
            </Grid>
                <Grid style={{display:'flex',marginTop:'20px'}}>
                    <img src={require('../product/XIVA3.PNG')} width='100%' height='100%'/>
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
                    Bot Builder
            </Typography>
            <Typography style={{fontSize:'16px',fontFamily: 'Calibri',padding:'20px'}}>Easy to build Conversational
            AI with:<br/>

            1:Zero bot detection rate<br/>
            2:Highest precision<br/>
            3:Multi-lingual
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

            }}>Omni Channel
            </Typography>

            <Typography style={{fontSize:'16px',fontFamily: 'Calibri',padding:'20px'}}>Integration and
            deployment of
            Conversational AI with
            social media and other
            channels
            Supervised learning
            .
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
                textTransform:'uppercase',

            }}>
            Unsupervised Learning
                </Typography>
                <Typography style={{fontSize:'16px',fontFamily: 'Calibri',padding:'20px'}}>Understanding the business
                semantics of each organisation
                and updating language models
                accordingly
                
                </Typography>
            </Grid>
        </Grid>
    </Grid>


    <Grid id='second-main'>
    <Grid item md={10} sm={12} id='products-list'>
        <Grid id="produtcs2">
            <Typography id="products-numbers2">02</Typography>
        <Link to='/iverify' id="products-name2">i-verify</Link>
        </Grid>
        <Grid id="produtcs2">
            <Typography id="products-numbers2">03</Typography>
            <Link to='/odin'  id="products-name2">ODIN</Link>
        </Grid>
        <Grid id="produtcs2">
            <Typography id="products-numbers2">04</Typography>
            <Link to='/digital' id="products-name2">Digital eye</Link>
        </Grid>
    </Grid>

    <Grid md={2} sm={12}>
    <Typography id='product-viewmore2'> </Typography>
    </Grid>
</Grid>
    
    </Grid>
)
}

export default Product;