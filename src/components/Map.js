import React, { useRef, useEffect, useState } from 'react';
import mapboxgl from 'mapbox-gl';

import './Map.css';
import hero2 from './images/Hero2.png';

mapboxgl.accessToken =
  'pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4M29iazA2Z2gycXA4N2pmbDZmangifQ.-g_vE53SD2WrJ6tFX7QHmA';

const Map = () => {
  const mapContainerRef = useRef(null);

  const [lng, setLng] = useState(30.91656);
  const [lat, setLat] = useState(49.6794);
  const [zoom, setZoom] = useState(6.5);

  // Initialize map when component mounts
  useEffect(() => {
    const map = new mapboxgl.Map({
      container: mapContainerRef.current,
      style: 'mapbox://styles/mapbox/light-v9',
      center: [lng, lat],
      zoom: zoom
    });

    // Add navigation control (the +/- zoom buttons)
    map.addControl(new mapboxgl.NavigationControl(), 'top-right');
    map.scrollZoom.disable();

    

    const el = document.createElement('div');
    const width = 20;
    const height = 20;
    el.className = 'map-container';
    el.style.backgroundImage = `url("https://amymhaddad.s3.amazonaws.com/morocco-blue.png")`;
    el.style.width = `${width}px`;
    el.style.height = `${height}px`;

    const el2 = document.createElement('div');
   
    el2.className = 'map-container';
    el2.style.backgroundImage = `url("https://amymhaddad.s3.amazonaws.com/morocco-blue.png")`;
    el2.style.width = `${width}px`;
    el2.style.height = `${height}px`;
   // el.style.backgroundSize = '100%';

   const el3 = document.createElement('div');
   
    el3.className = 'map-container';
    el3.style.backgroundImage = `url("https://amymhaddad.s3.amazonaws.com/morocco-blue.png")`;
    el3.style.width = `${width}px`;
    el3.style.height = `${height}px`;

    const el4 = document.createElement('div');
   
    el4.className = 'map-container';
    el4.style.backgroundImage = `url("https://imagizer.imageshack.com/v2/260x260q90/c/r/661/MminPy.jpg")`;
    el4.style.width = `${width}px`;
    el4.style.height = `${height}px`;
 
    const marker = new mapboxgl.Marker(el).setLngLat([30.91656, 50.2994]).addTo(map);
    const marker2 = new mapboxgl.Marker(el2).setLngLat([31.81656, 50.0994]).addTo(map);
    const marker3 = new mapboxgl.Marker(el3).setLngLat([29.70656, 49.7994]).addTo(map);
    const marker4 = new mapboxgl.Marker(el4).setLngLat([32.11656, 50.6994]).addTo(map);

    map.on('move', () => {
      const marker = new mapboxgl.Marker(el).setLngLat([30.91656, 50.2994]).addTo(map);
      const marker2 = new mapboxgl.Marker(el2).setLngLat([31.81656, 50.0994]).addTo(map);
      const marker3 = new mapboxgl.Marker(el3).setLngLat([29.70656, 49.7994]).addTo(map);
      const marker4 = new mapboxgl.Marker(el4).setLngLat([32.11656, 50.6994]).addTo(map);
      setLng(map.getCenter().lng.toFixed(4));
      setLat(map.getCenter().lat.toFixed(4));
      setZoom(map.getZoom().toFixed(2));
     
      
      //console.log("Marker moved");
    });

    // Clean up on unmount
    return () => map.remove();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div>
      <div className='introtext'>Choose a building available for NFT partial <br/> ownership purchasing</div>
      <div className='sidebarStyle'>
        <div>
          Longitude: {lng} | Latitude: {lat} | Zoom: {zoom}
        </div>
      </div>
      <div className='map-container' ref={mapContainerRef} />
       <img className='hero2' src={hero2} /> 
    </div>
  );
};

export default Map;
