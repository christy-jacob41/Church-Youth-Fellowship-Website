import React, { useState} from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  const [open, setOpen] = useState(false);
  const handleClick = () => setOpen(!open);
  const closeMobileMenu = () => setOpen(false);
  return (
    <nav className ="navbar">

    <div id = "logo_name">

    <Link to='/' onClick={closeMobileMenu}>
    <img src = '/cmc_logo.JPG' id ="nav_logo"></img>
    </Link>

    <div ><Link to='/' className ="header_name" onClick={closeMobileMenu}>
      MTCD Youth Fellowship </Link></div>

    </div>

    <ul id = "nav_links" style={{transform: open ? "translateX(0px)" : ""}}>
        <li className= "nav_list"><Link to='/' onClick={closeMobileMenu}>
                Home
              </Link></li>
        <li class= "nav_list"><Link
                to='/about'
                onClick={closeMobileMenu}
              >
                About
              </Link></li>
        <li class= "nav_list"><Link
                to='/wfhpage'
                onClick={closeMobileMenu}
              >
                Livestream
              </Link></li>
        <li class= "nav_list"><Link
                to='/mission'
                onClick={closeMobileMenu}
              >
                Mission
              </Link></li>
    </ul>
    <div class="nav_blockobj" onClick={()=> setOpen(!open)}>
      <div></div>
      <div></div>
      <div></div>
    </div>
    </nav>
  );
}

export default Navbar;