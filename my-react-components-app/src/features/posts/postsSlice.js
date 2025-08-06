import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// 1. Define the Async Thunk for data fetching
export const fetchPosts = createAsyncThunk('posts/fetchPosts', async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts');
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  return response.json();
});

// Define the initial state
const initialState = {
  posts: [],
  status: 'idle', // 'idle' | 'loading' | 'succeeded' | 'failed'
  error: null,
};

// 2. Create the Posts Slice
export const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    // You can add other reducers here for non-async actions
  },
  // 3. Handle the lifecycle actions from createAsyncThunk in `extraReducers`
  extraReducers(builder) {
    builder
      .addCase(fetchPosts.pending, (state, action) => {
        state.status = 'loading';
      })
      .addCase(fetchPosts.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.posts = action.payload; // Add fetched posts to the state
      })
      .addCase(fetchPosts.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export default postsSlice.reducer;