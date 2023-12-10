"use client";

import { TProduct } from "@/interfaces";
import Link from "next/link";

export const ProductCardLink = ({ product }: { product: TProduct }) => {
  const productPrice = Number(product.price).toLocaleString("pt-BR", {
    currency: "BRL",
    style: "currency",
  });

  return (
    <Link href={`/products/${product.id}`} className="product-link">
      <figure>
        <img src={product.photos[0].url} alt="product photo" />
      </figure>

      <span className="title">{product.title.slice(0, 20)}</span>

      <p className="product-price">{productPrice}</p>
    </Link>
  );
};
