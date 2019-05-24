import { connect } from 'react-redux';
import PostDetail from '../components/PostDetail';
import { getPost } from '../selectors/postSelectors';
import { getComments } from '../selectors/commentSelectors';
import { addComment } from '../actions/commentActions';

const mapStateToProps = (state, props) => ({
  post: getPost(state, props.match.params.id),
  comments: getComments(state, props.match.params.id)
});

const mapDispatchToProps = dispatch => ({
  onSubmit(comment) {
    dispatch(addComment(comment));
  }
});


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PostDetail);
