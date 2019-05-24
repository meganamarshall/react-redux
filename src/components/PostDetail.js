import React from 'react';
import PropTypes from 'prop-types';

function PostDetail({ post, deletePost }) {
  return (
  <>
  <p>{post.postTitle}</p>
  <p>{post.postBody}</p>
  <button onClick={deletePost.bind(null, post.id)}>Delete</button>
  </>
  );
}

PostDetail.propTypes = {
  deletePost: PropTypes.func.isRequired,
  post: PropTypes.shape({
    postBody: PropTypes.number.isRequired,
    id: PropTypes.number.isRequired,
    postTitle: PropTypes.string.isRequired
  })
};

export default PostDetail;
