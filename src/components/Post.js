import React from 'react';
import PropTypes from 'prop-types';

function Post({ post, deletePost }) {
  return (
    <>
    <p>{post.postTitle}</p>
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
