import { Title, StyledList, StyledSection } from "./styles";
import { motion } from "framer-motion";
import Card from "../Card";
import { useState, useEffect, useRef, MutableRefObject } from "react";
import { RxDoubleArrowLeft, RxDoubleArrowRight } from "react-icons/rx";
import { TProduct } from "../../interfaces";

interface IProductsSectionProps {
  title?: string;
  products: TProduct[];
}

const ProductsSection = ({ title, products }: IProductsSectionProps) => {
  const [width, setWidth] = useState(0);

  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (sectionRef.current) {
      setWidth(sectionRef.current.scrollWidth - sectionRef.current.offsetWidth);
    }
  }, []);

  return (
    <StyledSection ref={sectionRef} whileTap={{ cursor: "grabbing" }}>
      {title ? <Title>{title}</Title> : <></>}

      <StyledList drag="x" dragConstraints={{ right: 0, left: -width }}>
        {products.map((p) => {
          return (
            <motion.li key={p.id} className="li-card">
              <Card {...p} />
            </motion.li>
          );
        })}
      </StyledList>
    </StyledSection>
  );
};
export default ProductsSection;
