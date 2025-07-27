const Header = ({ title }) => {
  return (
    <header style={{ backgroundColor: '#f0f0f0', padding: '20px', textAlign: 'center', borderRadius: '8px', marginBottom: '20px' }}>
      <h1>{title}</h1>
      <p>This is a reusable header component.</p>
    </header>
  );
};

export default Header;