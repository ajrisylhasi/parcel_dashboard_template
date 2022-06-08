import React, { createContext, useMemo } from "react";
import { AuthInterface, initialAuthState } from "../../store/auth-reducer";
import {
  initialLayoutState,
  LayoutInterface
} from "../../store/layout-reducer";
import { store, reducer } from "../../store/store";

/* provides global state and dispatch to all children */

interface AppContextInterface {
  dispatch: (action: string | object) => void;
  state: {
    layout: LayoutInterface;
    auth: AuthInterface;
  };
}

const storeContext = createContext<AppContextInterface>({
  dispatch: () => {
    undefined;
  },
  state: {
    layout: initialLayoutState,
    auth: initialAuthState
  }
});

export { storeContext };

interface Props {
  children: JSX.Element;
}

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
