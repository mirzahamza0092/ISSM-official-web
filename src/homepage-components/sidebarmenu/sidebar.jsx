import React from "react";
import '../sidebarmenu/sidebar.css'
import CloseIcon from '@mui/icons-material/Close';
import { Typography } from "@mui/material";
import {Link} from 'react-router-dom';

function Sidebar({ isOpen, onChange }) {
return (
    <div className={`Menu ${isOpen && "open"}`} style={{background:"black"}} >
    <span
        className="material-icons btn-close"
        onClick={() => onChange(false)}>
    <div className="sidebar-close">
        <Link to='/'><img src={require('../sidebarmenu/ISSM-Logo2.png')} className='sidebar-close-logo'/></Link>
        <CloseIcon style={{marginTop:'345px',marginLeft:'25px',fontSize:'25px'}}/>
        <div className="sidebar-text">
            <Typography fontFamily={'Calibri'}marginTop='200px' marginLeft='20px' style={{fontFamily:"lato"}}>Menu</Typography>
        </div>
    </div>
    </span>
    <div className="Menu-items">
        <Link to='/' id="sidebar-home" style={{fontFamily:"lato"}}>Home</Link>
        <Link to='/product'  id="sidebar-products" style={{fontFamily:"lato"}}>Products</Link>
        <Link to='/insight'  id="sidebar-insights" style={{fontFamily:"lato"}}>insights</Link> 
        <Link to='/contact'  id="sidebar-contact" style={{fontFamily:"lato"}}>Contact</Link>
    </div>
    </div>
);
}

export default Sidebar;