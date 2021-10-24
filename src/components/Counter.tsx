import useCount from "../hooks/useCount";

const Counter = () => {
  const { useStore, useDispatch } = useCount();
  const dispatch = useDispatch();
  const countStore = useStore();
  console.log(dispatch, countStore);
  if (dispatch && countStore) {
    return (
      <>
        <button onClick={() => dispatch({ type: "increment" })}>
          increment
        </button>
        <button onClick={() => dispatch({ type: "decrement" })}>
          decrement
        </button>
        <h1>{countStore.count}</h1>
      </>
    );
  }
  return <div>이거 에러다</div>;
};

export default Counter;
