import React from "react";
import '../sidebarmenu/sidebar.css'
import CloseIcon from '@mui/icons-material/Close';
import { Typography } from "@mui/material";
import {Link} from 'react-router-dom';

function Sidebar({ isOpen, onChange }) {
return (
    <div className={`Menu ${isOpen && "open"}`}>
    <span
        className="material-icons btn-close"
        onClick={() => onChange(false)}>
    <div className="sidebar-close">
        <Link to='/'><img src={require('../sidebarmenu/ISSM-Logo2.png')} className='sidebar-close-logo'/></Link>
        <CloseIcon style={{marginTop:'345px',marginLeft:'25px',fontSize:'25px'}}/>
        <Typography fontFamily={'Calibri'}marginTop='200px' marginLeft='20px'>Menu</Typography>
    </div>
    </span>
    <div className="Menu-items">
        <Link to='/' id="sidebar-home">Home</Link>
        <Typography id='product-line'></Typography>
        <Link to='/product'  id="sidebar-products">Products</Link>
        <Link to='/insight'  id="sidebar-insights">insights</Link> 
        <Link to='/contact'  id="sidebar-contact">Contact</Link>
        <Typography id='sidebar-lh'>tech <br/>nology</Typography>

    </div>
    </div>
);
}

export default Sidebar;