import React, { useRef, useEffect, useState } from 'react';
import mapboxgl from 'mapbox-gl';

import './Map.css';
import hero2 from './images/Hero2.png';

mapboxgl.accessToken =
  'sk.eyJ1IjoibW1pc3RyeTIiLCJhIjoiY2wzaDhwcXBiMGtkeDNjbzNkOTV3eDAyNyJ9.q0A7XgNYjNhv7PO6SWKMhw';

const Map = () => {
  const mapContainerRef = useRef(null);

  const [lng, setLng] = useState(30.91656);
  const [lat, setLat] = useState(48.6794);
  const [zoom, setZoom] = useState(6);

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
    el.className = 'markercss';
   

    const el2 = document.createElement('div');
    el2.className = 'markercss';
   // el.style.backgroundSize = '100%';

   const el3 = document.createElement('div');
   el3.className = 'markercss';

    const el4 = document.createElement('div');
    el4.className = 'markercss';
 
    const marker = new mapboxgl.Marker(el).setLngLat([30.91656, 51.2994]).addTo(map);
    const marker2 = new mapboxgl.Marker(el2).setLngLat([31.81656, 51.8994]).addTo(map);
    const marker3 = new mapboxgl.Marker(el3).setLngLat([31.70656, 51.7994]).addTo(map);
    const marker4 = new mapboxgl.Marker(el4).setLngLat([32.11656, 51.6994]).addTo(map);

    map.on('move', () => {
      const marker = new mapboxgl.Marker(el).setLngLat([30.91656, 51.2994]).addTo(map);
     const marker2 = new mapboxgl.Marker(el2).setLngLat([31.81656, 51.8994]).addTo(map);
    const marker3 = new mapboxgl.Marker(el3).setLngLat([31.70656, 51.7994]).addTo(map);
    const marker4 = new mapboxgl.Marker(el4).setLngLat([32.11656, 51.6994]).addTo(map);
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
