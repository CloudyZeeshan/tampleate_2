import React from "react";
export default function EmailSignup(){
  return (
    <div className="w-full bg-gray-200 py-12">
      <div className="max-w-screen-lg  mx-auto  py-8  px-4 bg-white p-12 rounded-sm text-center  ">

        <h2 className="text-3xl font-bold mb-4">
          Join the club and get the benefits
        </h2>
        <p className="text-sm mb-8">
          Sign up for our newsletter and receive exclusive offers on new
          <br /> ranges, sales, pop-up stores, and more.
        </p>
        <form className="flex flex-col items-center gap-4">
          <div className="relative w-full max-w-md">
          <input type="email" 
          placeholder="Enter your @email.com"
           className="w-full px-4 py-2 border bg-gray-100 border-gray-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-primary-900 pr-28" /> 
           <button type="submit" className="absolute right-1 top-1/2 
          transform -translate-y-1/2 text-white px-4 py-2 rounded-sm  bg-primary-900 hover:bg-blue-800"> Sign Up </button>
          </div>
        </form>
      </div>
    </div>
  );
};