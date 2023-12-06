import { TProduct } from "@/interfaces";
import Link from "next/link";

export const FoundProductCardLink = ({ product }: { product: TProduct }) => {
  const productPrice = Number(product?.price).toLocaleString("pt-BR", {
    currency: "BRL",
    style: "currency",
  });

  return (
    <Link href={`/${product.id}`}>
      <figure className="product-figure">
        {/* eslint-disable-next-line @next/next/no-img-element*/}
        <img
          src={product.photos[0].url}
          alt="product photo"
          className="product-img"
        />
        <figcaption>
          {product.title.slice(0, 30) + "..."}
          <span className="product-price">{productPrice}</span>
          {/* <span className="product-category">{product.category.title}</span> */}
        </figcaption>
      </figure>
    </Link>
  );
};
