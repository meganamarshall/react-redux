import React from 'react';
import PropTypes from 'prop-types';
import CommentsByPostId from '../containers/CommentsByPostId';
import AddComment from '../containers/AddComment';

function PostDetail({ post }) {
  return (
  <>
    <h2>{post.postTitle}</h2>
    <p>{post.postBody}</p>
    <AddComment postId={post.id} />
    <CommentsByPostId postId={post.id} />
  </>
  );
}

PostDetail.propTypes = {
  post: PropTypes.shape({
    postBody: PropTypes.string.isRequired,
    postTitle: PropTypes.string.isRequired
  }).isRequired
};

export default PostDetail;
