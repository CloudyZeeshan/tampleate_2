'use client'

import { useParams } from 'next/navigation';
import { useState, useEffect } from 'react';

const products = [

    { id:1, name: 'Product ', price: '$50.00', imgSrc: '/projectPics/Right Image.png', description: 'This is a great product.' }, 
    { id: 2, name: 'Product 2', price: '$35.00', imgSrc: '/projectPics/Three Vase.png', description: 'This is a great product.' }, 
    { id: 3, name: 'Product 3', price: '$20.00', imgSrc: '/projectPics/Silky Vase.png', description: 'This is a great product.' }, 
    { id: 4, name: 'Product 4', price: '$25.00', imgSrc: '/projectPics/Lucy Lamp.png', description: 'This is a great product.' },
    { id: 5, name: 'Product 5', price: '$45.00', imgSrc: '/projectPics/product1.png', description: 'This is a great product.' },
     { id: 6, name: 'Product 6', price: '$30.00', imgSrc: '/projectPics/product2.png', description: 'This is a great product.' },
     { id: 7, name: 'Product 7', price: '$22.00', imgSrc: '/projectPics/product3.png', description: 'This is a great product.' },
     { id: 8, name: 'Product 8', price: '$40.00', imgSrc: '/projectPics/product4.png', description: 'This is a great product.' }, 
        { id: 9, name: 'Product 9', price: '$38.00', imgSrc: '/projectPics/product5.png', description: 'This is a great product.' }, 
        { id: 10, name: 'Product 10', price: '$28.00', imgSrc: '/projectPics/product6.png', description: 'This is a great product.' },
         { id: 11, name: 'Product 11', price: '$32.00', imgSrc: '/projectPics/product7.png', description: 'This is a great product.' },
    { id: 12, name: 'Product 12', price: '$32.00', imgSrc: '/projectPics/Dandy chair.png', description: 'This is a great product.' },
  // Add other products here
];

const ProductDetail: React.FC = () => {
  const { id } = useParams();
  const [product, setProduct] = useState<{ id: number; name: string; price: string; imgSrc: string; description: string } | null>(null);

  useEffect(() => {
    if (id) {
      const foundProduct = products.find((product) => product.id === parseInt(id as string));
      setProduct(foundProduct || null);
    }
  }, [id]);

  if (!product) return <p className="p-8">Loading...</p>;

  return (
    <div className="container mx-auto py-8 px-4 flex flex-col md:flex-row gap-8">
      <div className="md:w-1/2">
        <img src={product.imgSrc} alt={product.name} className="w-96 h-96 object-cover rounded-lg" />
      </div>
      <div className="md:w-1/2 flex flex-col justify-between">
        <div>
          <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
          <p className="text-2xl text-gray-700 mb-4">{product.price}</p>
          <p className="text-lg mb-8">{product.description}</p>
        </div>
        <div>
          <label className="block mb-2 text-lg font-semibold" htmlFor="quantity">
            Quantity
          </label>
          <input
            type="number"
            id="quantity"
            name="quantity"
            defaultValue={1}
            min={1}
            className="w-full p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button className="bg-blue-950 text-white px-6 py-2 rounded-lg hover:bg-blue-800">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;