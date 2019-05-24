import React from 'react';
import CreatePost from '../containers/CreatePost';
import AllPosts from '../containers/AllPosts';

export default function Home() {
  return (
    <>
      <h1>My Blog</h1>
      <h2>New Post</h2>
      <CreatePost />
      <h2>All Posts</h2>
      <AllPosts />
    </>
  );
}
