import {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useState,
} from "react";
import { TProduct } from "../interfaces";

export interface IProductProviderProps {
  children: ReactNode;
}

export interface IProductsContext {
  products: TProduct[];
  setProducts: Dispatch<SetStateAction<TProduct[]>>;
}

export const ProductsContext = createContext({} as IProductsContext);

const ProductsContextProvider = ({ children }: IProductProviderProps) => {
  const [products, setProducts] = useState([] as TProduct[]);
  return (
    <ProductsContext.Provider value={{ products, setProducts }}>
      {children}
    </ProductsContext.Provider>
  );
};
export default ProductsContextProvider;
