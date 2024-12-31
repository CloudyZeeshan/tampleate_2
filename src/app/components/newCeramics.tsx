





import React from 'react';

const ceramics = [
  { id: 1, name: 'The Dandy Chair', price: '$45.00', imgSrc: 'projectPics/Right Image.png' },
  { id: 2, name: 'Rustic Vase Set', price: '$30.00', imgSrc: 'projectPics/Three Vase.png' },
  { id: 3, name: 'The Silky Vase', price: '$20.00', imgSrc: 'projectPics/Silky Vase.png' },
  { id: 4, name: 'The Lucy Lamp', price: '$25.00', imgSrc: 'projectPics/Lucy Lamp.png' },
];

export default function NewCeramics(){
  return (
    <div className="container mx-auto  px-6 py-12 ">
      <h2 className="text-center text-3xl font-bold  mb-8">New Ceramics</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {ceramics.map((item) => (
          <div key={item.id} className="flex flex-col items-center">
            <img src={item.imgSrc} alt={item.name} className="w-full h-96 object-cover rounded-lg mb-4" />
            <h3 className="text-lg font-semibold">{item.name}</h3>
            <p className="text-gray-700">{item.price}</p>
          </div>
        ))}
      </div>
        
      <div className="flex justify-center items-center mt-9 mb-9 text-center hover:text-primary-900 bg-gray-400 p-3 w-64 mx-auto">
         <button> view collection 
            
         </button>
        
        </div>

    </div>
  );
};