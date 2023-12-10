import { ProductLayout } from "@/components/ProductLayout";
import { TSeller, TCategory, TProduct } from "@/interfaces";
import { api } from "@/services/api";

export async function generateStaticParams() {
  const data: { seller: TSeller; products: TProduct[]; category: TCategory } = (
    await api.get("/sellers/products")
  ).data;

  return data?.products.map((product) => ({
    id: product.id,
  }));
}

const getProduct = async (params: {
  id: string;
}): Promise<TProduct | undefined> => {
  const data: { seller: TSeller; products: TProduct[]; category: TCategory } = (
    await api.get("/sellers/products")
  ).data;

  const res = data.products.find((e) => e.id == params.id);

  return res;
};

const ProductPage = async ({ params }: { params: { id: string } }) => {
  const product = await getProduct(params);
  return <>{product && <ProductLayout product={product} />}</>;
};

export default ProductPage;
