import React, { createContext, useMemo } from "react";
import { store, reducer } from "../../store/store";

/* provides global state and dispatch to all children */

const storeContext = createContext({});

export { storeContext };

type Props = {
  children: JSX.Element;
};

const Provider = ({ children }: Props) => {
  const [state, dispatch] = React.useReducer(reducer, store);
  const providerMemo = useMemo(() => ({ state, dispatch }), [state]);

  return (
    <storeContext.Provider value={providerMemo}>
      {children}
    </storeContext.Provider>
  );
};

export default Provider;
