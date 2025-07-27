import { useState } from 'react';

const LogoutButton = ({ onClick }) => (
  <button onClick={onClick} style={{ backgroundColor: '#dc3545', color: 'white', padding: '10px 15px', borderRadius: '5px', border: 'none', cursor: 'pointer' }}>
    Logout
  </button>
);

const LoginButton = ({ onClick }) => (
  <button onClick={onClick} style={{ backgroundColor: '#28a745', color: 'white', padding: '10px 15px', borderRadius: '5px', border: 'none', cursor: 'pointer' }}>
    Login
  </button>
);

const UserGreeting = () => <h2>Welcome back!</h2>;
const GuestGreeting = () => <h2>Please sign up.</h2>;

const LoginControl = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLoginClick = () => {
    setIsLoggedIn(true);
  };

  const handleLogoutClick = () => {
    setIsLoggedIn(false);
  };

  let button; // Declare a variable to hold the JSX element

  if (isLoggedIn) {
    button = <LogoutButton onClick={handleLogoutClick} />;
  } else {
    button = <LoginButton onClick={handleLoginClick} />;
  }

  return (
    <div style={{
      border: '1px solid #ccc',
      padding: '20px',
      margin: '20px',
      borderRadius: '8px',
      backgroundColor: '#f8f9fa',
      textAlign: 'center'
    }}>
      {isLoggedIn ? <UserGreeting /> : <GuestGreeting />}
      {button} {/* Render the button based on the 'button' variable */}
    </div>
  );
};

export default LoginControl;