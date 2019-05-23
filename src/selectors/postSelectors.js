export function getPosts(state) {
  return state.posts;
}

export function getPost(state, id) {
  return state.posts[id];
}
