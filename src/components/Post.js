import React from 'react';
import PropTypes from 'prop-types';

function Post({ post, deletePost }) {
  return (
    <>
    <p>{post.postTitle}</p>
    <button onClick={deletePost.bind(null, post.postId)}>Delete</button>
    </>
  );
}

Post.propTypes = {
  deletePost: PropTypes.func.isRequired,
  post: PropTypes.shape({
    postId: PropTypes.number.isRequired,
    postTitle: PropTypes.string.isRequired
  })
};

export default Post;
