import React,{useState} from 'react'
import Sidebar from './sidebar'
import {Link} from 'react-router-dom';
import DensityMediumIcon from '@mui/icons-material/DensityMedium';
import '../sidebarmenu/sidebar.css'
import { Typography } from '@mui/material';
const Mainsidebar = () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <>
        
    <div className="App" style={{backgroundColor:"black"}}>
            <div >
                <span className="material-icons menu-btn" onClick={() => setIsOpen(true)}>
                    <div>
                    <Link to='/'><img src={require('../sidebarmenu/ISSM-Logo2.png')} className='sidebar-logo'/></Link>
                    </div>
                    <DensityMediumIcon style={{
                        transform: 'rotate(90deg)',
                        marginTop:'400px',
                        marginLeft:'20px',
                        cursor:'pointer'
                    }}/>
                </span>
                <Sidebar isOpen={isOpen} onChange={setIsOpen}></Sidebar>
            </div>
    </div>
    </>
    );
}

export default Mainsidebar