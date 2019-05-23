import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

export default class PostForm extends PureComponent {
  static propTypes = {
    onSubmit: PropTypes.func.isRequired
  }

  state = {
    postTitle: '',
    postBody: ''
  }

  handleSubmit = event => {
    event.preventDefault();

    const { postTitle, postBody } = this.state;
    this.props.onSubmit(postTitle, postBody);
    this.setState({ postTitle: '', postBody: '' });
  }

  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
  }

  render() {
    const { postTitle, postBody } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <input name="postTitle" value={postTitle} onChange={this.handleChange} />
        <textarea name="postBody" value={postBody} onChange={this.handleChange} />
        <button>Submit</button>
      </form>
    );
  }
}
