import React from 'react';
import logo from '../logo.svg';
import image from '../image.png'
import backgroundImage from '../image.png';
import { BsArrowUpRight } from "react-icons/bs";

const Navbar = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '100vh',
        width: '100%',
      }}
    >
      <nav className="mx-5 bg-gray-800 bg-opacity-50 text-white rounded-b-xl">
        <div className="container mx-auto px-4 py-2 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <img src={logo} alt="Logo" className="h-16 w-16" />
            <h1 className="text-2xl font-semibold">Barista</h1>
          </div>
          <div className="space-x-10 flex items-center">
            <span className="hover:text-gray-300">Home</span>
            <span className="hover:text-gray-300">About</span>
            <span className="hover:text-gray-300">Our Menu</span>
            <span className="hover:text-gray-300">Reviews</span>
            <span className="hover:text-gray-300">Contact</span>
            <button
              type="button"
              className="flex items-center text-white bg-transparent border border-gray-300 focus:ring-4 focus:ring-gray-100 font-medium rounded-full text-sm px-5 py-2.5 me-2 mb-2 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
            >
              Reservation
              <BsArrowUpRight className="ml-2" />
            </button>
          </div>
        </div>
      </nav>
      
      <div className="flex flex-col items-center justify-center h-full text-center text-white space-y-5 relative">
        <div
          className="absolute bg-gray-900 bg-opacity-80 rounded"
          style={{
            clipPath: 'polygon(43% 0px, 88% 27%, 49% 100%, 1% 73%)',
            transform:'rotate(20deg)',
            width: '20%',  
            height: '50%',
            margin: '0 auto',
            padding: '80px 0',  
            top: '30%',   
            borderRadius:'100px'       
          }}
        />
        
        <div className="relative z-10 w-1/5">
          <h1 className="text-5xl font-mono mt-3 font-bold">Cafe Klang</h1>
          <p className="italic mt-3 mb-5 text-gray-400">Your favorite coffee for daily lives</p>
          <div className="flex  space-x-10">
            <button className="px-5 py-2 bg-gray-800 rounded-full text-white hover:bg-gray-700">
              Our Story
            </button>
            <button className="px-4 py-2 bg-orange-400 rounded-full text-white hover:bg-gray-700">
              Check Menu
            </button>
          </div>
        </div>
        
      </div>


      {/* //About */}
  <div className="bg-yellow-100 text-center text-black p-8">
  <div className="flex items-center justify-center space-x-6">
    <img src={image} alt="Cafe Klang" className="w-1/2 rounded-md" /> {/* Adjust the width as needed */}
    <div className="w-2/3 space-y-4">  {/* Container for text and button */}
      <p className="text-lg">
        Cafe Klang is a cozy cafe located in the heart of the city. We serve a variety of delicious coffee and snacks.
        At Cafe Klang, we believe in serving the best coffee and creating a memorable experience for our customers. 
        Join us to discover a world of rich flavors and delightful aromas.
      </p>
      <button className="px-5 py-2 rounded-full bg-transparent text-gray-900  hover:bg-orange-600  border-4 border-gray-500	">
        Meet Business
      </button>
    </div>
  </div>
</div>











    </div>
  );
};

export default Navbar;
