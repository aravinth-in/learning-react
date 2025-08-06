import { useQuery } from '@tanstack/react-query';

// A function to fetch the data
const fetchPosts = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts');
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  return response.json();
};

const PostsList = () => {
  // Use the useQuery hook to fetch and manage the data
  const { data, isLoading, isError, error } = useQuery({
    // The queryKey is a unique identifier for this query.
    // React Query uses it for caching and refetching.
    queryKey: ['posts'],
    // The queryFn is the function that actually fetches the data.
    queryFn: fetchPosts,
  });

  if (isLoading) {
    return <div>Loading posts...</div>;
  }

  if (isError) {
    return <div>An error occurred: {error.message}</div>;
  }

  // Once data is loaded, display it
  return (
    <div style={{ maxWidth: '800px', margin: '0 auto', padding: '20px', border: '1px solid #ccc', borderRadius: '8px' }}>
      <h2>Posts</h2>
      <ul>
        {data.slice(0, 10).map((post) => (
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