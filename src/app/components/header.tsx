
// components/Header.tsx
"use client";
import React, { useState } from "react";
import Link from "next/link";
import { IoSearch, IoCart, IoPerson, IoMenu } from "react-icons/io5";

export default function Header() {
const [isOpen, setIsOpen] = useState(false);

const toggleMenu = () => {
setIsOpen(!isOpen);
};

const categories = [
"All products",
"Chair",
"Plant pots",
"Ceramics",
"Table",
"Crockery",
"Tableware",
"Cutlery",
];

return (
<header className="bg-white border-b">
<div className="container mx-auto px-6 py-4 flex justify-between items-center">
<Link href="/" className="text-2xl font-Semibold">
Avion
</Link>
<nav className="hidden md:flex space-x-6">
<Link href="/" className="text-gray-700 hover:text-blue-500">
Home
</Link>
<Link href="/about" className="text-gray-700 hover:text-blue-500">
About
</Link>
<Link href="/contact" className="text-gray-700 hover:text-blue-500">
Contact
</Link>
<Link href="/allProducts" className="text-gray-700 hover:text-blue-500">
All Products
</Link>
<Link href="/cart" className="text-gray-700 hover:text-blue-500">
Cart
</Link>
</nav>
<div className="hidden md:flex items-center space-x-4">
<IoSearch className="text-2xl text-gray-700 hover:text-blue-500 cursor-pointer" />
<IoCart className="text-2xl text-gray-700 hover:text-blue-500 cursor-pointer" />
<IoPerson className="text-2xl text-gray-700 hover:text-blue-500 cursor-pointer" />
</div>
<button className="md:hidden text-2xl" onClick={toggleMenu}>
<IoMenu />
</button>
</div>
{isOpen && (
<div className="md:hidden">
<nav className="flex flex-col space-y-2 px-6 py-4">
<Link href="/" className="text-gray-700 hover:text-blue-500">
Home
</Link>
<Link href="/about" className="text-gray-700 hover:text-blue-500">
About
</Link>
<Link href="/contact" className="text-gray-700 hover:text-blue-500">
Contact
</Link>
<Link href="/allProducts" className="text-gray-700 hover:text-blue-500">
All Products
</Link>
<Link href="/cart" className="text-gray-700 hover:text-blue-500">
Cart
</Link>
<div className="flex space-x-4 py-2">
<IoSearch className="text-2xl text-gray-700 hover:text-blue-500 cursor-pointer" />
<IoCart className="text-2xl text-gray-700 hover:text-blue-500 cursor-pointer" />
<IoPerson className="text-2xl text-gray-700 hover:text-blue-500 cursor-pointer" />
</div>
</nav>
</div>
)}
<div className="border-t border-gray-300">
<div className="container mx-auto px-6 py-2 flex overflow-x-auto space-x-6 justify-center bg-gray-100">
{categories.map((category, index) => (
<span key={index} className="text-gray-700 hover:text-blue-500 cursor-pointer">
{category}
</span>
))}
</div>
</div>
</header>
);
}