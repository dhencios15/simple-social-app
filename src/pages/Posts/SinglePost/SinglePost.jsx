import React, { memo, useContext } from 'react';
import { useMutation, useQuery } from '@apollo/react-hooks';
import { yupResolver } from '@hookform/resolvers';
import { useForm } from 'react-hook-form';

import { SUBMIT_COMMENT_MUTATION } from 'graphql/mutations/post';
import { FETCH_POST_QUERY } from 'graphql/queries/getPost';
import { AuthContext } from 'context/authContext';
import { displayDate, postedTime } from 'utils/dateFormat';
import { schemaPost } from 'utils/postValidation';
import LikeButton from 'components/LikeButton';

const SinglePost = ({ match }) => {
  const { register, handleSubmit, errors } = useForm({
    mode: 'onBlur',
    resolver: yupResolver(schemaPost),
  });
  const { postId } = match.params;
  const { user } = useContext(AuthContext);

  const { data } = useQuery(FETCH_POST_QUERY, {
    variables: {
      postId,
    },
  });

  const [submitComment] = useMutation(SUBMIT_COMMENT_MUTATION);

  const onSubmit = (data, e) => {
    submitComment({
      variables: {
        postId,
        body: data.body,
      },
    });
    e.target.reset();
  };

  if (!data) return <div>Loading ...</div>;
  const { getPost } = data;
  return (
    <div className='container px-5 py-10 mx-auto flex flex-col'>
      <div className='lg:w-4/6 mx-auto'>
        <div className='flex flex-col sm:flex-row mt-10'>
          <div className='sm:w-1/3 text-center sm:pr-8 sm:py-8'>
            <img
              className='w-20 h-20 rounded-full inline-flex items-center justify-center bg-gray-200 text-gray-500'
              src={`https://api.adorable.io/avatars/106/${getPost.username}@adorable.png`}
              alt='Avatar of Jonathan Reinink'
            ></img>
            <div className='flex flex-col items-center text-center justify-center'>
              <h2 className='font-medium title-font mt-4 text-gray-400 text-lg'>
                {getPost.username}
              </h2>
              <div className='w-12 h-1 bg-indigo-500 rounded mt-2 mb-4'></div>
              <p className='text-base text-gray-400'>
                {displayDate(getPost.createdAt)}
              </p>
            </div>
          </div>
          <div className='relative sm:w-2/3 sm:pl-8 sm:py-8 sm:border-l border-gray-300 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-center sm:text-left'>
            <div className='absolute top-0 right-0 border-b-4 border-dotted border-gray-400 w-5 cursor-pointer mt-2' />
            <p className='leading-relaxed text-lg mb-4 text-gray-300'>
              {getPost.body}
            </p>
            <div className='flex items-center border-t-2 pt-2'>
              <LikeButton postId={postId} post={getPost} />
              <button className='text-gray-400 inline-flex items-center hover:text-gray-300'>
                <svg
                  className='w-4 h-4 mr-1'
                  stroke='currentColor'
                  strokeWidth='2'
                  fill='none'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  viewBox='0 0 24 24'
                >
                  <path d='M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z'></path>
                </svg>
                {getPost.commentCount}
              </button>
            </div>
            {user && (
              <div className='mb-4'>
                <form onSubmit={handleSubmit(onSubmit)}>
                  <div className='pt-2 w-full'>
                    <textarea
                      className='w-full bg-gray-300 rounded border border-gray-700 text-black focus:outline-none h-20 focus:border-indigo-500 text-base px-4 py-2 block'
                      placeholder='Message'
                      name='body'
                      ref={register}
                    ></textarea>
                    <p className='text-sm text-red-600 -mt-1 mb-2'>
                      {errors.body?.message}
                    </p>
                  </div>
                  <div className='pb-2 w-full'>
                    <button className='flex text-white bg-indigo-500 border-0 py-2 px-4 focus:outline-none hover:bg-indigo-600 rounded text-xs'>
                      COMMENT
                    </button>
                  </div>
                </form>
              </div>
            )}
            {getPost.comments.length > 0 &&
              getPost.comments.map((comment) => (
                <div
                  key={comment.id}
                  className='flex-col w-full my-3 p-4 border border-gray-400 rounded-lg'
                >
                  <div className='flex flex-row'>
                    <img
                      className='w-5 h-5 mr-1 rounded-full'
                      src={`https://api.adorable.io/avatars/106/${comment.username}@adorable.png`}
                      alt='img'
                    ></img>
                    <h2 className='text-sm text-gray-400 font-medium title-font'>
                      {comment.username.toUpperCase()}
                    </h2>
                  </div>
                  <div className='flex flex-col justify-start'>
                    <p className='text-xs text-gray-500 mb-2'>
                      {postedTime(comment.createdAt)}
                    </p>
                    <p className='leading-relaxed text-gray-300'>
                      {comment.body}
                    </p>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default memo(SinglePost);
