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
  { src: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e'},
  { src: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d'},
];

const imagesPoolPolygon = [
  { src: 'https://qph.fs.quoracdn.net/main-qimg-7511a3d3ebd4ffa5c8c652e691444fd4-lq'},
  { src: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e'},
];

const imagesPoolSolana = [
    { src: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45'},
    { src: 'https://qph.fs.quoracdn.net/main-qimg-7511a3d3ebd4ffa5c8c652e691444fd4-lq'},
];



  



const NFT = () => {
  const [src, setsrc] = useState('https://qph.fs.quoracdn.net/main-qimg-7511a3d3ebd4ffa5c8c652e691444fd4-lq');
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

        <div className='cards'>
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
