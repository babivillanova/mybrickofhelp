import React, {useState} from 'react';
import { useEffect } from 'react';
import {Link} from 'react-router-dom';
import './Tab.css';


function Tab() {
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
                
                <Link to='/near' className="navbar-menu" >
                      NEAR
                </Link>
                <Link to='/polygon' className="navbar-menu">
                      POLYGON
                </Link>
                <Link to='/near1' className="navbar-menu">
                NEAR1
                </Link>
                
                </ul>
                

          
        </div>


        </div>

    </nav>
    
  
  )
}

export default Tab