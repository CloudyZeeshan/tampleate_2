import React from 'react';

const popularProducts = [
  { id: 1, name: 'The Poplar suede sofa', price: '$50.00', imgSrc: 'projectPics/Sofa pic.png' },
  { id: 2, name: 'The Dandy chair', price: '$35.00', imgSrc: 'projectPics/Right Image.png' },
  { id: 3, name: 'The Dandy chair', price: '$20.00', imgSrc: 'projectPics/Dandy chair.png' },
];

export default  function PopularProducts() {
  return (
    <div className="container mx-auto py-8 px-4">
      <h2 className="text-center text-3xl font-bold mb-8">Our Popular Products</h2>
      <div className="flex flex-wrap gap-6">
        <div className="w-full lg:w-1/2 flex flex-col items-center">
          <img src={popularProducts[0].imgSrc} alt={popularProducts[0].name} className="w--full h-96 object-cover rounded-lg mb-4" />
          <h3 className="text-lg font-semibold">{popularProducts[0].name}</h3>
          <p className="text-gray-700">{popularProducts[0].price}</p>
        </div>
        <div className="w-full lg:w-1/3 flex flex-col gap-6">
          <div className=" flex items-center justify-center gap-6">
            <div className=" flex flex-col items-center">
              <img src={popularProducts[1].imgSrc} alt={popularProducts[1].name} className="w-full h-96 object-cover rounded-lg mb-4" />
              <h3 className="text-lg font-semibold">{popularProducts[1].name}</h3>
              <p className="text-gray-700">{popularProducts[1].price}</p>
            </div>
            <div className=" flex flex-col items-center">
              <img src={popularProducts[2].imgSrc} alt={popularProducts[2].name} className="w-full h-96 object-cover rounded-lg mb-4" />
              <h3 className="text-lg font-semibold">{popularProducts[2].name}</h3>
              <p className="text-gray-700">{popularProducts[2].price}</p>
            </div>
            
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center mt-9 mb-9 text-center hover:text-primary-900 bg-gray-400 p-3 w-64 mx-auto">
         <button> view collection 
            
         </button>
        
        </div>

    </div>
  );
};