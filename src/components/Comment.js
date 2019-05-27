import React from 'react';
import PropTypes from 'prop-types';

function Comment({ id, comment, deleteComment }) {
  return (
    <>
    <p>{comment}</p>
    <button onClick={deleteComment.bind(null, id)}>Delete</button>
    </>
  );
}

Comment.propTypes = {
  deleteComment: PropTypes.func.isRequired,
  comment: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired
};

export default Comment;
