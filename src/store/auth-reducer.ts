import User from "/types/User";
import Cookies from "js-cookie";

function deleteAllCookies() {
  Object.keys(Cookies.get()).forEach((cookieName) => {
    Cookies.remove(cookieName);
  });
}

export interface AuthInterface {
  user: User;
  token: string;
}

const initialAuthState: AuthInterface = {
  user: {
    name: "aaa",
    email: "aaa"
  },
  token: ""
};

const authActions = {
  AUTH_SET_ALL: "AUTH_SET_ALL",
  CLEAR_AUTH: "CLEAR_AUTH",
  LOGOUT_USER: "LOGOUT_USER"
};

function authReducer(
  state: string[],
  action: { type: string; payload: Partial<AuthInterface> }
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
    case authActions.LOGOUT_USER:
      deleteAllCookies();
      return { ...state, ...initialAuthState };
    default:
      return state;
  }
}

export { initialAuthState, authActions, authReducer };
