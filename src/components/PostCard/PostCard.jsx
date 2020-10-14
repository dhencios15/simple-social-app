import LikeButton from 'components/LikeButton';
import React from 'react';
import { Link } from 'react-router-dom';
import { postedTime } from 'utils/dateFormat';

const PostCard = ({ post }) => {
  return (
    <div className='xl:w-1/4 md:w-1/2 p-4'>
      <div className='bg-gray-700 p-6 rounded-lg shadow-lg'>
        <img
          className='h-40 rounded w-full object-cover object-center mb-6'
          src={`https://robohash.org/${post.username}`}
          alt='content'
        />
        <h3 className='tracking-widest text-gray-300 text-xs font-medium title-font'>
          {post.username.toUpperCase()}
        </h3>
        <div className='flex-col'>
          {/* <h2 className='text-lg text-gray-900 font-medium title-font'>
            Chichen Itza
          </h2> */}
          <span className='text-xs text-gray-500 title-font mb-4'>
            {postedTime(post.createdAt)}
          </span>
        </div>
        <p className='leading-relaxed text-base text-gray-400'>
          {post.body.length > 85
            ? `${post.body.substring(0, 85)}...`
            : post.body}
        </p>
        <div className='flex items-center flex-wrap '>
          <Link
            to={`post/${post.id}`}
            className='text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0'
          >
            See More
          </Link>
          <LikeButton postId={post.id} post={post} />
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
  );
};

export default PostCard;
