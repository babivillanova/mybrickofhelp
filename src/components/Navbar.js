import React, {useState} from 'react';
import { useEffect } from 'react';
import {Link} from 'react-router-dom';
import './Navbar.css';
import logo from './images/Logo.png';


function Navbar() {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);
    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const showButton = () => {
      if (window.innerWidth <= 960) {
        setButton(false);
      } else {
        setButton(true);
      }
    };


    useEffect(() => {
      showButton();
    }, []);
  
    window.addEventListener('resize', showButton);


  return (
    <nav className="navbar">
        <div className="navbar-container">
          <div className='navbar__wrapper'>
                <ul className='navbar__nav'>
                <Link to='/' className="navbar-logo" >
                      
                </Link>
                     <img className="navbar-logo"  src={logo} />
                
                <Link to='/MARKETPLACE' className="navbar-menu" >
                      MARKETPLACE
                </Link>
                <Link to='/ВЗЯТЬУЧАСТЬТУТ' className="navbar-menu">
                ВЗЯТЬ УЧАСТЬ ТУТ <span/> ( FAQ )
                </Link>
                <Link to='/governance' className="navbar-menu">
                GOVERNANCE
                </Link>

                <Link to='/WALLET' className="navbar-menu">
                CONNECT YOUR WALLET
                </Link>
                
                </ul>
                

          
        </div>


        </div>

    </nav>
    
  
  )
}

export default Navbar