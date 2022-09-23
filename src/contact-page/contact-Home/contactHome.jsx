import React from 'react'
import { Container,createTheme} from '@mui/system'
import { styled } from '@mui/material/styles';
import Navbar from '../../homepage-components/navbar/navbar'
import Footer from '../../homepage-components/footerSection/footer'
import ContactForm from '../contactForm/contactform'
import ScrollToTop from '../../scroltotop';
const ContactHome = () => {
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
<ContactForm/>
<Footer/>
</Root>
<ScrollToTop/>
</>
)
}

export default ContactHome