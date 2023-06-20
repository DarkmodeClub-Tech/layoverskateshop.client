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

  useEffect(() => {
    const getProductsList = async () => {
      const res = await api.get("/products");
      console.log(res.data, "CONTEXT");
      setProducts(res.data);
    };
    getProductsList();
  }, []);

  return (
    <ProductsContext.Provider
      value={{ products, setProducts, categories, setCategories }}
    >
      {children}
    </ProductsContext.Provider>
  );
};
export default ProductsContextProvider;
