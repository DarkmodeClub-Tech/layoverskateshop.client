"use client";

import { TProduct } from "@/interfaces";

import { ProductCardLink } from "./ProductCardLink";
import { useProductsContext } from "@/app/contexts";
import { ProductListUl } from "./styles";

export const ProductList = ({ products }: { products: TProduct[] }) => {
  const { isOpenNavbarProductList, setIsOpenNavbarProductList } =
    useProductsContext();

  return (
    <>
      {isOpenNavbarProductList && products.length > 0 && (
        <ProductListUl
          onMouseOutCapture={() => setIsOpenNavbarProductList(false)}
        >
          {products.map((p) => {
            return (
              <li key={p.id}>
                <ProductCardLink product={p} />
              </li>
            );
          })}
        </ProductListUl>
      )}
    </>
  );
};
