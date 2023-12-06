"use client";

import {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
import { TProduct, TCategory, TUser, TCart } from "../../interfaces";
import { api } from "../../services/api";
import {
  getAuthToken,
  removeAuthToken,
  setAuthToken,
} from "../../services/cookies";
import { SubmitHandler } from "react-hook-form";
import { TLoginRequest } from "../../interfaces/user";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import { NextRouter } from "next/router";

export interface IUserContext {
  isOpenHeaderDropDownMenu: boolean;
  setIsOpenHeaderDropDownMenu: Dispatch<SetStateAction<boolean>>;
  user: TUser | null;
  setUser: Dispatch<SetStateAction<TUser | null>>;
  cart: TCart | null;
  setCart: Dispatch<SetStateAction<TCart | null>>;
  login: SubmitHandler<TLoginRequest>;
  logout: () => void;
}

export const UserContext = createContext({} as IUserContext);

export const UserProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<TUser | null>(null);
  const [cart, setCart] = useState<TCart | null>(null);
  const [isOpenHeaderDropDownMenu, setIsOpenHeaderDropDownMenu] =
    useState<boolean>(false);
  const { push } = useRouter();

  const getUserdata = async (token: string) => {
    try {
      const res = await api.get("/customers/retrieve", {
        headers: { authorization: `Bearer ${token}` },
      });
      const user: TUser = res.data;
      setUser(user);

      toast.success(`Bem vindo ${user.first_name}`, { autoClose: 3000 });

      return user;
    } catch (err: any) {
      if (err.response.data.error.message == "jwt expired") {
        localStorage.removeItem("_lvrsk8shop-auth-token");
        removeAuthToken();
        toast.warn("Faça o login", { autoClose: 3000 });
      }
    }
  };

  const login: SubmitHandler<TLoginRequest> = async (data) => {
    const req = await api.post("/customers/auth", data);

    const authentication = req.data;

    setAuthToken(authentication.token);

    localStorage.setItem(
      "_lvrsk8shop-auth-token",
      JSON.stringify(authentication.token)
    );

    getUserdata(authentication.token);
    push("/");
  };

  const logout = () => {
    localStorage.removeItem("_lvrsk8shop-auth-token");
    removeAuthToken();
    toast.success(`Até mais ${user?.first_name}`, { autoClose: 3000 });
    setUser(null);
  };

  useEffect(() => {
    const token = localStorage.getItem("_lvrsk8shop-auth-token");
    let authToken = getAuthToken();

    if (token) getUserdata(JSON.parse(token));
    else if (authToken) getUserdata(authToken);
  }, []);

  useEffect(() => {
    if (user) setCart(user.cart);
  }, [user]);

  return (
    <UserContext.Provider
      value={{
        isOpenHeaderDropDownMenu,
        setIsOpenHeaderDropDownMenu,
        user,
        setUser,
        cart,
        setCart,
        login,
        logout,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export const useUserContext = () => useContext(UserContext);
