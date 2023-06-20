import { useRouter } from "next/router";
import { useContext, useEffect, useState } from "react";
import { TProduct, TProductsResponse } from "../interfaces/products";
import { InferGetServerSidePropsType } from "next";
import { api } from "../services/api";
import { ProductsContext } from "../contexts/product.context";
import { TCategoriesResponse } from "../interfaces/category";
import { ProductComponent } from "../components/ProductPage";

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
  const { id } = router.query;
  const { setProducts, setCategories } = useContext(ProductsContext);

  const [filteredProducts, setFilteredProducts] = useState<TProduct[]>([]);

  useEffect(() => {
    setProducts(products);
    setCategories(categories);
  }, []);

  useEffect(() => {
    const filterProductById = (id: string) => {
      const product: TProduct[] = products.filter((p: TProduct) => p.id === id);
      setFilteredProducts(product);
    };
    if (id) filterProductById(id as string);
  }, [id]);

  console.log(filteredProducts);

  return (
    <>
      {filteredProducts.length > 0 ? (
        filteredProducts.map((p) => {
          return <ProductComponent key={p.id} product={p} />;
        })
      ) : (
        <></>
      )}
    </>
  );
};

export default ProductPage;
