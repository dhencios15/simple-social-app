import React, { useContext } from 'react';
import Posts from 'components/Posts';
import { FETCH_POSTS_QUERY } from 'graphql/queries/getPost';
import { useMutation, useQuery } from '@apollo/react-hooks';
import { LIKE_POST_MUTATION } from 'graphql/mutations/post';
import { AuthContext } from 'context/authContext';
import CreatePost from 'components/Posts/CreatePost';

const Home = () => {
  const { loading, data } = useQuery(FETCH_POSTS_QUERY);
  const [likePost] = useMutation(LIKE_POST_MUTATION);
  const { user } = useContext(AuthContext);

  const onLikePost = (postId) => {
    likePost({ variables: { postId } });
  };

  if (loading) return <div>Loading...</div>;
  const { getPosts } = data;

  return (
    <main className='container px-5 py-8 mx-auto'>
      {user && <CreatePost />}
      <div className='flex flex-wrap -m-4'>
        {getPosts.map((post) => (
          <Posts
            key={post.id}
            liked={
              user && post.likes.find((like) => like.username === user.username)
                ? true
                : false
            }
            post={post}
            onLikePost={onLikePost}
            user={user}
          />
        ))}
      </div>
    </main>
  );
};

export default Home;
