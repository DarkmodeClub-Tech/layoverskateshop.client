import { useRouter } from "next/router";
import { useContext, useEffect, useState } from "react";
import { TProduct, TProductsResponse } from "../../interfaces/products";
import { InferGetServerSidePropsType } from "next";
import { api } from "../../services/api";
import { ProductsContext } from "../../app/contexts/product";
import { TCategoriesResponse, TCategory } from "../../interfaces/category";
import { ProductLayout } from "../../components/ProductLayout";

export const getServerSideProps = async () => {
  const { data: products }: TProductsResponse = await api.get("/products");
  const { data: categories }: TCategoriesResponse = await api.get(
    "/categories"
  );
  return { props: { products, categories } };
};

const ProductPage = ({
  products,
  categories,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  const router = useRouter();
  const { category } = router.query;
  const { setProducts, setCategories } = useContext(ProductsContext);

  const [filteredProducts, setFilteredProducts] = useState<TProduct[]>([]);

  useEffect(() => {
    setProducts(products);
    setCategories(categories);
  }, [products, categories]);

  useEffect(() => {
    const filterProductById = (categoryTitle: string) => {
      const product: TProduct[] = products.filter(
        (p: TProduct) => p.category.title === categoryTitle
      );
      setFilteredProducts(product);
    };

    if (category) filterProductById(String(category));
  }, []);

  console.log(filteredProducts);

  return (
    <>
      {filteredProducts.length > 0 ? (
        filteredProducts.map((p) => {
          return <ProductLayout key={p.id} product={p} />;
        })
      ) : (
        <></>
      )}
    </>
  );
};

export default ProductPage;
