import { Grid,Typography } from '@mui/material'
import React from 'react'
import {Link} from 'react-router-dom'
import '../product/products.css'
import pdf from '../product/XIVA White paper - -3.pdf'
const Product = () => {
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
                        <Typography id="products-numb">01</Typography>
                        <Typography id="productsname">XIVA</Typography>
                    </Grid>
                    <Typography id='product-para'>ISSM provides AI applications in Language Models, Computer
                    Vision, Robotics and Data Orchestration. All our applications
                    are integrated into existing technology stacks of our clients.
                    Our clients with no prior infrastructure or expertise in AI have
                    now begun to build and deploy machine learning models
                    across their organisations.<br/>
                    ISSM's Products
                    ISSM provides products in major domains
                    of AI such as NLP/NLU, Computer Vision
                    and Data Orchestration.
                    Every product aims to provide a simple to
                    use Application that is built to enable selflearning and ease of building and
                    deploying ML models.<br/>

                        <br/><b>How Does Xiva Work?<br/></b>
                        XIVA is an application which enables users to build powerful conversational AI chatbot/speechbots and
                        train ML models on their historical data. Additionally, Xiva self-learns from user actions to teach itself to
                        talk like best customers service agents.<br/>
                        </Typography>
                    
                </Grid>
                <Grid md={2} sm={12}>
                    <img src={require('../product/XIVA.PNG')} id='productviewmore'/>
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
                    Bot Builder
            </Typography>
            <Typography style={{textAlign:'center',fontSize:'16px',fontFamily: 'Calibri',paddingTop:'20px'}}>Easy to build Conversational
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

            <Typography style={{textAlign:'center',fontSize:'16px',fontFamily: 'Calibri',paddingTop:'20px'}}>Integration and
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
                textTransform:'uppercase'

            }}>
            Unsupervised Learning
                </Typography>
                <Typography style={{textAlign:'center',fontSize:'16px',fontFamily: 'Calibri',paddingTop:'20px'}}>Understanding the business
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