import React from 'react';
import './Tool.css';


function Tool() {
  return (
    <div className='cards'> 
            <div className='card'>
            <div className='cards__container'>
              <div className='cardbutton'>Open to Vote</div>
              <div>Decide on what is going to be the aditional construction</div>
              <div>on the building plot</div>
            </div>;
            <div className='cards__container'>
              <div className='cardbutton'>Open to Vote</div>
              <div>Vote for your prefered </div>
              <div>architectonic style</div>
            </div>;
            <div className='cards__container'>
              <div className='cardbutton'>Processing</div>
              <div>Buy and sell token anytime</div>
              <div>and anywhere</div>
            </div>;
    </div>
    </div>
  );
}

export default Tool;
