import { connect } from 'react-redux';
import PostDetail from '../components/PostDetail';
import { deletePost } from '../actions/postActions';
import { getPost } from '../selectors/postSelectors';

const mapStateToProps = state => ({
  post: getPost(state)
});

const mapDispatchToProps = dispatch => ({
  deletePost(id) {
    dispatch(deletePost(id));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PostDetail);
