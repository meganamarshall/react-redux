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
    this.setState({ postTitle, postBody });
  }

  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
  }

  render() {
    const { postTitle, postBody } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        Title: <input name="postTitle" value={postTitle} type="text" onChange={this.handleChange} />
        Body: <textarea name="postBody" value={postBody} type="text" onChange={this.handleChange} />
        <button>Submit</button>
      </form>
    );
  }
}
