import React from 'react';
import Image from 'next/image';

const Home = () => {
  return (
   < div>
      
      
      

      {/* Right Section */}
      <div className='hero-container'>
      <div className="hero-box">

         {/* Left Section */}
      <div className='hero-left-div'>
         <h1 className="fade-in">Discover Our Home Decor</h1>
        <p>We offer a wide range of styles and materials</p>
        <button className="hero-button">Discover Now</button>
        </div>



        <div className="image-container">
  <Image
    src="/red3.jpg"
    width={400}
    height={350}
    alt="Home Decor"
    className="styled-image fade-in"
  />
</div>
      </div>
    </div>
  </div>

  );
};

export default Home;
