import React from 'react'
import { Container,createTheme} from '@mui/system'
import { styled } from '@mui/material/styles';
import Navbar from '../../../homepage-components/navbar/navbar'
import Footer from '../../../homepage-components/footerSection/footer'
import OdinProduct from './odin-product'
import ScrollToTop from '../../../scroltotop';
import Icons from '../../../icons/icons';
const Odinhome = () => {
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
        width:'100%',
    
        },
        [theme.breakpoints.up('md')]: {
            width:1380,
        },
        [theme.breakpoints.up('lg')]: {
            width:'100%'
        },
    }));
  return (
    <>
    <Root>
    <Icons/>
    <Navbar/>
    <OdinProduct/>
    <Footer/>
    <ScrollToTop/>
    </Root>
    </>
    )
}

export default Odinhome