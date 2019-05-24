import { connect } from 'react-redux';
import { getPosts } from '../selectors/postSelectors';
import Posts from '../components/Posts';
import { deletePost } from '../actions/postActions';

const mapStateToProps = state => ({
  posts: getPosts(state)
});

const mapDispatchToProps = dispatch => ({
  deletePost(postId) {
    dispatch(deletePost(postId)); 
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Posts);
