"use client";

import { useContext, useState } from "react";
import { TProduct } from "../../interfaces";
import { ProductLayoutContainer } from "./styles";
import ProductsSection from "../ProductsSection";
import { ProductsContext } from "../../app/contexts/product";
import { TCartProductObject } from "../../interfaces/cart";
import { DeliveryCalculateForm } from "./CalculateDevileryForm";
import { ProductSizesField } from "./ProductSizesField";
import { ProductColorsField } from "./ProductColorsField";
import { ProductFigure } from "./ProductFigure";
import { ProductInfoSection } from "./ProductInfoSection";
import { ProductButtonsField } from "./ProductButtonsField";
import Slider from "../Slider";

export const ProductLayout = ({ product }: { product: TProduct }) => {
  const { products } = useContext(ProductsContext);

  return (
    <ProductLayoutContainer>
      <Slider
        photos={product.photos}
        styles={{ width: "60%", height: "auto" }}
      />
      {/* <ProductFigure productImages={product.photos} /> */}
      <ProductInfoSection product={product} />
      <ProductSizesField productSizes={product.available_sizes} />
      <ProductColorsField productColors={product.available_colors} />
      <DeliveryCalculateForm product={product} />
      <ProductButtonsField product={product} />
      <ProductsSection
        title="Produtos semelhantes"
        products={products.filter(
          (p) => p.category.title === product.category.title
        )}
      />
    </ProductLayoutContainer>
  );
};
