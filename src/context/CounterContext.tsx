import React, { createContext, useContext } from "react";
import { useImmer, useImmerReducer } from "use-immer";

type Action = { type: "increment" } | { type: "decrement" };
type Dispatch = (action: Action) => void;
type State = { count: number };
type CountProviderProps = { children: React.ReactNode };
interface IContext {
  state: State;
  dispatch: Dispatch;
}

const CountStateContext = createContext<IContext | null>(null);

function countReducer(state: State, action: Action) {
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

const CountProvider: React.FC<{}> = ({ children }) => {
  const [state, dispatch] = useImmerReducer(countReducer, { count: 0 });
  const value = { state, dispatch };
  return (
    <CountStateContext.Provider value={value}>
      {children}
    </CountStateContext.Provider>
  );
};

const useCount = () => {
  const context = useContext(CountStateContext);
  if (context === null) {
    throw new Error("useCount must be used within a CountProvider");
  }
  return context;
};

export { CountProvider, useCount };
