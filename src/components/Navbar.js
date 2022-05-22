import React, {useState} from 'react';
import { useEffect } from 'react';
import {Link} from 'react-router-dom';
import './Navbar.css';
import hero from './images/Hero.png';


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
                
                     <img className="navbar-logo" src={hero} />
                
                <Link to='/faq' className="navbar-menu" >
                      FAQ
                </Link>
                <Link to='/buynft' className="navbar-menu">
                      BUY NFT
                </Link>
                <Link to='/ВЗЯТЬУЧАСТЬТУТ' className="navbar-menu">
                ВЗЯТЬ УЧАСТЬ ТУТ 
                </Link>

                <Link to='/GOVERNANCE' className="navbar-menu">
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