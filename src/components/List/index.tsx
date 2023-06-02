import { Title, StyledList } from "./styles";
import { motion } from "framer-motion";
import Card from "../Card";
import { useState } from "react";
import { RxDoubleArrowLeft, RxDoubleArrowRight } from "react-icons/rx";
import { TProduct } from "../../interfaces";

interface IListProps {
  title?: string;
  products: TProduct[];
}

const List = ({ title, products }: IListProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const toRight = () => {
    if (currentIndex > 0) setCurrentIndex(currentIndex - 2);
  };
  const toLeft = () => {
    if (currentIndex <= products.length - 2) setCurrentIndex(currentIndex + 4);
  };

  return (
    <>
      <div className="button-container-list">
        <button
          type="button"
          disabled={currentIndex > 0 ? false : true}
          onClick={toRight}
        >
          {<RxDoubleArrowLeft size={40} />}
        </button>

        {title ? <Title>{title}</Title> : <></>}

        <button
          type="button"
          disabled={currentIndex < products.length - 2 ? false : true}
          onClick={toLeft}
        >
          {<RxDoubleArrowRight size={40} />}
        </button>
      </div>
      <StyledList>
        {products.map((p, index) => {
          return (
            <motion.li
              key={p.id}
              className="li-card"
              animate={{ x: -currentIndex * 300 + "px" }}
              transition={{ ease: "easeInOut", duration: 0.5 }}
            >
              <Card {...p} />
            </motion.li>
          );
        })}
      </StyledList>
    </>
  );
};
export default List;
