import Link from "next/link";
import ProductPageHeader from "../pageHeaders/productPage";

const products = [
  // Your products array here...
  {
    id: 1,
    name: "Product 1",
    price: "$50.00",
    imgSrc: "projectPics/Right Image.png"
    
  },
  {
    id: 2,
    name: "Product 2",
    price: "$35.00",
    imgSrc: "projectPics/Three Vase.png"
    
  },
  {
    id: 3,
    name: "Product 3",
    price: "$20.00",
    imgSrc: "projectPics/Lucy lamp.png",

  },
  {
    id: 4,
    name: "Product 4",
    price: "$25.00",
    imgSrc: "projectPics/Silky Vase.png",
    
  },
  {
    id: 5,
    name: "Product 5",
    price: "$45.00",
    imgSrc: "projectPics/product1.png",
   
  },
  {
    id: 6,
    name: "Product 6",
    price: "$30.00",
    imgSrc: "projectPics/product2.png",
   
  },
  {
    id: 7,
    name: "Product 7",
    price: "$22.00",
    imgSrc: "projectPics/product3.png",

  },
  {
    id: 8,
    name: "Product 8",
    price: "$40.00",
    imgSrc: "projectPics/product4.png",
  
  },
  {
    id: 9,
    name: "Product 9",
    price: "$38.00",
    imgSrc: "projectPics/product5.png",
  
  },
  {
    id: 10,
    name: "Product 10",
    price: "$28.00",
    imgSrc: "projectPics/product6.png",

  },
  {
    id: 11,
    name: "Product 11",
    price: "$32.00",
    imgSrc: "projectPics/product7.png",
  
  },
  {
    id: 12,
    name: "Product 12",
    price: "$36.00",
    imgSrc: "projectPics/Dandy chair.png",
  
  },
];

export default  function Products(){
  return (
    <div>
        <ProductPageHeader/>
    <div className="container mx-auto py-8 px-4">
      <h1 className="text-center text-3xl font-bold mb-8">Products</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {products.map((product) => (
          <div key={product.id} className="border p-4 rounded-lg">
            <img
              src={product.imgSrc}
              alt={product.name}
              className="w-full h-80 object-cover mb-4 rounded-lg"
            />
            <h2 className="text-xl font-semibold mb-2">{product.name}</h2>
            <p className="text-gray-700 mb-4">{product.price}</p>
            <Link href={`/product/${product.id}`} className="text-blue-500">
              {" "}
              View Details{" "}
            </Link>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
};