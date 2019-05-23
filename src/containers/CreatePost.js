import { connect } from 'react-redux';
import { addPost } from '../actions/postActions';
import PostForm from '../components/PostForm';

const mapDispatchToProps = dispatch => ({
  onSubmit({ postTitle, postBody }) {
    dispatch(addPost(postTitle, postBody));
  }
});

export default connect(
  null,
  mapDispatchToProps
)(PostForm);
