import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { AuthProvider } from 'context/authContext';
import AuthRoute from 'utils/AuthRoute';

import Home from './pages/Home';
import AccessibleNavigationAnnouncer from 'components/AccessibleNavigationAnnouncer';
import Navbar from 'layouts/Navbar';
import Register from 'pages/Register';
import SinglePost from 'pages/Posts/SinglePost';

function App() {
  return (
    <AuthProvider>
      <div className='min-h-screen m-4 bg-gray-800 divide-y rounded-lg shadow-lg divide-gray-700'>
        <Router>
          <Navbar />
          <AccessibleNavigationAnnouncer />
          <Switch>
            <AuthRoute exact path='/register' component={Register} />
            <Route exact path='/' component={Home} />
            <Route exact path='/post/:postId' component={SinglePost} />
          </Switch>
        </Router>
      </div>
    </AuthProvider>
  );
}

export default App;
