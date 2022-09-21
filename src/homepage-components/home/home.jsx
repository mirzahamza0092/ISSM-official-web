import React,{useState} from 'react'
import { Container,createTheme} from '@mui/system'
import { styled } from '@mui/material/styles';
import { Grid } from '@mui/material'
import Navbar from '../navbar/navbar'
import Hero from '../heroSection/hero'
import About from '../aboutus/about'
import Research from '../research-block/research'
import Products from '../productsSection/products'
import Blog from '../blogSection/blog'
import Footer from '../footerSection/footer'
import ScrollToTop from '../../scroltotop';
import '../home/home.css'
const theme = createTheme({
    breakpoints: {
      values: {
        xs: 0,
        sm: 600,
        md: 900,
        lg: 1200,
        xl: 1536,
    },
    },
});
const Root = styled('div')(({ theme }) => ({
    [theme.breakpoints.down('md')]: {
    width:1260,

    },
    [theme.breakpoints.up('md')]: {
      width:1380,
      },
    [theme.breakpoints.up('lg')]: {
      width:1440
    },
  }));

const Home = () => {
return(
<>
<Root>
  <Navbar/>
  <Hero/>
  <About/>
  <Research/>
  <Products/>
  <Blog/>
  <Footer/>
  <ScrollToTop/>
</Root>
</>
)
}

export default Home