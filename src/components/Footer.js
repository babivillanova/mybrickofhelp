import React from 'react';
import './Footer.css';
import { Button } from './Button';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className='footer-container'>
      <section className='footer-subscription'>
        <p className='footer-subscription-heading'>
        Want to be aware of all updates?
        </p>

        <div className='input-areas'>
          <form>
            <input
              className='footer-input'
              name='email'
              type='email'
              placeholder='Email'
            />
            <Button buttonStyle='btn--outline'>Subscribe</Button>
          </form>
        </div>
      </section>


      
      <div className='line' />
      

      <div class='footer-links'>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <h2>ArchiDAO.io</h2>
            <Link to='/sign-up'>First DAO by Architects for Architects. 
            Building the experiences of tomorrow, ArchiDAO is developing native web3 experiences that transcend physical-digital boundaries.</Link>

          </div>
          <div class='footer-link-items'>
            <h2>Quick Link</h2>
            <Link to='/'>How it works</Link>
            <Link to='/'>Blog</Link>
            <Link to='/'>Suport</Link>
          </div>
        </div>
        <div className='footer-link-wrapper2'>

          <div class='footer-link-items'>
            <h3>Social Media</h3>
            <div class='footer-link-items2'>
            <Link
              class='social-icon-link instagram'
              to='/'
              target='_blank'
              aria-label='Instagram'
              className= 'social-icon-link-instagram'
            >
              <i class='fab fa-instagram' />
            </Link>
            <Link
              class='social-icon-link youtube'
              to='/'
              target='_blank'
              aria-label='Youtube'
              className= 'social-icon-link-youtube'
            >
              <i class='fab fa-youtube' />
            </Link>
            <Link
              class='social-icon-link twitter'
              to='/'
              target='_blank'
              aria-label='Twitter'
              className= 'social-icon-link-twitter'
            >
              <i class='fab fa-twitter' />
            </Link>
            <Link
              class='social-icon-link twitter'
              to='/'
              target='_blank'
              aria-label='LinkedIn'
              className='social-icon-link-linkedin'
            >
              <i class='fab fa-linkedin' />
            </Link>
            <Link
              class='social-icon-link twitter'
              to='/'
              target='_blank'
              aria-label='LinkedIn'
              className='social-icon-link-linkedin'
            >
              <i class='fab fa-discord' />
            </Link>
            </div>
          </div>
        </div>
      </div>
      <div class='social-media'>
        <div class='social-media-wrap'>
          <small class='website-rights'>ARCHIDAO © 2022</small>
        </div>
      </div>
    </div>
  );
}

export default Footer;
