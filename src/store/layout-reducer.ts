export interface LayoutInterface {
  pageTitle: string;
  openMessage: boolean;
  error: boolean;
  signalMessage: string;
}

const initialLayoutState: LayoutInterface = {
  pageTitle: "Dashboard",
  openMessage: false,
  error: false,
  signalMessage: "Done!"
};

const layoutActions = {
  LAYOUT_SET_ALL: "LAYOUT_SET_ALL",
  CLEAR_LAYOUT: "CLEAR_LAYOUT"
};

function layoutReducer(
  state: string[],
  action: { type: string; payload: Partial<LayoutInterface> }
) {
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
