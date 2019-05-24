import { connect } from 'react-redux';
import { addComment } from '../actions/commentActions';
import CommentForm from '../components/CommentForm';

const mapDispatchToProps = dispatch => ({
  onSubmit(comment) {
    dispatch(addComment(comment));
  }
});

export default connect(
  null,
  mapDispatchToProps
)(CommentForm);
