import React from 'react';

const ErrorToast = ({ errors }) => {
  return (
    <div role='alert' className='mb-4'>
      <div className='border border-t-0 border-red-400 rounded-b bg-red-100 px-4 py-3 text-red-700'>
        <ul>
          {errors &&
            Object.values(errors).map((value) => <li key={value}>{value}</li>)}
        </ul>
      </div>
    </div>
  );
};

export default ErrorToast;
