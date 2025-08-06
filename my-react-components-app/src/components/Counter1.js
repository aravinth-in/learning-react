import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, incrementByAmount } from '../features/counter/counterSlice';

const Counter = () => {
  // Use useSelector to read the state from the store
  const count = useSelector((state) => state.counter.value);
  // Use useDispatch to get the dispatch function
  const dispatch = useDispatch();

  return (
    <div style={{ padding: '20px', border: '1px solid #ccc', margin: '20px', textAlign: 'center' }}>
      <h2>Redux Counter</h2>
      <p style={{ fontSize: '2em' }}>Count: {count}</p>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())} style={{ marginLeft: '10px' }}>Decrement</button>
      <button onClick={() => dispatch(incrementByAmount(5))} style={{ marginLeft: '10px' }}>Increment By Amount</button>
    </div>
  );
};

export default Counter;