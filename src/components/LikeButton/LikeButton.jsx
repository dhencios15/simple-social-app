import { useMutation } from '@apollo/react-hooks';
import { AuthContext } from 'context/authContext';
import { LIKE_POST_MUTATION } from 'graphql/mutations/post';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

const LikeButton = ({ postId, post }) => {
  const { user } = useContext(AuthContext);
  const [likePost] = useMutation(LIKE_POST_MUTATION);

  const liked =
    user && post.likes.find((like) => like.username === user.username)
      ? true
      : false;

  const renderLikedButton = user ? (
    <span
      onClick={() => likePost({ variables: { postId } })}
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
  return renderLikedButton;
};

export default LikeButton;
