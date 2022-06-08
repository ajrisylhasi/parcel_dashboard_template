const initialAuthState = {
  user: {
    name: "",
    email: ""
  }
};

const authActions = {
  AUTH_SET_ALL: "AUTH_SET_ALL",
  CLEAR_AUTH: "CLEAR_AUTH",
  LOGOUT: "LOGOUT"
};

function authReducer(
  state: string[],
  action: { type: string; payload: string[] }
) {
  switch (action.type) {
    case authActions.AUTH_SET_ALL:
      return {
        ...state,
        ...action.payload
      };
    case authActions.CLEAR_AUTH:
      return {
        ...initialAuthState
      };
    default:
      return state;
  }
}

export { initialAuthState, authActions, authReducer };
