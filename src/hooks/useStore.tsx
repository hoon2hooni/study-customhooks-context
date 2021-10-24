import React, { createContext, useContext, Dispatch } from "react";
import { useImmerReducer, Reducer } from "use-immer";

type ProviderProps = { children: React.ReactNode };

export default function MakeStore<S>(
  reducer: Reducer<S, any>,
  initialState: S
) {
  const storeContext = createContext<S | null>(null);
  const dispatchContext = createContext<Dispatch<any> | null>(null);

  const [state, dispatch] = useImmerReducer(reducer, initialState);
  function StoreProvider({ children }: ProviderProps) {
    return (
      <dispatchContext.Provider value={dispatch}>
        <storeContext.Provider value={state}>{children}</storeContext.Provider>
      </dispatchContext.Provider>
    );
  }

  function useStore() {
    return useContext(storeContext);
  }

  function useDispatch() {
    return useContext(dispatchContext);
  }
  return [StoreProvider, useStore, useDispatch] as const;
}
