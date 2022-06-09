import Cookies from "js-cookie";

export const deleteAllCookies = () => {
  Object.keys(Cookies.get()).forEach((cookieName) => {
    // remove all cookies
    Cookies.remove(cookieName);
  });
};

export const logUserIn = (token: string) => {
  Cookies.set("id_token", token, { expires: 1 / 3 }); // set id_token for 1/3 of a day - 8 hours
};
