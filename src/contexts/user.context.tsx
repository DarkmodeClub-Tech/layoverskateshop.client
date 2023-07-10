import {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useEffect,
  useState,
} from "react";
import { TProduct, TCategory, TUser, TCart } from "../interfaces";
import { api } from "../services/api";
import {
  getAuthToken,
  removeAuthToken,
  setAuthToken,
} from "../services/cookies";
import { SubmitHandler } from "react-hook-form";
import { TLoginRequest } from "../interfaces/user";
import { NextRouter, useRouter } from "next/router";
import { toast } from "react-toastify";

export interface IProductProviderProps {
  children: ReactNode;
}

export interface IUserContext {
  router: NextRouter;
  user: TUser | null;
  setUser: Dispatch<SetStateAction<TUser | null>>;
  cart: TCart | null;
  setCart: Dispatch<SetStateAction<TCart | null>>;
  isLoading: boolean;
  setIsLoading: Dispatch<SetStateAction<boolean>>;
  login: SubmitHandler<TLoginRequest>;
  logout: () => void;
}

export const UserContext = createContext({} as IUserContext);

const UserContextProvider = ({ children }: IProductProviderProps) => {
  const router: NextRouter = useRouter();
  const [user, setUser] = useState<TUser | null>(null);
  const [cart, setCart] = useState<TCart | null>(null);
  const [isLoading, setIsLoading] = useState(true);

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
    setIsLoading(true);

    const req = await api.post("/customers/auth", data);

    const authentication = req.data;

    setAuthToken(authentication.token);

    localStorage.setItem(
      "_lvrsk8shop-auth-token",
      JSON.stringify(authentication.token)
    );

    getUserdata(authentication.token);
    router.push("/");
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
        router,
        user,
        setUser,
        cart,
        setCart,
        isLoading,
        setIsLoading,
        login,
        logout,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
export default UserContextProvider;
