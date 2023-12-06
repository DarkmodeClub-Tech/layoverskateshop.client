import Image from "next/image";
import { TbTargetArrow } from "react-icons/tb";

// import { products } from "../assets/database";
import ProductsSection from "../components/ProductsSection";
import LoginForm from "../components/Forms/LoginForm";
import Navbar from "../components/Navbar";
import { Section } from "../components/Section/styles";
import Slider from "../components/Slider";
import { GetStaticProps, InferGetStaticPropsType } from "next";
import { TCategory, TProduct } from "../interfaces";
import { useContext, useEffect, useState } from "react";
import { ProductsContext } from "../app/contexts/product";
import { api } from "../services/api";
import { TProductsResponse } from "../interfaces/products";
import { TCategoriesResponse } from "../interfaces/category";
import { LoadingElement } from "../components/LoadingElement";
import { UserContext } from "../app/contexts/user";

export const getStaticProps = async () => {
  const { data: products }: TProductsResponse = await api.get("/products");
  const { data: categories }: TCategoriesResponse = await api.get(
    "/categories"
  );
  return { props: { products, categories } };
};

const HomePage = ({
  products,
  categories,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  const { setProducts, setCategories } = useContext(ProductsContext);
  const { isLoading, setIsLoading } = useContext(UserContext);

  useEffect(() => {
    setProducts(products);
    setCategories(categories);
    setIsLoading(false);
  }, []);

  const sliderImgs = [
    "pexels-kaique-rocha-561654.jpg",
    // "brand-betterOne.png",
    // "pexels-luis-dalvan-1770813.jpg",
  ];

  return (
    <>
      {isLoading ? (
        <LoadingElement />
      ) : (
        <>
          <Slider photos={sliderImgs} styles={{ height: "auto" }} />
          <ProductsSection title="Todos" products={products} />
          <ProductsSection
            title="Camisetas"
            products={products.filter(
              (p: TProduct) => p.category.title === "tshirt"
            )}
          />
          <ProductsSection
            title="Shapes"
            products={products.filter(
              (p: TProduct) => p.category.title === "shape"
            )}
          />
          <Slider
            photos={[
              "promo.png",
              // "pexels-kaique-rocha-561654.jpg"
            ]}
            styles={{ height: "auto" }}
          />
          <ProductsSection
            title="Rodas"
            products={products.filter(
              (p: TProduct) => p.category.title === "wheels"
            )}
          />
          <ProductsSection
            title="Tênis"
            products={products.filter(
              (p: TProduct) => p.category.title === "shoes"
            )}
          />
        </>
      )}
    </>
  );
};
export default HomePage;
