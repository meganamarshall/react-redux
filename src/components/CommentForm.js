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
    this.setState({ comment });
  }

  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
  }

  render() {
    const { comment } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        Your Comment: <input name="comment" value={comment} type="text" onChange={this.handleChange} />
        <button>Submit</button>
      </form>
    );
  }
}
