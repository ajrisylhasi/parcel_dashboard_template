import combineReducers from "react-combine-reducers";
import { initialLayoutState, layoutReducer } from "./layout-reducer";
import { initialAuthState, authReducer } from "./auth-reducer";

const [reducer, store] = combineReducers({
  layout: [layoutReducer, initialLayoutState],
  auth: [authReducer, initialAuthState]
});

export { store, reducer };
