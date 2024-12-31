'use client'

// components/TopHeader.tsx
import React, { useState } from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import { TbTruckDelivery } from "react-icons/tb";

export default function TopHeader()  {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className="bg-blue-950 text-white py-2 px-2 flex justify-between items-center">
      <div className="flex items-center gap-2 text-sm ">
      <TbTruckDelivery  className="w-5 h-5" />
        <span>Free delivery on all orders over £50 with code EASTER at checkout</span>
      </div >
      <button onClick={() => setIsVisible(false)}>
        <AiOutlineClose className="w-5 h-5  " />
      </button>
    </div>
  );
};