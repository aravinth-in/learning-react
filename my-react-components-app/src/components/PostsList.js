import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchPosts } from '../features/posts/postsSlice';

const PostsList = () => {
  const dispatch = useDispatch();

  // Select the posts and the status from the Redux store
  const { posts, status, error } = useSelector((state) => state.posts);

  // Dispatch the thunk on component mount
  useEffect(() => {
    if (status === 'idle') { // Check status to prevent re-fetching on re-renders
      dispatch(fetchPosts());
    }
  }, [status, dispatch]);

  if (status === 'loading') {
    return <div>Loading posts...</div>;
  }

  if (status === 'failed') {
    return <div>An error occurred: {error}</div>;
  }

  return (
    <div style={{ maxWidth: '800px', margin: '20px auto', padding: '20px', border: '1px solid #ccc', borderRadius: '8px' }}>
      <h2>Posts from Redux Thunk</h2>
      <ul>
        {posts.slice(0, 10).map((post) => (
          <li key={post.id} style={{ marginBottom: '10px', padding: '10px', border: '1px solid #eee', borderRadius: '4px' }}>
            <strong>{post.title}</strong>
            <p>{post.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PostsList;