import getPosts from './postSelectors';

describe('post selectors', () => {
  it('gets a list of all posts', () => {
    const state = {
      posts: [{ postTitle: 'hi', postBody: 'wow' }, { postTitle: 'hello', postBody: 'amazing' }, { postTitle: 'really', postBody: 'amazing' }]
    };
    expect(getPosts(state)).toEqual([
      { postTitle: 'hi', postBody: 'wow' }, { postTitle: 'hello', postBody: 'amazing' }, { postTitle: 'really', postBody: 'amazing' }
    ]);
  });
});
