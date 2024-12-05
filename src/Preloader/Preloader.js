import React from 'react';
import pujaloader from './Swastik.gif'
import './Preloader.css'; // Ensure you have the CSS file for styling

const Preloader = () => {
  return (
    <div className="preloader">
      <div className="preloader-animation">
        <img src={pujaloader} alt="Thali" />
      </div>
    </div>
  );
};

export default Preloader;
