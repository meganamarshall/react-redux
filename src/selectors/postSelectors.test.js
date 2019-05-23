import { getPosts, getPost } from './postSelectors';

describe('post selectors', () => {
  it('gets a list of all posts', () => {
    const state = {
      posts: [{ postTitle: 'hi', postBody: 'wow' }, { postTitle: 'hello', postBody: 'amazing' }, { postTitle: 'really', postBody: 'amazing' }]
    };
    expect(getPosts(state)).toEqual([
      { postTitle: 'hi', postBody: 'wow' }, { postTitle: 'hello', postBody: 'amazing' }, { postTitle: 'really', postBody: 'amazing' }
    ]);
  });
  it('gets a post by id', () => {
    const state = {
      posts: [{ postTitle: 'hi', postBody: 'wow' }, { postTitle: 'hello', postBody: 'amazing' }, { postTitle: 'really', postBody: 'amazing' }]
    };
    expect(getPost(state, 0)).toEqual({ postTitle: 'hi', postBody: 'wow' });
  });
});
