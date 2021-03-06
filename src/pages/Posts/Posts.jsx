import React, { useContext, useState } from 'react';
import { useQuery } from '@apollo/react-hooks';
import { FETCH_POSTS_QUERY } from 'graphql/queries/getPost';
import { AuthContext } from 'context/authContext';

import PostCard from 'components/PostCard';
import ThemedSuspense from 'components/ThemedSuspense';
import CreatePost from 'components/CreatePost';

const Posts = () => {
  const [createPost, setCreatePost] = useState(false);
  const { loading, data } = useQuery(FETCH_POSTS_QUERY);
  const { user } = useContext(AuthContext);

  if (loading) return <ThemedSuspense />;
  const { getPosts } = data;

  return (
    <div className='container px-5 py-6 mx-auto'>
      <button
        onClick={() => setCreatePost(!createPost)}
        className={`ml-2 mb-${createPost ? '0' : '4'} flex text-white bg-${
          createPost ? 'red' : 'indigo'
        }-500 border-0 py-2 px-4 focus:outline-none hover:bg-indigo-600 rounded text-xs`}
      >
        {createPost ? '- Hide Create Post' : '+ Create Post'}
      </button>
      {user && createPost && <CreatePost />}

      <div className='flex flex-wrap -m-4'>
        {getPosts.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
};

export default Posts;
