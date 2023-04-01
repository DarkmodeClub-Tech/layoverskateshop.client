import { CardContainer } from "./styles";
import Slider from "../Slider";
import { ICardProps } from "./interfaces";

const Card = ({ name, category, description, photos, price }: ICardProps) => {
  return (
    <CardContainer>
      <img src={photos ? photos[0] : ""} alt="" />
      <h2 className="product-name">{name}</h2>
      <p className="product-description">{description}</p>
      <span className="product-price">
        R$ {price} ou em até 3 x {}
      </span>

      <div className="button-container">
        <button className="add-to-cart-button" type="button">
          Adicionar ao carrinho
        </button>
        <button className="add-to-cart-button" type="button">
          Ver
        </button>
      </div>
    </CardContainer>
  );
};
export default Card;
