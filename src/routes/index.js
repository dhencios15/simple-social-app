import { lazy } from 'react';

const Posts = lazy(() => import('pages/Posts'));
const SinglePost = lazy(() => import('pages/Posts/SinglePost'));

const routes = [
  {
    path: '/',
    components: Posts,
  },
  {
    path: '/post/:postId',
    components: SinglePost,
  },
];

export default routes;
