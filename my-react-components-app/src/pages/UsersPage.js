import { useParams } from 'react-router-dom';

const UsersPage = () => {
  // Use the useParams hook to get the dynamic part of the URL
  const { userId } = useParams();

  return (
    <>
      <h2>Users Page</h2>
      {userId ? (
        <p>You are viewing user with ID: {userId}</p>
      ) : (
        <p>Select a user to view their profile.</p>
      )}
    </>
  );
};

export default UsersPage;