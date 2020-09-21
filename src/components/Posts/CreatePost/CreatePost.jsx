import React from 'react';
import { useMutation } from '@apollo/react-hooks';
import { useForm } from 'react-hook-form';

import { yupResolver } from '@hookform/resolvers';
import { CREATE_POST_MUTATION } from 'graphql/mutations/post';
import { FETCH_POSTS_QUERY } from 'graphql/queries/getPost';
import { schemaPost } from 'utils/postValidation';

const CreatePost = () => {
  const { register, handleSubmit, errors } = useForm({
    mode: 'onBlur',
    resolver: yupResolver(schemaPost),
  });

  const [createPost, { error }] = useMutation(CREATE_POST_MUTATION, {
    update(proxy, result) {
      const data = proxy.readQuery({
        query: FETCH_POST_QUERY,
      });
      data.getPosts = [result.data.createPost, ...data.getPosts];
      proxy.writeQuery({ query: FETCH_POSTS_QUERY, data });
    },
  });

  const onSubmit = (data, e) => {
    createPost({ variables: data });
    e.target.reset();
  };

  return (
    <div className='mb-4 py-2 border-b-2'>
      <h3 className='p-2 text-gray-300'>CREATE A POST:</h3>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className='p-2 w-full'>
          <textarea
            className='w-full bg-gray-300 rounded border border-gray-700 text-black focus:outline-none h-32 focus:border-indigo-500 text-base px-4 py-2 block'
            placeholder='Message'
            ref={register}
            name='body'
          ></textarea>
          <p className='text-sm text-red-600 -mt-1 mb-2'>
            {errors.body?.message || error?.graphQLErrors[0].message}
          </p>
        </div>
        <div className='p-2 w-full'>
          <button className='flex text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg'>
            POST
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreatePost;
