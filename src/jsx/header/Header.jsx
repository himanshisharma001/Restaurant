import React, { useState } from 'react';
import './header.css';
import logo from '../../assets/images/logo.png';
import { NavLink } from 'react-router-dom';
import SearchIcon from '@mui/icons-material/Search';
import PersonIcon from '@mui/icons-material/Person';
import WidgetsIcon from '@mui/icons-material/Widgets';
import Offcanvas from 'react-bootstrap/Offcanvas';

const Header = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
    return (
        <>
        {/* --------------------------Desktop Header-------------------------------- */}
          <header className='header-box'>
            <nav className='navbar-header-bg'>
             <NavLink to="/"><div className='header-logo'> 
             <img src={logo} alt="logo" className='' />
             </div></NavLink>
             
             <div>
              <ul className='header-ul-list'>
                <li><NavLink to="/" className="text-decoration-none main-li-list">Home</NavLink></li>
                <li><NavLink to="/services" className="text-decoration-none main-li-list ms-3">Services</NavLink></li>
                <li><NavLink to="/chefs" className="text-decoration-none main-li-list ms-3">Our Chefs</NavLink></li>
                <li><NavLink to="/ourmenu" className="text-decoration-none main-li-list ms-3">Our Menu</NavLink></li>
                <li><NavLink to="/gallery" className="text-decoration-none main-li-list ms-3">Gallery</NavLink></li>
                <li><NavLink to="/aboutus" className="text-decoration-none main-li-list ms-3">About Us</NavLink></li>
                <li><NavLink to="/contactus" className="text-decoration-none main-li-list ms-3">Contact Us</NavLink></li>
                <li><NavLink to="/blog" className="text-decoration-none main-li-list ms-3">Blog</NavLink></li>
                <li><NavLink to="/reservation" className="text-decoration-none main-li-list ms-3">Reservation</NavLink></li>
              </ul>
             </div>

             <div className='header-icons'>
              <SearchIcon className='header-icn-vw'/>
              <PersonIcon className='header-icn-vw ms-3'/>
             </div>
            </nav>
          </header>

  {/* --------------------------Mobile Header-------------------------------- */}
  <header className='mob-header-box'>
   <div className='d-flex justify-content-between'>
   <NavLink to="/"><div className='header-logo'> 
             <img src={logo} alt="logo" className='' />
             </div>
             </NavLink>
             <div className='header-icons'>
              <SearchIcon className='header-icn-vw'/>
              <PersonIcon className='header-icn-vw ms-3'/>
              <WidgetsIcon className='header-icn-vw ms-3' onClick={handleShow}/>
             </div>
   </div>
   <Offcanvas show={show} onHide={handleClose} className="shadow" style={{marginTop:'70px'}}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title></Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
        <ul className='mob-header-ul-list'>
                <li className='mt-2'><NavLink to="/" className="text-decoration-none main-li-list">Home</NavLink></li>
                <li className='mt-2'><NavLink to="/services" className="text-decoration-none main-li-list">Services</NavLink></li>
                <li className='mt-2'><NavLink to="/chefs" className="text-decoration-none main-li-list">Our Chefs</NavLink></li>
                <li className='mt-2'><NavLink to="/ourmenu" className="text-decoration-none main-li-list">Our Menu</NavLink></li>
                <li className='mt-2'><NavLink to="/gallery" className="text-decoration-none main-li-list">Gallery</NavLink></li>
                <li className='mt-2'><NavLink to="/aboutus" className="text-decoration-none main-li-list">About Us</NavLink></li>
                <li className='mt-2'><NavLink to="/contactus" className="text-decoration-none main-li-list">Contact Us</NavLink></li>
                <li className='mt-2'><NavLink to="/blog" className="text-decoration-none main-li-list">Blog</NavLink></li>
                <li className='mt-2'><NavLink to="/reservation" className="text-decoration-none main-li-list">Reservation</NavLink></li>
              </ul>
        </Offcanvas.Body>
      </Offcanvas>
  </header>

 
        </>
    )
}
export default Header;