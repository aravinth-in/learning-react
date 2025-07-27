import React from 'react';

export const Greeting = (props) => {
  // Components receive their data (from their parent) via a single 'props' object.
  // We can destructure the 'name' property from the props object for cleaner code.

  return (
    // JSX returned by the component
    <>
        <div style={{ padding: '10px', margin: '5px', border: '1px solid lightgray', borderRadius: '5px' }}>
        <h2>Hello, {props.name}!</h2>
        <p>This greeting comes from the Greeting component.</p>
        </div>
    </>
  );
}