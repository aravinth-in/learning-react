import React from 'react';

export const Header = (props) => {

  return (
    <header style={{ backgroundColor: '#f0f0f0', padding: '20px', textAlign: 'center', borderRadius: '8px', marginBottom: '20px' }}>
      <h1>{props.title}</h1>
      <p>This is a reusable header component.</p>
    </header>
  );
}