import { useCount } from "../context/CounterContext";

const Counter = () => {
  const { state, dispatch } = useCount();
  return (
    <>
      <button onClick={() => dispatch({ type: "increment" })}>increment</button>
      <button onClick={() => dispatch({ type: "decrement" })}>decrement</button>
      <h1>{state.count}</h1>
    </>
  );
};

export default Counter;
