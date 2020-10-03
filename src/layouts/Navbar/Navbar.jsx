import React, { useContext } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { useMutation } from '@apollo/react-hooks';
import { yupResolver } from '@hookform/resolvers';

import { LOGIN_USER } from 'graphql/mutations/auth';
import { AuthContext } from 'context/authContext';
import { schemaLogin } from 'utils/authValidation';

const Navbar = () => {
  const { user, logout, login } = useContext(AuthContext);
  const history = useHistory();
  const { register, handleSubmit } = useForm({
    mode: 'onBlur',
    resolver: yupResolver(schemaLogin),
  });

  const [addUser, { loading }] = useMutation(LOGIN_USER, {
    update(_, { data: { login: userData } }) {
      login(userData);
      history.push('/');
    },
    onError() {
      history.push('/register');
    },
  });

  const onSubmit = (data, e) => {
    addUser({ variables: data });
    e.target.reset();
  };

  return (
    <nav className='flex justify-center md:justify-between items-center py-4 md:px-10 border-b mx-20'>
      <Link to='/' className='flex text-gray-400 items-center'>
        <svg
          className='w-10 h-10 mr-1'
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
        <h1 className='text-2xl select-none'>HELLO</h1>
      </Link>
      {user ? (
        <button
          onClick={logout}
          className='group relative flex justify-center py-2 px-4 border border-transparent text-sm leading-5 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition duration-150 ease-in-out'
        >
          LOGOUT
        </button>
      ) : (
        <form
          autoComplete='false'
          onSubmit={handleSubmit(onSubmit)}
          className='rounded-lg overflow-hidden shadow-md md:flex hidden'
        >
          <div className='mr-1 '>
            <input
              autoComplete='new-password'
              placeholder='Username'
              type='text'
              name='username'
              className='rounded-lg appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 focus:z-10 sm:text-sm sm:leading-5'
              ref={register}
            />
          </div>
          <div className='mr-1'>
            <input
              autoComplete='new-password'
              placeholder='Password'
              type='password'
              name='password'
              className='rounded-lg appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 focus:z-10 sm:text-sm sm:leading-5'
              ref={register}
            />
          </div>
          <button
            disabled={loading}
            type='submit'
            className={`${
              loading && 'cursor-wait'
            } group relative flex justify-center py-2 px-4 border border-transparent text-sm leading-5 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition duration-150 ease-in-out`}
          >
            {loading ? 'LOADING...' : 'SIGN IN'}
          </button>
        </form>
      )}
    </nav>
  );
};

export default Navbar;
