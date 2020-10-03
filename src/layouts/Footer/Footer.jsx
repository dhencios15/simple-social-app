import React from 'react';

const Footer = () => {
  return (
    <footer className='text-gray-700 body-font relative bottom-0'>
      <div className='container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col'>
        <span className='flex title-font font-medium items-center md:justify-start justify-center text-gray-900'>
          <svg
            className='w-10 h-10 text-white p-2 bg-indigo-500 rounded-full'
            fill='none'
            stroke='currentColor'
            viewBox='0 0 24 24'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth={2}
              d='M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z'
            />
          </svg>
          <span className='ml-3 text-lg text-gray-400'>Sikma Aplikation</span>
        </span>
        <p className='text-sm text-gray-300 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4'>
          © 2020 dhencios.me —
          <a
            href='https://twitter.com/dhencios152'
            className='text-gray-600 ml-1'
            rel='noopener noreferrer'
            target='_blank'
          >
            @dhencios15
          </a>
        </p>
        <span className='inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start'>
          <span className='text-gray-500'>
            <svg
              fill='currentColor'
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth='2'
              className='w-5 h-5'
              viewBox='0 0 24 24'
            >
              <path d='M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z'></path>
            </svg>
          </span>
          <span className='ml-3 text-gray-500'>
            <svg
              fill='currentColor'
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth='2'
              className='w-5 h-5'
              viewBox='0 0 24 24'
            >
              <path d='M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z'></path>
            </svg>
          </span>
          <span className='ml-3 text-gray-500'>
            <svg
              fill='none'
              stroke='currentColor'
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth='2'
              className='w-5 h-5'
              viewBox='0 0 24 24'
            >
              <rect width='20' height='20' x='2' y='2' rx='5' ry='5'></rect>
              <path d='M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01'></path>
            </svg>
          </span>
          <span className='ml-3 text-gray-500'>
            <svg
              fill='currentColor'
              stroke='currentColor'
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth='0'
              className='w-5 h-5'
              viewBox='0 0 24 24'
            >
              <path
                stroke='none'
                d='M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z'
              ></path>
              <circle cx='4' cy='4' r='2' stroke='none'></circle>
            </svg>
          </span>
        </span>
      </div>
    </footer>
  );
};

export default Footer;
