import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import AllPosts from '../containers/AllPosts';
import CreatePost from '../containers/CreatePost';

export default function App() {
  return (
    <Router>
      <>
      <h1>is this working?</h1>
      {/* <AllPosts /> */}
      <CreatePost />
      <Switch>
        <Route path="/allposts" component={AllPosts} />
        <Route path="/CreatePost" component={CreatePost} />
      </Switch>
      </>
    </Router>
  );
}
