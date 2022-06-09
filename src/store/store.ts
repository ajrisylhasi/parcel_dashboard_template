import combineReducers from "react-combine-reducers";
import { initialLayoutState, layoutReducer } from "./reducers/layout-reducer";
import { initialAuthState, authReducer } from "./reducers/auth-reducer";

const [reducer, store] = combineReducers({
  layout: [layoutReducer, initialLayoutState],
  auth: [authReducer, initialAuthState]
});

export { store, reducer };
