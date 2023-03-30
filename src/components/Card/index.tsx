import { CardContainer } from "./styles";
import Slider from "../Slider";
import { ICardProps } from "./interfaces";

const Card = ({ name, category, description, photos, price }: ICardProps) => {
  return (
    <CardContainer>
      <Slider imageURLsList={photos} />
      <h2 className="product-name">{name}</h2>
      <p className="product-description">{description}</p>
      <span className="product-price">
        R$ {price} ou em até 3 x {}
      </span>

      <button className="add-to-cart-button" type="button">
        Adicionar ao carrinho
      </button>
    </CardContainer>
  );
};
export default Card;
