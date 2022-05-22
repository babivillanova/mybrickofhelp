import React, { useRef, useEffect, useState } from 'react';
import './NFT.css';
// import {Button} from './Button.js';

// {
//   img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
//   title: 'Breakfast',
//   author: '@bkristastucchio',
// },
// {
//   img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
//   title: 'Burger',
//   author: '@rollelflex_graphy726',
// },
// {
//   img: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
//   title: 'Camera',
//   author: '@helloimnik',
// },

const imagesPoolNear = [
  { src: ' https://images.adsttc.com/media/images/6019/cebe/f91c/8198/f400/0184/slideshow/20201013DSCF7203amikhaylov-Pano-1.jpg?1612304034'},
  { src: ' https://images.adsttc.com/media/images/6019/cebe/f91c/8198/f400/0184/slideshow/20201013DSCF7203amikhaylov-Pano-1.jpg?1612304034'},
  { src: ' https://images.adsttc.com/media/images/6019/cebe/f91c/8198/f400/0184/slideshow/20201013DSCF7203amikhaylov-Pano-1.jpg?1612304034'},
  { src: ' https://images.adsttc.com/media/images/5d2b/d453/284d/d1c1/d200/0437/slideshow/IMG_3967_2.jpg?1563153421'},
  { src: ' https://images.adsttc.com/media/images/5d2b/d453/284d/d1c1/d200/0437/slideshow/IMG_3967_2.jpg?1563153421'},  
  { src: ' https://images.adsttc.com/media/images/5d2b/d720/284d/d1dc/5c00/0001/slideshow/17-09-16_364-69.jpg?1563154105 '},  
  { src: ' https://images.adsttc.com/media/images/5d2b/d720/284d/d1dc/5c00/0001/slideshow/17-09-16_364-69.jpg?1563154105 '},  
  { src: ' https://images.adsttc.com/media/images/5d2b/d720/284d/d1dc/5c00/0001/slideshow/17-09-16_364-69.jpg?1563154105 '},  
 
 
];

const imagesPoolPolygon = [
  { src: 'https://images.adsttc.com/media/images/5a32/793a/b22e/386c/0e00/01f0/newsletter/2.jpg?1513257261'},
  { src: 'https://images.adsttc.com/media/images/5a32/793a/b22e/386c/0e00/01f0/newsletter/2.jpg?1513257261'},
  { src: 'https://images.adsttc.com/media/images/53fd/5ba7/c07a/8038/8e00/094d/medium_jpg/PORTADA.jpg?1409112975'},
  { src: 'https://images.adsttc.com/media/images/53fd/5ba7/c07a/8038/8e00/094d/medium_jpg/PORTADA.jpg?1409112975'},
  { src: 'https://images.adsttc.com/media/images/5126/7811/b3fc/4bb0/dd00/00c0/newsletter/1_voomy_It_Park.jpg?1414427301'},
];

const imagesPoolSolana = [
    { src: ' https://images.adsttc.com/media/images/6070/8c91/f91c/81e2/4d00/002e/medium_jpg/76_-_LAN_-_NOLISTRA_-_Strasbourg_%C2%A9_Charly_Broyez.jpg?1617988741'},
    { src: 'https://images.adsttc.com/media/images/6244/1e20/ab3a/8601/66fa/04f2/medium_jpg/kota-house-5.jpg?1648631348'},
    { src: 'https://images.adsttc.com/media/images/6244/1e20/ab3a/8601/66fa/04f2/medium_jpg/kota-house-5.jpg?1648631348'},
    { src: 'https://images.adsttc.com/media/images/6244/1e20/ab3a/8601/66fa/04f2/medium_jpg/kota-house-5.jpg?1648631348'}, 
    { src: ' https://www.kathmanduandbeyond.com/wp-content/uploads/2017/10/Kiev-Quarter-Slavutych-Ukraine-3-2.jpg'},
    { src: ' https://www.kathmanduandbeyond.com/wp-content/uploads/2017/10/Chernihiv-Quarter-Slavutych-Ukraine-1-3.jpg'},
    { src: ' https://www.kathmanduandbeyond.com/wp-content/uploads/2017/10/Chernihiv-Quarter-Slavutych-Ukraine-1-3.jpg'},


    

];



  



const NFT = () => {
  const [count, setCount] = useState(0);
  const [images, setImages] = useState(imagesPoolNear);
 

  return (
    <div>
      <div className='nft-panel'>
       
        <div className='blockchains'>
        <button className='button' onClick={()=> setImages(imagesPoolNear)}>NEAR</button>
        <button className='button' onClick={()=> setImages(imagesPoolPolygon)}>POLYGON</button>
        <button className='button' onClick={()=> setImages(imagesPoolSolana)} >Solana</button>
        
        </div>

        <div >
          {/* <img className='nftimage' src={src} /> */}
        
          {images.map((imgSrc, index) => 
          (
          <img className='nftimage' src={imgSrc.src} key={index} alt="Make sure to include a alt tag, because react might throw an error at build"/>
          
          ))}
        
       
        </div>  
        
    </div>
    </div>
  );
};

export default NFT;
