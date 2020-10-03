import React from 'react';

const AuthHero = () => {
  return (
    <div className='lg:w-2/3 md:w-1/2 rounded-lg overflow-hidden sm:mr-10 p-2 flex items-end justify-start relative '>
      <div className='flex flex-wrap w-full bg-gray-100 py-32 px-10 relative mb-4 rounded-lg overflow-hidden shadow-xl'>
        <img
          alt='gallery'
          className='w-full object-cover h-full object-center block opacity-50 absolute inset-0'
          src='https://image.freepik.com/free-vector/it-company-time-management-flat-concept_81534-2889.jpg'
        />
        <div className='text-center relative z-10 w-full'>
          <h2 className='text-2xl text-gray-900 font-medium title-font mb-2'>
            Shooting Stars
          </h2>
          <p className='leading-relaxed text-gray-900 font-semibold'>
            Skateboard +1 mustache fixie paleo lumbersexual.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AuthHero;
