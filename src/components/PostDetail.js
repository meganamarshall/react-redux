import React from 'react';
import PropTypes from 'prop-types';

function PostDetail({ post }) {
  return (
  <>
    <h2>{post.postTitle}</h2>
    <p>{post.postBody}</p>
  </>
  );
}

PostDetail.propTypes = {
  post: PropTypes.shape({
    postBody: PropTypes.number.isRequired,
    postTitle: PropTypes.string.isRequired
  }).isRequired
};

export default PostDetail;
