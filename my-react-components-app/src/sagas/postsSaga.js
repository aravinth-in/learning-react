import { call, put, takeEvery } from 'redux-saga/effects';

// Our API call function
const fetchPostsFromApi = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts');
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  return response.json();
};

// This is our Worker Saga - it performs the side effect
function* workFetchPosts() {
  try {
    const posts = yield call(fetchPostsFromApi); // Instructs the middleware to call the API
    // When the call is successful, it puts the fulfilled action
    yield put({ type: 'posts/fetchPosts/fulfilled', payload: posts });
  } catch (e) {
    // If the call fails, it puts the rejected action
    yield put({ type: 'posts/fetchPosts/rejected', error: e.message });
  }
}

// This is our Watcher Saga - it listens for the action
export function* watchFetchPosts() {
  // It watches for the 'posts/fetchPosts/pending' action
  yield takeEvery('posts/fetchPosts/pending', workFetchPosts);
}