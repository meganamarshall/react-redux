import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function Post({ post, deletePost }) {
  return (
    <>
    <Link to={`posts/${post.id}`}>{post.postTitle}</Link>
    <button onClick={deletePost.bind(null, post.id)}>Delete</button>
    </>
  );
}

Post.propTypes = {
  deletePost: PropTypes.func.isRequired,
  post: PropTypes.shape({
    id: PropTypes.number.isRequired,
    postTitle: PropTypes.string.isRequired
  })
};

export default Post;
