import Cookies from "js-cookie";

export const deleteAllCookies = () => {
  Object.keys(Cookies.get()).forEach((cookieName) => {
    Cookies.remove(cookieName);
  });
};
