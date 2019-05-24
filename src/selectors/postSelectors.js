export function getPosts(state) {
  return state.posts;
}

export function getPost(state, postId) {
  return state.posts[postId];
}
