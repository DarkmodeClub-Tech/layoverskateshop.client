import { useRouter } from "next/router";
import Image from "next/image";
import { useEffect, useState } from "react";
import Header from "../../components/Header";
import { products } from "../../assets/database";

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
            <>
              <Header />
              <div>
                <Image src={p.photos[0]} width={100} height={100} alt="" />
                <h1>{p.name}</h1>
                <h2>{p.description}</h2>
                <h2>{p.price}</h2>
              </div>
            </>
          );
        })
      ) : (
        <></>
      )}
    </div>
  );
};

export default ProductPage;
