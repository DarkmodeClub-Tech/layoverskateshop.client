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

export interface IProductProviderProps {
  children: ReactNode;
}

export interface IUserContext {
  user: TUser;
  setUser: Dispatch<SetStateAction<TUser>>;
  cart: TCart;
  setCart: Dispatch<SetStateAction<TCart>>;
}

export const UserContext = createContext({} as IUserContext);

const UserContextProvider = ({ children }: IProductProviderProps) => {
  const [user, setUser] = useState<TUser>({} as TUser);
  const [cart, setCart] = useState<TCart>({} as TCart);

  const getUserdata = async (token: string) => {
    const res = await api.get("/customers/retrieve", {
      headers: { authorization: `Bearer ${token}` },
    });
    const user: TUser = res.data;

    setUser(user);
    setCart(cart);

    return user;
  };

  useEffect(() => {
    const token = localStorage.getItem("@lvrsk8shop-auth-token");

    if (token) {
      try {
        getUserdata(JSON.parse(token));
      } catch (err) {
        console.error(err);
      }
    }
  }, []);

  return (
    <UserContext.Provider value={{ user, setUser, cart, setCart }}>
      {children}
    </UserContext.Provider>
  );
};
export default UserContextProvider;
