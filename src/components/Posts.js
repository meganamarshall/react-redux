import React from 'react';
import PropTypes from 'prop-types';
import Post from './Post';

function Posts({ posts, deletePost }) {
  const postList = posts.map(post => (
    <li key={post.postId}>
      <Post deletePost={deletePost} post={post} />
    </li>
  ));

  return (
    <ul>
      {postList}
    </ul>
  );
}

Posts.propTypes = {
  deletePost: PropTypes.func.isRequired,
  posts: PropTypes.arrayOf(PropTypes.shape({
    postId: PropTypes.number.isRequired,
    postTitle: PropTypes.string.isRequired
  }))
};

export default Posts;

