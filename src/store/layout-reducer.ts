const initialLayoutState = {
  pageTitle: "Dashboard",
  openMessage: false,
  error: false,
  signalMessage: "Done!"
};

const layoutActions = {
  LAYOUT_SET_ALL: "LAYOUT_SET_ALL",
  CLEAR_LAYOUT: "CLEAR_LAYOUT"
};

function layoutReducer(state: any, action: { type: string; payload: any }) {
  switch (action.type) {
    case layoutActions.LAYOUT_SET_ALL:
      return {
        ...state,
        ...action.payload
      };
    case layoutActions.CLEAR_LAYOUT:
      return {
        ...initialLayoutState
      };
    default:
      return state;
  }
}

export { initialLayoutState, layoutActions, layoutReducer };
