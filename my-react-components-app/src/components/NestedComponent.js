import ThemedBox from './ThemedBox';

const NestedComponent = () => {
  return (
    <div style={{ padding: '10px', border: '1px dashed #999', margin: '10px', borderRadius: '5px' }}>
      <h4>I am a Nested Component</h4>
      <p>I don't receive theme as a prop, but my child `ThemedBox` does!</p>
      <ThemedBox /> {/* ThemedBox will consume the context directly */}
    </div>
  );
};

export default NestedComponent;