import { AuthContext } from 'context/authContext';
import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  const { user, logout } = useContext(AuthContext);

  const authLinks = (
    <>
      <NavLink
        to='/account'
        className='hover:text-gray-300 focus:outline-none mr-4'
      >
        ACCOUNT
      </NavLink>
      <button
        onClick={logout}
        className='hover:text-gray-300 focus:outline-none'
      >
        SIGN OUT
      </button>
    </>
  );

  return (
    <div className='flex justify-between items-center bg-lightslategray-900 py-4 px-10 shadow-md'>
      <NavLink to='/' className='text-2xl text-gray-400 font-bold select-none'>
        SOCIAL
      </NavLink>
      <div className='text-sm text-gray-400 font-bold'>
        {user ? (
          authLinks
        ) : (
          <NavLink
            to='/login'
            className='hover:text-gray-300 focus:outline-none'
          >
            SIGN IN
          </NavLink>
        )}
      </div>
    </div>
  );
};

export default Navbar;
