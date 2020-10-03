import React from 'react';

const Statistics = () => {
  return (
    <section className='body-font'>
      <div className='container px-5 py-24 mx-auto'>
        <div className='flex flex-col text-center w-full mb-20'>
          <h1 className='sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-300'>
            Master Cleanse Reliac Heirloom
          </h1>
          <p className='lg:w-2/3 mx-auto leading-relaxed text-base text-gray-400'>
            Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical
            gentrify, subway tile poke farm-to-table. Franzen you probably
            haven't heard of them man bun deep jianbing selfies heirloom prism
            food truck ugh squid celiac humblebrag.
          </p>
        </div>
        <div className='flex flex-wrap -m-4 text-center'>
          <div className='p-4 md:w-1/4 sm:w-1/2 w-full'>
            <div className='border-2 border-gray-200 px-4 py-6 rounded-lg'>
              <svg
                fill='none'
                stroke='currentColor'
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                className='text-indigo-500 w-12 h-12 mb-3 inline-block'
                viewBox='0 0 24 24'
              >
                <path d='M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2'></path>
                <circle cx='9' cy='7' r='4'></circle>
                <path d='M23 21v-2a4 4 0 00-3-3.87m-4-12a4 4 0 010 7.75'></path>
              </svg>
              <h2 className='title-font font-medium text-3xl text-gray-400'>
                2.7K
              </h2>
              <p className='leading-relaxed text-gray-300'>Users</p>
            </div>
          </div>
          <div className='p-4 md:w-1/4 sm:w-1/2 w-full'>
            <div className='border-2 border-gray-200 px-4 py-6 rounded-lg'>
              <svg
                fill='none'
                stroke='currentColor'
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                className='text-indigo-500 w-12 h-12 mb-3 inline-block'
                viewBox='0 0 24 24'
              >
                <path d='M8 17l4 4 4-4m-4-5v9'></path>
                <path d='M20.88 18.09A5 5 0 0018 9h-1.26A8 8 0 103 16.29'></path>
              </svg>

              <h2 className='title-font font-medium text-3xl text-gray-400'>
                1.3K
              </h2>
              <p className='leading-relaxed text-gray-300'>Posts</p>
            </div>
          </div>
          <div className='p-4 md:w-1/4 sm:w-1/2 w-full'>
            <div className='border-2 border-gray-200 px-4 py-6 rounded-lg'>
              <svg
                className='text-indigo-500 w-12 h-12 mb-3 inline-block'
                fill='none'
                stroke='currentColor'
                viewBox='0 0 24 24'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5'
                />
              </svg>
              <h2 className='title-font font-medium text-3xl text-gray-400'>
                74
              </h2>
              <p className='leading-relaxed text-gray-300'>Likes</p>
            </div>
          </div>
          <div className='p-4 md:w-1/4 sm:w-1/2 w-full'>
            <div className='border-2 border-gray-200 px-4 py-6 rounded-lg'>
              <svg
                className='text-indigo-500 w-12 h-12 mb-3 inline-block'
                fill='none'
                stroke='currentColor'
                viewBox='0 0 24 24'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z'
                />
              </svg>
              <h2 className='title-font font-medium text-3xl text-gray-400'>
                46
              </h2>
              <p className='leading-relaxed text-gray-300'>Comments</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Statistics;
