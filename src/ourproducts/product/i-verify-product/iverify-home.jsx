import React from 'react'
import { Container,createTheme} from '@mui/system'
import { styled } from '@mui/material/styles';
import Iverify from './iverify'
import Navbar from '../../../homepage-components/navbar/navbar'
import Footer from '../../../homepage-components/footerSection/footer'
import ScrollToTop from '../../../scroltotop';
const Ivarifyhome = () => {
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
          width:'100%'
        },
      }));
  return (
<>
<Root>
<Navbar/>
<Iverify/>
<Footer/>
<ScrollToTop/>
</Root>
</>
  )
}

export default Ivarifyhome