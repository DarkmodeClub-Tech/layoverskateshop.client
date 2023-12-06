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
import { TProduct, TCategory } from "../../interfaces";
import { api } from "../../services/api";
import { TSeller } from "@/interfaces/seller";

export interface IProductsContext {
  foundProducts: TProduct[];
  setFoundProducts: Dispatch<SetStateAction<TProduct[]>>;
  isOpenNavbarProductList: boolean;
  setIsOpenNavbarProductList: Dispatch<SetStateAction<boolean>>;
  isOpenFoundProductsList: boolean;
  setIsOpenFoundProductsList: Dispatch<SetStateAction<boolean>>;
  globalSeller: TSeller | null;
  setGlobalSeller: Dispatch<SetStateAction<TSeller | null>>;
  products: TProduct[];
  setProducts: Dispatch<SetStateAction<TProduct[]>>;
  categories: TCategory[];
  setCategories: Dispatch<SetStateAction<TCategory[]>>;
  getProductsList: (url: string) => Promise<any>;
}

export const ProductsContext = createContext({} as IProductsContext);

export const ProductsProvider = ({ children }: { children: ReactNode }) => {
  const [products, setProducts] = useState<TProduct[]>([]);
  const [categories, setCategories] = useState<TCategory[]>([]);
  const [globalSeller, setGlobalSeller] = useState<TSeller | null>(null);
  const [foundProducts, setFoundProducts] = useState<TProduct[]>([]);

  const [isOpenNavbarProductList, setIsOpenNavbarProductList] =
    useState<boolean>(false);

  const [isOpenFoundProductsList, setIsOpenFoundProductsList] = useState(false);

  const getProductsList = async (url: string) => {
    try {
      const { data } = await api.get(url);
      setProducts(data);

      return data;
    } catch (error) {
      console.error(error);
    }
  };

  // const { data, error } = useSWR(`/products`, getProductsList);

  const getSellerData = async (id: string) => {
    try {
      const seller: TSeller = await api.get(`/sellers/${id}`);
      setGlobalSeller(seller);
    } catch (err) {
      console.error(err);
    }
  };

  // useEffect(() => {
  //   getProductsList("/products");
  // }, []);

  // useEffect(() => {
  //   setProducts(data);
  //   console.log(data);
  // }, [data, error]);

  useEffect(() => {
    if (products && products.length > 0) getSellerData(products[0].seller);
  }, [products]);

  return (
    <ProductsContext.Provider
      value={{
        foundProducts,
        setFoundProducts,
        isOpenNavbarProductList,
        setIsOpenNavbarProductList,
        isOpenFoundProductsList,
        setIsOpenFoundProductsList,
        globalSeller,
        setGlobalSeller,
        products,
        setProducts,
        categories,
        setCategories,
        getProductsList,
      }}
    >
      {children}
    </ProductsContext.Provider>
  );
};

export const useProductsContext = () => useContext(ProductsContext);
