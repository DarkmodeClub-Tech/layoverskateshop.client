import { CardContainer } from "./styles";
import Slider from "../Slider";
import { ICardProps } from "./interfaces";

const Card = ({
  title,
  category,
  photos,
  price,
  max_installments,
  description,
}: ICardProps) => {
  return (
    <CardContainer>
      {photos.map((pht) => {
        return (
          <figure>
            <img src={pht.url} alt="" />
          </figure>
        );
      })}
      <section className="product-dectails">
        <h2 className="product-name">{title.slice(0, 20)}</h2>
        <p className="product-description">{description.slice(0, 100)}</p>
        <span className="product-price">
          R$ {price} ou em até {max_installments}x
        </span>
        <div className="button-container">
          <button className="add-to-cart-button" type="button">
            Adicionar ao carrinho
          </button>
          <button className="add-to-cart-button" type="button">
            Ver
          </button>
        </div>
      </section>
    </CardContainer>
  );
};
export default Card;
