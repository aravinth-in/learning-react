
const Greeting = ({ name, message }) => {
  // 'name' and 'message' are now directly available as variables
  return (
    <div style={{ padding: '10px', margin: '5px', border: '1px solid lightgray', borderRadius: '5px', backgroundColor: '#eef' }}>
      <h2>Hello, {name}!</h2>
      <p>{message}</p>
      {/*
        If we tried to do name = "New Name"; here, it would result in an error
        because props are read-only.
      */}
    </div>
  );
};

export default Greeting;