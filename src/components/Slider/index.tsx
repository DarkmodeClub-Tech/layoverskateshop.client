import Image from "next/image";
import { useState } from "react";
import { SliderContainer } from "./styles";
import { IoMdArrowDropleft, IoMdArrowDropright } from "react-icons/io";

interface ISliderProps {
  imageURLsList?: string[];
}

const Slider = ({ imageURLsList }: ISliderProps) => {
  const [currentIndex, setCurentIndex] = useState(0);
  return (
    <SliderContainer>
      <div className="button-container">
        <button type="button" onClick={() => setCurentIndex(currentIndex - 1)}>
          {<IoMdArrowDropleft size={40} />}
        </button>
        <button type="button" onClick={() => setCurentIndex(currentIndex + 1)}>
          {<IoMdArrowDropright size={40} />}
        </button>
      </div>
      <img src={imageURLsList && imageURLsList[currentIndex]} alt="imagem" />
    </SliderContainer>
  );
};

export default Slider;
