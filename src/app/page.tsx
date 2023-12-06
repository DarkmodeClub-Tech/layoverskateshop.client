import ProductsSection from "../components/ProductsSection";
import Slider from "../components/Slider";
import { TCategory, TProduct } from "../interfaces";
import { api } from "@/services/api";
import { TSeller } from "@/interfaces/seller";

const HomePage = async () => {
  const data: {
    seller: TSeller;
    categories: TCategory[];
    products: TProduct[];
  } = (await api.get("/sellers/products")).data;

  const { seller, categories, products } = data;
  return (
    <>
      {products && products.length > 0 && (
        <>
          <Slider photos={seller?.cover_photos} styles={{ height: "auto" }} />
          {/* <ProductsSection title="Todos" products={products} /> */}

          {categories.map((c) => {
            return (
              <ProductsSection
                key={c.id}
                title={c.title}
                products={products.filter(
                  (p: TProduct) => p.category.title === "tshirt"
                )}
              />
            );
          })}
        </>
      )}
    </>
  );
};
export default HomePage;
