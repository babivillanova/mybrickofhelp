import React from 'react';
import './Tool.css';


function Tool() {
  return (
    <div className='cards'> 
    <div className='card'>
      <div className='card-content'>
        
      </div>
            <div className='card'>
            <div className='cards__container'>
              <div className='cardbutton'>Open to Vote</div>
              <div className='subject'>Decide on what is going to be the aditional construction</div>
              <div className='description'>Vote for one or more alternatives in between the proposals.<br/>Consider each alternative's Carbon Emission,
               e the square meter amount necessary for garanting the revenew necessary for the whole building reconstruction.  </div>
               <div className='description'>🔰 Earn 10 vote tokens</div>
            </div>;
            <div className='cards__container'>
              <div className='cardbutton'>Open to Vote</div>
              <div className='subject'>Vote for your prefered architectonic style </div>
              <div className='description'>From the architects firms listed, check which studio owns the portfolio with the most appealing style for the new construction.</div>
              <div className='description'>🔰 Earn 3 vote tokens</div>
            </div>;
            <div className='cards__container'>
              <div className='cardbutton'>Processing</div>
              <div className='subject'>Decide on reconstruction package alternative</div>
              <div className='description'> and anywhere</div>
              <div className='description'>🔰 Earn 3 vote tokens</div>
            </div>;
    </div>
    </div>
    </div>
    
  );
}

export default Tool;
