import { ReactNode } from "react";
import { TCategory, TProduct } from "@/interfaces";
import { CategoriesNav } from "./CategoriesNav";
import { ProductList } from "./ProductsList";

const Navbar = ({
  categories,
  products,
}: {
  categories: TCategory[];
  products: TProduct[];
}) => {
  return (
    <>
      <CategoriesNav categories={categories} />
      <ProductList products={products} />
    </>
  );
};
export default Navbar;
