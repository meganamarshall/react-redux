import React from 'react';
import PropTypes from 'prop-types';
import Comment from './Comment';

function Comments({ comments, deleteComment }) {
  const commentList = comments.map((comment, i) => (
    <li key={i}>
      <Comment id={i} deleteComment={deleteComment} comment={comment} />
    </li>
  ));

  return (
    <ul>
      {commentList}
    </ul>
  );
}

Comments.propTypes = {
  deleteComment: PropTypes.func.isRequired,
  comments: PropTypes.arrayOf(PropTypes.string).isRequired
};

export default Comments;
