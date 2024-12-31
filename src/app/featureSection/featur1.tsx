


import React from 'react';
import { FaTruck, FaCheckCircle, FaTags, FaLeaf } from 'react-icons/fa';

export default function FeatureSection1(){
  return (
    <div className='w-full  p-12'>
    <div className="max-w-screen-lg mx-auto py-8  px-4  ">
      <h2 className="text-center text-3xl font-bold mb-8 text-primary-900">What Makes Our Brand Different</h2>
      <div className="flex flex-wrap justify-between gap-">
        {/* First Feature */}
        <div className="w-full md:w-1/2 lg:w-1/4 flex flex-col items-center text-center">
          <FaTruck className="text-5xl text-gray-500 mb-4" />
          <h3 className="text-xl font-medium mb-2">Next day as standard</h3>
          <p>Order before 3pm and get your order the next day as standard.</p>
        </div>
        {/* Second Feature */}
        <div className="w-full md:w-1/2 lg:w-1/4 flex flex-col items-center text-center">
          <FaCheckCircle className="text-5xl text-gray-500 mb-4" />
          <h3 className="text-xl font-medium mb-2">Made by true artisans</h3>
          <p>Handmade crafted goods made with real passion and craftsmanship.</p>
        </div>
        {/* Third Feature */}
        <div className="w-full md:w-1/2 lg:w-1/4 flex flex-col items-center text-center">
          <FaTags className="text-5xl text-gray-500 mb-4" />
          <h3 className="text-xl font-medium mb-2">Unbeatable prices</h3>
          <p>For our materials and quality you won’t find better prices anywhere.</p>
        </div>
        {/* Fourth Feature */}
        <div className="w-full md:w-1/2 lg:w-1/4 flex flex-col items-center text-center">
          <FaLeaf className="text-5xl text-gray-500 mb-4" />
          <h3 className="text-xl font-medium mb-2">Recycled packaging</h3>
          <p>We use 100% recycled packaging to ensure our footprint is manageable.</p>
        </div>
      </div>
    </div>
    </div>
  );
};