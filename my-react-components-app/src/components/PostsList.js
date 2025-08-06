import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

const PostsList = () => {
  const dispatch = useDispatch();
  const { posts, status, error } = useSelector((state) => state.posts);

  useEffect(() => {
    if (status === 'idle') {
      // We dispatch the pending action to trigger the saga
      dispatch({ type: 'posts/fetchPosts/pending' });
    }
  }, [status, dispatch]);

  // The rest of the component logic remains the same...
  if (status === 'loading') {
    return <div>Loading posts...</div>;
  }

  if (status === 'failed') {
    return <div>An error occurred: {error}</div>;
  }

  return (
    <div style={{ maxWidth: '800px', margin: '20px auto', padding: '20px', border: '1px solid #ccc', borderRadius: '8px' }}>
      <h2>Posts from Redux Saga</h2>
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