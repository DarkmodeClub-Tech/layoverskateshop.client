import Image from "next/image";
import { ReactNode, useState } from "react";
import { SliderContainer } from "./styles";
import { TbTargetArrow } from "react-icons/tb";
import { ISliderProps } from "./interfaces";

const Slider = ({ imageURLsList, children, styles }: ISliderProps) => {
  const [currentIndex, setCurentIndex] = useState(0);

  return (
    <SliderContainer x={`${currentIndex * 100}%`} {...styles}>
      <section className="add-container">{children}</section>
      <ul>
        {imageURLsList && imageURLsList.length > 0 ? (
          imageURLsList?.map((e, index) => {
            return (
              <li key={index}>
                <img src={e} alt="image" />
              </li>
            );
          })
        ) : (
          <></>
        )}
      </ul>
    </SliderContainer>
  );
};

export default Slider;
