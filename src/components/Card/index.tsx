import { CardContainer } from "./styles";
import Slider from "../Slider";
import { ICardProps } from "./interfaces";

const Card = ({ name, category, description, photos, price }: ICardProps) => {
  return (
    <CardContainer>
      <Slider imageURLsList={photos} />
      <h2 className="product-name">{name}</h2>
      <span className="product-category">{category}</span>
      <p className="product-description">{description}</p>
      <span className="product-price">{price}</span>

      <button type="button">Adicionar ao caarrinho</button>
    </CardContainer>
  );
};
export default Card;
