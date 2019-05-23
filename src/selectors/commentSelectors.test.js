import getComments from './commentSelectors';

describe('comments selectors', () => {
  it('gets comments by post id', () => {
    const state = {
      0: ['nice post', 'hello'],
      1: ['hello', 'nice post'],
      2: ['yes', 'i agree']
    };
    expect(getComments(state, 0)).toEqual(['nice post', 'hello']);
  });
});
