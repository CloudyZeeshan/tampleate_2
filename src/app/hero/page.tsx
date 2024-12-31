
'use client'
import FeatureSection1 from '../featureSection/featur1';
import NewCeramics from '../components/newCeramics';
import PopularProducts from '../components/ourPopularProduct';
import EmailSignup from '../components/emailSignUp';
import FeatureSection2 from '../featureSection/feature2';

import React, { useState } from 'react';

export default  function HeroSection(){
  const [showImage, setShowImage] = useState(false);

  const handleButtonClick = () => {
    setShowImage(!showImage);
  };

  return (
    <div>
    <div className="max-w-screen-lg mx-auto p-5 bg-primary-900 flex flex-col md:flex-row items-center md:items-start mb-7">
      <div className="md:w-1/2 flex flex-col justify-center mb-8 md:mb-0">
        <h1 className="text-white text-2xl md:text-xl font-bold mb-4 md:mb-6   ">
          The furniture brand for the future,
           with timeless designs
        </h1>
        <button
          onClick={handleButtonClick}
          className="bg-zinc-500 text-white py-2 px-4 md:px-6  font-semibold mb-4 md:mb-6 w-48"
        >
          View Collection
        </button>
        {showImage && (
          <div className="mt-4 lg:hidden">
            <img
              src="projectPics/Right Image.png"
              alt="Furniture Image"
              className="w-full h-80 object-cover rounded-lg"
            />
          </div>
        )}
        <p className="text-white text-sm md:text-sm mt-48 ">
          A new era in eco-friendly furniture with Avelon, the French luxury retail brand with nice fonts, tasteful colors and a beautiful way to display things digitally using modern web technologies.
        </p>
      </div>
      <div className="md:w-1/2 h-[300px] md:h-full hidden md:flex">
        <img
          src="projectPics/Right Image.png"
          alt="Furniture Image"
          className="w-full h-full object-cover flex  "
        />
      </div>   
    </div>
         <FeatureSection1/>
          <NewCeramics/>
          <PopularProducts/>
          <EmailSignup/>
          <FeatureSection2/>
    </div>
  );
};