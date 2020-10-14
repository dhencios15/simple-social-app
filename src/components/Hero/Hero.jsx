import React from 'react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className='text-gray-700 body-font mx-20'>
      <div className='container mx-auto flex px-5 py-10 md:flex-row flex-col items-center'>
        <div className='lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center'>
          <h1 className='title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-300'>
            Simple Social App
            <br className='hidden lg:inline-block' />
            Post Anything you want
          </h1>
          <p className='mb-8 leading-relaxed text-gray-400'>
            Lorem Copper mug try-hard pitchfork pour-over freegan heirloom
            neutra air plant cold-pressed tacos poke beard tote bag. Heirloom
            echo park mlkshk tote bag selvage hot chicken authentic tumeric
            truffaut hexagon try-hard chambray.
          </p>
          <div className='flex justify-center'>
            <Link
              to='/register'
              className='inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg'
            >
              Sign Up
            </Link>
            <button className='ml-4 inline-flex text-gray-700 bg-gray-200 border-0 py-2 px-6 focus:outline-none hover:bg-gray-300 rounded text-lg'>
              Get Start
            </button>
          </div>
        </div>
        <div className='lg:max-w-lg lg:w-full md:w-1/2 w-5/6'>
          <img
            className='object-cover object-center rounded shadow-xl opacity-75'
            alt='hero'
            src='https://image.freepik.com/free-vector/woman-addicted-social-media_23-2148393337.jpg'
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
