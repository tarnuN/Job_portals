import React, { useContext, useRef } from 'react';
import { assets } from '../assets/assets';
import { AppContext } from '../context/AppContext';

const Hero = () => {

  const { setSearchFilter, setIsSearched } = useContext(AppContext);
  const titleRef = useRef(null);
  const locationRef = useRef(null);

  const onSearch=() =>{
      setSearchFilter({
        title:titleRef.current.value,
        location:locationRef.current.value,
      })
      setIsSearched(true);
      console.log({
        title:titleRef.current.value,
        location:locationRef.current.value,

      });
  }

  return (
    <div className='container 2xl:px-20 mx-auto my-10'>
      <div className='bg-gradient-to-r from-purple-800 to-purple-950 text-white text-center mx-2 rounded-2xl py-10 px-4'>
        <h2 className='text-2xl md:text-3xl lg:text-4xl font-semibold mb-4'>Over 10,000+ Jobs to Apply</h2>
        <p className='mb-8 max-w-xl mx-auto text-sm font-light px-5 leading-relaxed'>
          Your Next Big Career Move Starts Right Here – Explore The Best Job Opportunities And Take The First Step Toward Your Future!
        </p>

        <div className='flex flex-col sm:flex-row items-center bg-white rounded-xl text-gray-600 max-w-2xl mx-auto p-2 gap-2 shadow-md'>
          
          <div className='flex items-center flex-1 px-3 py-2'>
            <img className='h-4 sm:h-5 mr-2' src={assets.search_icon} alt="" />
            <input type="text" placeholder='Software' className='text-sm outline-none w-full' ref={titleRef} />
          </div>

          <div className='flex items-center flex-1 px-3 py-2'>
            <img className='h-4 sm:h-5 mr-2' src={assets.location_icon} alt="" />
            <input type="text" placeholder='hyderabad' className='text-sm outline-none w-full' ref={locationRef}/>
          </div>

          <button  onClick={onSearch} className='bg-blue-600 text-white px-5 py-2 rounded-md hover:bg-blue-700 transition-all text-sm font-medium'>
            Search
          </button>
        </div>
      </div>

      <div className='border border-gray-300 shadow-md mx-2 mt-5 p-6 rounded'>
        <div className='flex justify-center gap-10 lg:gap-16 flex-wrap'>
          <p className='font-medium'>
            Trusted by
          </p>
          <img className='h-6' src={assets.microsoft_logo} alt="" />
          <img className='h-6' src={assets.walmart_logo} alt="" />
          <img className='h-6' src={assets.accenture_logo} alt="" />
          <img className='h-6' src={assets.samsung_logo} alt="" />
          <img className='h-6' src={assets.amazon_logo} alt="" />
          <img className='h-6' src={assets.adobe_logo} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
