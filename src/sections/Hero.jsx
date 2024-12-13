import React, { useEffect, useState } from 'react';

import {artists } from "../constants";
import { Button } from "../components";
import { headerLogo } from "../assets/images";

import { useNavigate } from 'react-router-dom';


const Hero = () => {
  const navigate = useNavigate();

  const [artistImg, setArtistImg] = useState(artists[0]);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleClick = () => {
    
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % artists.length);
    }, 2000);

    return () => clearInterval(interval);
  }, [artists.length]);

  useEffect(() => {
    setArtistImg(artists[currentIndex].artist);
  }, [currentIndex, artists]);

  return (
    <section
      id='home'
      className='w-full pt-6 pb-10  flex xl:flex-row flex-col justify-center min-h-screen max-container first-letter '
    >
      <div className='relative xl:w-2/5 flex flex-col mt-[100px] items-start sm:px-10 w-full  max-xl:padding-x '>
        <p className='text-xl font-montserrat text-green-1000'>
        Connect with Top Virtual Ai Nutritionists

        </p>

        <h1 className='xl:bg-white z-10 mt-10 font-palanquin max-sm:text-[32px] max-sm:leading-[20px] font-bold'>
          <span className='xl:bg-white xl:whitespace-nowrap relative z-10 pr-10'>
          Your Hub for 
 
          </span>
          <br />
          <span className='text-black inline-block mt-3'>Personalized Nutrition Support</span> 
        </h1>
        <p className='font-montserrat text-green-1000 text-lg leading-8 mt-6 mb-14 sm:max-w-sm'>
        Explore our advanced AI-powered platform for customized nutrition guidance. Whether you need personalized diet plans, wellness tips, or insights tailored to your goals, let our intelligent system guide you on your journey to better health.
        </p>

        <Button onClick={handleClick} label="get Started" backgroundColor="black"></Button>

      
      </div>
      <div className='relative xl:w-2/5   items-start w-full  max-xl:padding-x'>
        <img src={headerLogo} alt="" />
      </div>



    </section>
  );
};

export default Hero;
