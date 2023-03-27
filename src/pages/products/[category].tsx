import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { products } from "../../database";

interface IProduct {
  photos: string[];
  name: string;
  price: number;
  category: string;
  description: string;
}

const ProductPage = () => {
  const router = useRouter();
  const { category } = router.query;

  const [filteredProducts, setFilteredProducts] = useState<IProduct[]>([]);

  useEffect(() => {
    const filterByCategory = (category: string) => {
      if (category) {
        console.log(category);
        setFilteredProducts(products.filter((p) => p.category === category));
      }
    };
    filterByCategory(category as string);
  }, [category]);

  console.log(filteredProducts);
  return (
    <div>
      {filteredProducts.length > 0 ? (
        filteredProducts.map((p) => {
          return (
            <div>
              <h1>{p.name}</h1>
              <h2>{p.description}</h2>
              <h2>{p.price}</h2>
            </div>
          );
        })
      ) : (
        <></>
      )}
    </div>
  );
};

export default ProductPage;
