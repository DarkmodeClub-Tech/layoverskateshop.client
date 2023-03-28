import { StyledList } from "./styles";
import { IProduct } from "../Card/interfaces";
import Card from "../Card";

interface IListProps {
  products: IProduct[];
}

const List = ({ products }: IListProps) => {
  return (
    <StyledList>
      {products.map((p, index) => {
        return (
          <li key={index}>
            <Card {...p} />
          </li>
        );
      })}
    </StyledList>
  );
};
export default List;
