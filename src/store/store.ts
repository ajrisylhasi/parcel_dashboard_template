import combineReducers from "react-combine-reducers";
import { initialLayoutState, layoutReducer } from "./layout-reducer";

const [reducer, store] = combineReducers({
  layout: [layoutReducer, initialLayoutState]
});

export { store, reducer };
