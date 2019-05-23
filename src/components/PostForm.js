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

  render() {
    const { postTitle, postBody } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <input name="title" value={postTitle} />
        <textarea name="body" value={postBody} />
      </form>
    );
  }
}
