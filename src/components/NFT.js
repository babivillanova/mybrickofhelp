import React, { useRef, useEffect, useState } from 'react';
import './NFT.css';
// import {Button} from './Button.js';




const NFT = () => {


  return (
    <div>
      <div className='nft-panel'>
       
        <div className='blockchains'>
        <button className='button'>NEAR</button>
        <button className='button'>POLYGON</button>
        <button className='button'>NEAR</button>
        </div>

        <div className='cards'>
          <img className='nftimage' src="https://qph.fs.quoracdn.net/main-qimg-7511a3d3ebd4ffa5c8c652e691444fd4-lq"></img>
          <img className='nftimage' src="https://qph.fs.quoracdn.net/main-qimg-7511a3d3ebd4ffa5c8c652e691444fd4-lq"></img>
          <img className='nftimage' src="https://qph.fs.quoracdn.net/main-qimg-7511a3d3ebd4ffa5c8c652e691444fd4-lq"></img>
          <img className='nftimage' src="https://qph.fs.quoracdn.net/main-qimg-7511a3d3ebd4ffa5c8c652e691444fd4-lq"></img>
          <img className='nftimage' src="https://qph.fs.quoracdn.net/main-qimg-7511a3d3ebd4ffa5c8c652e691444fd4-lq"></img>
          <img className='nftimage' src="https://qph.fs.quoracdn.net/main-qimg-7511a3d3ebd4ffa5c8c652e691444fd4-lq"></img>
          <img className='nftimage' src="https://qph.fs.quoracdn.net/main-qimg-7511a3d3ebd4ffa5c8c652e691444fd4-lq"></img>
          <img className='nftimage' src="https://qph.fs.quoracdn.net/main-qimg-7511a3d3ebd4ffa5c8c652e691444fd4-lq"></img>
          <img className='nftimage' src="https://qph.fs.quoracdn.net/main-qimg-7511a3d3ebd4ffa5c8c652e691444fd4-lq"></img>
          <img className='nftimage' src="https://qph.fs.quoracdn.net/main-qimg-7511a3d3ebd4ffa5c8c652e691444fd4-lq"></img>


        </div>  
        
    </div>
    </div>
  );
};

export default NFT;
