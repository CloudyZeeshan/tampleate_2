


import Link from 'next/link';

export default  function Cart() {
  const products = [
    { id: 1, name: 'Product 1', price: '$50.00', imgSrc: 'projectPics/Right Image.png', quantity: 1 },
    { id: 2, name: 'Product 2', price: '$35.00', imgSrc: 'projectPics/Silky Vase.png', quantity: 1 },
  ];

  const getTotalPrice = () => {
    return products.reduce((total, product) => total + parseFloat(product.price.slice(1)) * product.quantity, 0).toFixed(2);
  };

  return (
    <div className="container mx-auto py-8 px-4">
      <h1 className="text-center text-3xl font-bold mb-8">Your Shopping Cart</h1>
      <div className="grid grid-cols-1 gap-8">
        {products.map((product) => (
          <div key={product.id} className="flex justify-between items-center border p-4 rounded-lg">
            <img src={product.imgSrc} alt={product.name} className="w-24 h-24 object-cover rounded-lg mr-4" />
            <div className="flex flex-col">
              <h2 className="text-xl font-semibold mb-2">{product.name}</h2>
              <p className="text-gray-700 mb-2">{product.price}</p>
              <p className="text-gray-700 mb-2">Quantity: {product.quantity}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="text-right mt-8">
        <p className="text-2xl font-bold">Subtotal: ${getTotalPrice()}</p>
      </div>
      <div className="mt-4 text-center">
        <Link href="/checkout">
          <button className="bg-blue-950 text-white px-6 py-2 rounded-lg hover:bg-blue-800">Go to Checkout</button>
        </Link>
      </div>
    </div>
  );
};