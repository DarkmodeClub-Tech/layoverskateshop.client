"use client";
import { TitleH2, StyledList, StyledSection } from "./styles";
import { motion } from "framer-motion";
import Card from "../Card";
// import { useState, useEffect, useRef, MutableRefObject } from "react";
// import { RxDoubleArrowLeft, RxDoubleArrowRight } from "react-icons/rx";
import { TProduct } from "../../interfaces";
import { useEffect, useRef, useState } from "react";
import {
  IoIosArrowDropleftCircle,
  IoIosArrowDroprightCircle,
} from "react-icons/io";

const ProductsSection = ({
  title,
  products,
}: {
  title: string;
  products: TProduct[];
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const sectionRef = useRef<HTMLElement>(null);

  console.log(currentIndex);
  const toLeft = () => {
    // if (currentIndex > 0)
    setCurrentIndex(currentIndex - 1);
    console.log(currentIndex);
  };

  const toRight = () => {
    // if (currentIndex < 0)
    // console.log(currentIndex);
    setCurrentIndex(currentIndex + 1);
    console.log(currentIndex);
  };

  return (
    // whileTap={{ cursor: "grabbing" }}
    <StyledSection>
      {title ? (
        <TitleH2>
          <span className="title-span">{title.toUpperCase()}</span>
        </TitleH2>
      ) : (
        <></>
      )}
      <div className="button-slider-list-container">
        <button
          type="button"
          onClick={() => toLeft()}
          // disabled={currentIndex > 0 ? false : true}
        >
          <IoIosArrowDropleftCircle size={60} />
        </button>
        <button
          type="button"
          onClick={() => toRight()}
          // disabled={currentIndex < 0 ? false : true}
        >
          <IoIosArrowDroprightCircle size={60} />
        </button>
      </div>
      {/* dragConstraints={{ right: 0, left: -width }} drag="x" ref={sectionRef}  ref={sectionRef}*/}
      <StyledList x={`${-(currentIndex * 300)}px`}>
        {products.map((p) => {
          return (
            <li key={p.id} className="li-card">
              <Card {...p} />
            </li>
          );
        })}
      </StyledList>
    </StyledSection>
  );
};
export default ProductsSection;
