import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from 'layouts/Navbar';
import Post from 'pages/SinglePost';
import Home from 'pages/Home';
import Login from 'pages/Login';
import Register from 'pages/Register';
import AuthRoute from 'utils/AuthRoute';
import { AuthProvider } from 'context/authContext';

function App() {
  return (
    <AuthProvider>
      <div className='bg-lightslategray-800 min-h-screen'>
        <Router>
          <Navbar />
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/post/:postId' component={Post} />
            <AuthRoute exact path='/login' component={Login} />
            <AuthRoute exact path='/register' component={Register} />
          </Switch>
        </Router>
      </div>
    </AuthProvider>
  );
}

export default App;
