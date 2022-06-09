import { createContext, useMemo, useReducer } from "react";
import {
  AuthInterface,
  initialAuthState
} from "src/store/reducers/auth-reducer";
import {
  initialLayoutState,
  LayoutInterface
} from "src/store/reducers/layout-reducer";
import { store, reducer } from "src/store/store";

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
  const [state, dispatch] = useReducer(reducer, store);
  const providerMemo = useMemo(() => ({ state, dispatch }), [state]);

  return (
    <storeContext.Provider value={providerMemo}>
      {children}
    </storeContext.Provider>
  );
};

export default Provider;
