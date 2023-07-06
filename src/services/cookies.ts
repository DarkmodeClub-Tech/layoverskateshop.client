import Cookies from "js-cookie";

export const setAuthToken = (token: string): void => {
  Cookies.set("_lvrsk8shop-auth-token", token, { expires: 7 });
};

export const getAuthToken = (): string | undefined => {
  return Cookies.get("_lvrsk8shop-auth-token");
};

export const removeAuthToken = (): void => {
  Cookies.remove("_lvrsk8shop-auth-token");
};
