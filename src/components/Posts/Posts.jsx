import React from 'react';
import { Link } from 'react-router-dom';
import { postedTime } from 'utils/dateFormat';
const Posts = ({ post, user, onLikePost, liked }) => {
  const submitLikedPost = (id) => {
    onLikePost(id);
  };

  const renderLikedButton = user ? (
    <span
      onClick={() => submitLikedPost(post.id)}
      className={`text-${
        liked ? 'blue' : 'gray'
      }-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-300 cursor-pointer hover:text-gray-200`}
    >
      <svg
        className='w-4 h-4 mr-1'
        stroke='currentColor'
        strokeWidth='2'
        fill='none'
        strokeLinecap='round'
        strokeLinejoin='round'
        viewBox='0 0 24 24'
      >
        <path d='M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5'></path>
      </svg>
      {post.likeCount}
    </span>
  ) : (
    <Link
      to='/login'
      className='text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-300 cursor-pointer hover:text-gray-200'
    >
      <svg
        className='w-4 h-4 mr-1'
        stroke='currentColor'
        strokeWidth='2'
        fill='none'
        strokeLinecap='round'
        strokeLinejoin='round'
        viewBox='0 0 24 24'
      >
        <path d='M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5'></path>
      </svg>
      {post.likeCount}
    </Link>
  );

  return (
    <div className='p-4 w-full md:w-1/2 lg:w-1/3'>
      <div className='h-full border-2 border-gray-500 rounded-lg overflow-hidden shadow-lg'>
        <div className='p-6'>
          <div className='flex justify-between'>
            <div className='mb-3'>
              <h1 className='title-font text-lg font-medium text-gray-400 '>
                {post.username.toUpperCase()}
              </h1>
              <span className='block text-xs text-gray-500'>
                {postedTime(post.createdAt)}
              </span>
            </div>
            <img
              className='w-8 h-8 rounded-full'
              src={`https://api.adorable.io/avatars/106/${post.username}@adorable.png`}
              alt='img'
            ></img>
          </div>
          <p className='leading-relaxed mb-3 text-gray-400 text-sm'>
            {post.body.length > 94
              ? `${post.body.substring(0, 95)}...`
              : post.body}
          </p>
          <div className='flex items-center flex-wrap '>
            <Link
              to={`post/${post.id}`}
              className='text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0'
            >
              See More
            </Link>
            {renderLikedButton}
            <Link
              to={`post/${post.id}`}
              className='text-gray-400 inline-flex items-center leading-none text-sm cursor-pointer hover:text-gray-200'
            >
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
              {post.commentCount}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Posts;
