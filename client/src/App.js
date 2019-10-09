import React from 'react';
import { Route } from 'react-router-dom';

import './App.scss';
import Header from './components/header/Header';
import Posts from './components/posts/Posts';
import Comments from './components/comments/Comments';
import AllComments from './components/comments/AllComments';

function App() {
  return (
    <div className='App'>
      <Route path='/' component={Header} />
      <Route exact path='/posts' component={Posts} />
      <Route exact path='/comments' component={AllComments} />
      <Route path='/posts/comments/:id' component={Comments} />
    </div>
  );
}

export default App;
