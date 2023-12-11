import { CardContainer, TCardContainerStyles } from "./styles";
import Slider from "../Slider";
import { TProduct } from "@/interfaces";
import Link from "next/link";

const ProductCard = ({
  product,
  styles,
}: {
  product: TProduct;
  styles?: TCardContainerStyles;
}) => {
  return (
    <CardContainer style={styles}>
      <Slider
        photos={product.photos}
        styles={{ width: "100%", height: "60%" }}
      />
      {/* {product.photos.map((pht) => {
        return (
          <figure key={pht.id}>
            <img src={pht.url} alt="" />
          </figure>
        );
      })} */}
      <section className="product-dectails">
        <h2 className="product-name">{product.title.slice(0, 20)}</h2>
        <p className="product-description">
          {product.description.slice(0, 100)}
        </p>
        <span className="product-price">
          R$ <strong>{product.price}</strong> ou em até{" "}
          {product.max_installments}x
        </span>
        <div className="button-container">
          <button className="add-to-cart-button" type="button">
            Adicionar ao carrinho
          </button>
          <Link href={`/products/${product.id}`}>Ver</Link>
        </div>
      </section>
    </CardContainer>
  );
};
export default ProductCard;
