import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

export default class CommentForm extends PureComponent {
  static propTypes = {
    onSubmit: PropTypes.func.isRequired
  }

  state = {
    comment: '',
  }

  handleSubmit = event => {
    event.preventDefault();

    const { comment } = this.state;
    this.props.onSubmit(comment);
    this.setState({ comment: '' });
  }

  updateComment = ({ target }) => {
    this.setState({ comment: target.value });
  }

  render() {
    const { comment } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        Your Comment: <textarea name="comment" value={comment} onChange={this.updateComment} />
        <button>Submit</button>
      </form>
    );
  }
}
