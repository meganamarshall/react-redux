import { connect } from 'react-redux';
import { createPost } from '../actions/postActions';
import PostForm from '../components/PostForm';

const mapDispatchToProps = dispatch => ({
  onSubmit({ postTitle, postBody }) {
    dispatch(createPost(postTitle, postBody));
  }
});

export default connect(
  null,
  mapDispatchToProps
)(PostForm);
