import makeStore from "./useStore";

type Action = { type: "increment" } | { type: "decrement" };
type State = typeof initialState;

function countReducer(state: State, action: Action): void {
  switch (action.type) {
    case "increment": {
      return void state.count++;
    }
    case "decrement": {
      return void state.count--;
    }
    default: {
      throw new Error(`Unhandled action type`);
    }
  }
}

const initialState = {
  count: 0,
};

const useCount = () => {
  const [StoreProvider, useStore, useDispatch] = makeStore(
    countReducer,
    initialState
  );
  // if (dispatchContext === null || stateContext === null) {
  //   throw new Error("useCount must be used within a CountProvider");
  // }
  return { StoreProvider, useStore, useDispatch };
};

export default useCount;
