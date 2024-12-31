
import React from 'react';

export default function FeatureSection3(){
  return (
    <div className="container mx-auto py-8 px-4 bg-white my-12 rounded-lg flex flex-col md:flex-row items-center md:items-start gap-6">
      <div className="md:w-1/2">
        <img src="projectPics/Feature pic2.png" alt="Studio Image" className="w-full h-full object-cover rounded-lg" />
      </div>
      <div className="md:w-1/2 flex flex-col justify-center text-left">
        <h2 className="text-3xl font-bold mb-4 p-9 text-primary-900">Our service isn’t just personal, it’s actually
            <br />  hyper personally exquisite</h2>
        <p className="text-sm mb-8 p-9">
        When we started Avion, the idea was simple. Make high quality furniture affordable and available for the mass market.
        <br />
        <br />
         Handmade, and lovingly crafted furniture and homeware is what we live, breathe and design so our Chelsea boutique become the hotbed for the London interior design community.
        </p>
        
         <button className="self-start  bg-gray-400 px-6 py-2 ml-10 
          hover:text-primary-900">Get in Touch</button>

          <div>I can see you hu hu hu</div>
      </div>
      
    </div>
  );
};