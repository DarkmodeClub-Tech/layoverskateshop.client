import {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useEffect,
  useState,
} from "react";
import { TProduct, TCategory } from "../interfaces";
import { api } from "../services/api";
import useSWR from "swr";

export interface IProductProviderProps {
  children: ReactNode;
}

export interface IProductsContext {
  products: TProduct[];
  setProducts: Dispatch<SetStateAction<TProduct[]>>;
  categories: TCategory[];
  setCategories: Dispatch<SetStateAction<TCategory[]>>;
}

export const ProductsContext = createContext({} as IProductsContext);

const ProductsContextProvider = ({ children }: IProductProviderProps) => {
  const [products, setProducts] = useState<TProduct[]>([]);
  const [categories, setCategories] = useState<TCategory[]>([]);

  const getProductsList = async (url: string) => {
    try {
      const { data } = await api.get(url);
      return data;
    } catch (error) {
      return error;
    }
  };

  const { data, error } = useSWR("/products", getProductsList);

  useEffect(() => {
    setProducts(data);
  }, [data, error]);

  return (
    <ProductsContext.Provider
      value={{ products, setProducts, categories, setCategories }}
    >
      {children}
    </ProductsContext.Provider>
  );
};
export default ProductsContextProvider;
