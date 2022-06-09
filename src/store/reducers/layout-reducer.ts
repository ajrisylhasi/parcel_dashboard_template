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
  CLEAR_LAYOUT: "CLEAR_LAYOUT",
  LAYOUT_SET_USER_LOGGED_IN: "LAYOUT_SET_USER_LOGGED_IN",
  LAYOUT_SET_USER_LOGGED_IN_ERROR: "LAYOUT_SET_USER_LOGGED_IN_ERROR"
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
    case layoutActions.LAYOUT_SET_USER_LOGGED_IN:
      return {
        ...state,
        ...{
          openMessage: true,
          error: false,
          signalMessage: "Logged in successfully!"
        }
      };
    case layoutActions.LAYOUT_SET_USER_LOGGED_IN_ERROR:
      return {
        ...state,
        ...{
          openMessage: true,
          error: true,
          signalMessage:
            "Something went wrong! Please check your credentials and try again."
        }
      };
    default:
      return state;
  }
}

export { initialLayoutState, layoutActions, layoutReducer };
