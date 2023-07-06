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
import { getAuthToken } from "../services/cookies";
import { AxiosError } from "axios";

export interface IProductProviderProps {
  children: ReactNode;
}

export interface IUserContext {
  user: TUser;
  setUser: Dispatch<SetStateAction<TUser>>;
  cart: TCart;
  setCart: Dispatch<SetStateAction<TCart>>;
  isLoading: boolean;
  setIsLoading: Dispatch<SetStateAction<boolean>>;
}

export const UserContext = createContext({} as IUserContext);

const UserContextProvider = ({ children }: IProductProviderProps) => {
  const [user, setUser] = useState<TUser>({} as TUser);
  const [cart, setCart] = useState<TCart>({} as TCart);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem("@lvrsk8shop-auth-token");

    let authToken = getAuthToken();

    const getUserdata = async (token: string) => {
      const res = await api.get("/customers/retrieve", {
        headers: { authorization: `Bearer ${token}` },
      });
      const user: TUser = res.data;

      setUser(user);
      return user;
    };

    if (token) {
      try {
        getUserdata(JSON.parse(token));
      } catch (err: any) {
        console.error(err.data);
      }
    } else if (authToken) {
      try {
        getUserdata(authToken);
      } catch (err) {
        console.error(err);
      }
    }
  }, []);

  useEffect(() => {
    setCart(user.cart);
  }, [user]);

  return (
    <UserContext.Provider
      value={{ user, setUser, cart, setCart, isLoading, setIsLoading }}
    >
      {children}
    </UserContext.Provider>
  );
};
export default UserContextProvider;
