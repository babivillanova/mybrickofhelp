import React from 'react';
import '../App.css';
import { Button } from './Button';
import { Button2 } from './Button';
import './HeroSection.css';
import onboarding from './Onboarding.png';


function HeroSection() {
  return (
    <div className='hero-container'>
      <div className='onboarding-container'>
      <img src={onboarding} alt='bla'/>
      
      
      <div className='hero-btns'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          Discord
        </Button>
        <Button2
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
          onClick={console.log('hey')}
        >
          Linkedin
        </Button2>
        </div>

      </div>
      <div className='lado'>
      <p> Waiting for the image of avatar</p>
      </div>
    </div>
  );
}

export default HeroSection;
