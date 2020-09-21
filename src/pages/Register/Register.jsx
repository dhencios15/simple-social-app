import React, { useContext, useState } from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { useMutation } from '@apollo/react-hooks';
import { yupResolver } from '@hookform/resolvers';

import { schemaRegister } from 'utils/authValidation';
import { AuthContext } from 'context/authContext';
import { REGISTER_USER } from 'graphql/mutations/auth';

import BaseInput from 'components/shared/BaseInput';
import ErrorToast from 'layouts/ErrorToast/ErrorToast';

const Register = () => {
  const history = useHistory();
  const context = useContext(AuthContext);
  const [regError, setRegError] = useState({});

  const { register, handleSubmit, errors } = useForm({
    mode: 'onBlur',
    resolver: yupResolver(schemaRegister),
  });

  const [addUser, { loading }] = useMutation(REGISTER_USER, {
    update(_, { data }) {
      context.login(data.register);
      history.push('/');
    },
    onError(error) {
      setRegError(error.graphQLErrors[0].extensions.exception.errors);
    },
  });

  const onSubmit = (data, e) => {
    addUser({ variables: data });
    e.target.reset();
  };

  return (
    <div className='container px-5 py-10 mx-auto flex flex-col'>
      <div className='lg:w-4/6 mx-auto justify-center items-center'>
        <form
          autoComplete='false'
          onSubmit={handleSubmit(onSubmit)}
          className='container mx-auto md:w-1/2 flex flex-col w-full md:py-8 mt-8 md:mt-0 rounded-lg p-10 shadow-md'
        >
          {Object.keys(regError).length > 0 && <ErrorToast errors={regError} />}
          <h2 className='text-gray-300 text-lg mb-1 font-medium title-font'>
            SIGN UP
          </h2>
          <p className='leading-relaxed mb-5 text-gray-400'>
            Post-ironic portland shabby chic echo park, banjo fashion axe
          </p>
          <BaseInput
            hasError={errors.username?.message ? 'red-600' : 'gray-400'}
            placeholder='Username'
            type='text'
            register={register}
            name='username'
          />
          <p className='text-sm text-red-600 -mt-1 mb-2'>
            {errors.username?.message}
          </p>
          <BaseInput
            hasError={errors.email?.message ? 'red-600' : 'gray-400'}
            placeholder='Email'
            type='email'
            register={register}
            name='email'
          />
          <p className='text-sm text-red-600 -mt-1 mb-2'>
            {errors.email?.message}
          </p>
          <BaseInput
            hasError={errors.password?.message ? 'red-600' : 'gray-400'}
            placeholder='Password'
            type='password'
            name='password'
            register={register}
          />
          <p className='text-sm text-red-600 -mt-1 mb-2'>
            {errors.password?.message}
          </p>
          <BaseInput
            hasError={errors.confirmPassword?.message ? 'red-600' : 'gray-400'}
            placeholder='Password'
            type='password'
            name='confirmPassword'
            register={register}
          />
          <p className='text-sm text-red-600 -mt-1 mb-2'>
            {errors.confirmPassword?.message}
          </p>
          <button
            disabled={loading}
            type='submit'
            className='text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg'
          >
            {loading ? 'LOADING...' : 'SIGN UP'}
          </button>
          <p className='text-xs text-gray-400 mt-3'>
            Already have an account?
            <NavLink className='ml-2 font-semibold text-gray-300' to='/login'>
              SIGN IN
            </NavLink>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Register;
