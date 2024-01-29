import React from 'react';
import './Home.css';
import HomeImage from "../src/Images/Homes.png"; 

function Home() {
  return (
    <>
      <div className='hero1'>
        <div className='Hero'>
          <h1>We @@Design, Develop and Manufacture @@@ Integrated Charging Solutions</h1>
          <p>A vision to integrate USB charging to every bedside and workspace.</p>
          <button style={{ backgroundColor: 'green', height: "70px", width: "250px", borderRadius: "30px" }}>Get in Touch</button>
        </div>
        <div className="ImageContainer" style={{ backgroundColor: 'lightgreen' }}>
          <img src={HomeImage} alt="Home" />
        </div>
      </div>
    </>
  );
}

export default Home;
