import { TPhoto } from "@/interfaces";
import { ProductFigureContainer } from "./styles";

export const ProductFigure = ({
  productImages,
}: {
  productImages: TPhoto[];
}) => {
  return (
    <ProductFigureContainer>
      {productImages.map((e) => {
        return (
          <figure key={e.id} className="product-figure">
            <img src={e.url} alt="bigger product image" />
          </figure>
        );
      })}
    </ProductFigureContainer>
  );
};
